FROM store/elastic/filebeat:7.8.1 as filebeat

FROM node:14 as builder

WORKDIR /opt/apm-ssr

EXPOSE 4000

COPY package.json .
COPY package-lock.json .

RUN npm ci --quiet
# copy sources
COPY . .

RUN npm run build:ssr

CMD ["node", "dist/apm-ssr/server/main.js"]
