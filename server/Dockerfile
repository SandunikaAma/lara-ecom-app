# Backend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3007

CMD ["node", "server.js"]

COPY wait-for-it.sh /wait-for-it.sh
ENTRYPOINT ["/wait-for-it.sh", "mysql", "npm", "start"]

