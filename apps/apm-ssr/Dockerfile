FROM node:14 as builder

WORKDIR /opt/apm-ssr

RUN copy ./src .

RUN npm i --quiet

RUN npm run build:ssr 

CMD npm run serve

