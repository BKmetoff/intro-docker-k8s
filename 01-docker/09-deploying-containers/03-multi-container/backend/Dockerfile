FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

# ENV MONGODB_USERNAME=root
# ENV MONGODB_PASSWORD=secret
# ENV MONGODB_URL=mongodb
# ENV MONGODB_URL=course-goals

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=h4trg-4DWuT48h2.LyrokdFGo
ENV MONGODB_URL=docker-course.aqs5s.mongodb.net
ENV MONGODB_NAME=docker-course

CMD ["npm", "start"]