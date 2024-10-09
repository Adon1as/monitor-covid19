FROM node:12-alpine AS build
LABEL authors="adon1as"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/covid19dashbord/ /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENV api_url http://localhost:8081/countryVaccinatio

CMD ["nginx", "-g", "daemon off;"]
