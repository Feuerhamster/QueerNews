# The Base Image used to create this Image
FROM node:lts-alpine

COPY . /app

EXPOSE 3000

WORKDIR /app
RUN npm install

WORKDIR /app/services/web/dev/queernewsweb
RUN npm install && npm run build

RUN mkdir -p /app/services/web/app && cp -R dist/* /app/services/web/app/ && rm -r /app/services/web/dev

WORKDIR /app
ENV NODE_ENV production

CMD ["npm", "start"]
