FROM node:14.5.0-alpine3.12

COPY dist /app
WORKDIR /app

CMD node server.js
