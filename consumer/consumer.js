const Kafka = require('no-kafka');

const consumer = new Kafka.SimpleConsumer({
  connectionString: '172.26.228.30:9092,172.26.228.30:9093,172.26.228.30:9094'
});

// data handler function can return a Promise
const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach((m) => {
    console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
  });
};

return consumer.init()
  .then(() => {
    // Subscribe to partiton 0 in the given topic:
    return consumer.subscribe('kafkaTopic', [0], dataHandler);
  });