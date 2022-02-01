FROM node:17-alpine3.12

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

EXPOSE 80

# default/fake vars:
ENV DB_USERNAME=root
ENV DB_PASSWORD=password

CMD [ "npm", "start" ]