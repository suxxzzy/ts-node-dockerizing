FROM node:18.4.0-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install 

COPY . .

RUN npm run build

EXPOSE 5000

ENTRYPOINT ["nodemon", "server.ts"]