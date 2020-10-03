FROM mhart/alpine-node:12
COPY package.json .
RUN npm install --prod
COPY . .
EXPOSE 3001
ENTRYPOINT [ "node","./consumer.js" ]