# The Base Image used to create this Image
FROM node:lts-alpine

ENV NODE_ENV production

RUN mkdir -p /app
COPY ./* /app

EXPOSE 3000

WORKDIR /app
RUN npm install

WORKDIR /app/services/web/dev/queernewsweb
RUN npm install
RUN npm run build

RUN mkdir -p /app/services/web/app
RUN cp -R dist/* /app/services/web/app/

WORKDIR /app

CMD ["npm", "start"]
