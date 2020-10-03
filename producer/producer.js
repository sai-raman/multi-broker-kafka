const Kafka = require('no-kafka');

function startSending(p) {
    // unique messages
    let counter = 1;
    setInterval(() => {
        p.send({
            topic: 'kafkaTopic',
            partition: 0, // which partition to target - only 1 in this demo
            message: {
                value: 'Hello interval ' + counter // my message
            }
        })
            .then((result) => {
                counter++;
                console.log(result); // array of results
            });
    }, 1000);
}

const producer = new Kafka.Producer({
    requiredAcks: 1,
    connectionString: '172.26.228.30:9092,172.26.228.30:9093,172.26.228.30:9094'
});

producer.init()
    .then(() => {
        console.log('producer init success!');
        startSending(producer);
    }).catch((err) => console.log('errrooorrrrrr ', err));