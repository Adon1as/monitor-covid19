FROM ubuntu:latest
LABEL authors="adon1as"

FROM node:12 AS build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli@11.1.2

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
