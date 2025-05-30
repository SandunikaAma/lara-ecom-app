# Backend Dockerfile
FROM node:18

# Install netcat for wait-for-it.sh
RUN apt-get update && apt-get install -y netcat

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3007

CMD ["node", "server.js"]

COPY wait-for-it.sh /wait-for-it.sh
ENTRYPOINT ["/wait-for-it.sh", "mysql", "npm", "start"]

