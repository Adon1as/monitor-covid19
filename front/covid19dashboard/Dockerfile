FROM node:14 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@11.1.4

COPY . .

RUN ng build --prod

FROM nginx:alpine

COPY --from=build /usr/src/app/dist/covid19dashboard /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
