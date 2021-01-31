# FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

# FROM nginx:alpine
# COPY --from=node /app/dist/oddalecise  /usr/share/nginx/html

# FROM node:9.6.1

# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app
# RUN npm insatll -g @angular/cli@1.7.1

# COPY . /usr/src/app

# CMD ng serve --host 0.0.0.0 --port 4500



FROM node:12.2.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install

RUN npm install -g @angular/cli@7.3.9


COPY . /app


# EXPOSE 4200

CMD ng serve --host 0.0.0.0

