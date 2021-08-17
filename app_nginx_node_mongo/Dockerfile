FROM node:14-alpine

RUN mkdir -p /var/www

WORKDIR /var/www

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]