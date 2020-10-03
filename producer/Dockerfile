FROM mhart/alpine-node:12
COPY package.json .
RUN npm install --prod
COPY . .
EXPOSE 3000
ENTRYPOINT [ "node","./producer.js" ]