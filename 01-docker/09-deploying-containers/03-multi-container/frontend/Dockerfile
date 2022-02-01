# ==========
# application
FROM node:16-alpine as frontend

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

# ==========
# server
FROM  nginx:1.21.5-alpine

WORKDIR /app

COPY --from=frontend /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


