# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:alpine as builder

WORKDIR /app
COPY package*.json /app/

COPY . .

RUN apk add --no-cache\
	autoconf\
	automake\
	gcc\
	libc-dev\
	libtool\
	make\
	nasm\
	zlib-dev

RUN npm install

RUN npm run build


# => Run container
FROM nginx:1.15.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Initialize environment variables into filesystem
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Run script which initializes env vars to fs
RUN chmod +x env.sh
# RUN ./env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]