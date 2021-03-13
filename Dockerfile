FROM node:fermium-buster as builder

WORKDIR /home/work/ts-react-setup-sample

COPY ./package.json /home/work/ts-react-setup-sample
COPY ./yarn.lock /home/work/ts-react-setup-sample

RUN yarn install

COPY ./webpack.common.ts /home/work/ts-react-setup-sample
COPY ./webpack.prod.ts /home/work/ts-react-setup-sample
COPY ./tsconfig.json /home/work/ts-react-setup-sample
COPY ./public /home/work/ts-react-setup-sample/public
COPY ./src /home/work/ts-react-setup-sample/src

RUN yarn build

FROM nginx:1.19.7-alpine

WORKDIR /var/www/html

COPY ./nginx/conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/work/ts-react-setup-sample/dist .
