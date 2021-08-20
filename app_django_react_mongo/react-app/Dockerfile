FROM node

RUN mkdir -p /usr/src/react-app

WORKDIR /usr/src/react-app

COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm install
