# Stage 1 - build
FROM node:12.16.3-slim AS build-dependencies
WORKDIR /usr/src/app
COPY . ./
RUN npm install -g
RUN npm run-script build

# Stage 2 - the production environment
FROM nginx:1.17.1-alpine
COPY --from=build-dependencies /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
