FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

# --build-arg <arg_name=value>
ARG DEFAULT_PORT

# --env-file <file_path>
ENV PORT $DEFAULT_PORT

EXPOSE $PORT

CMD [ "npm", "start" ]