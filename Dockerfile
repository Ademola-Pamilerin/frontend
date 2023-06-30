FROM node:alpine as Builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80

FROM nginx
COPY --from=Builder /app/dist /usr/share/nginx/html