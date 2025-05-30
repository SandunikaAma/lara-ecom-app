# Frontend Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

# Serve production build using simple static server
RUN npm install -g serve
CMD ["serve", "-s", "build"]
