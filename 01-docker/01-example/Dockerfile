FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# don't expose 3000 because of BU
EXPOSE 4000

CMD [ "node", "app.mjs" ]