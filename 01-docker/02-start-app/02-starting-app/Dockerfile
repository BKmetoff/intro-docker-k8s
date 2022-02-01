FROM node

WORKDIR /app

# copy dependencies first
COPY package.json /app

RUN npm install

# if only code has changed,
# no need to re-install dependencies
COPY . /app

EXPOSE 80

CMD ["node", "server.js"]