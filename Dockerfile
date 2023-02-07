# Stage 1
FROM node:latest as build-step

#RUN mkdir -p /app

WORKDIR /app

#COPY package.json /app

COPY . .
RUN npm install



RUN npm run build --prod

# Stage 2

FROM nginx:alpine

COPY --from=build-step /app/dist/rest-employee-angular /usr/share/nginx/html