FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install 
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
