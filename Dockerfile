FROM ubuntu:latest

ENV HUGO_VERSION=0.38.1
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz /tmp
RUN tar -xf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -C /tmp \
    && mkdir -p /usr/local/sbin \
    && mv /tmp/hugo /usr/local/sbin/hugo \
    && rm -rf /tmp/hugo_${HUGO_VERSION}_linux_amd64 \
    && rm -rf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

COPY . /site
WORKDIR /site
RUN hugo

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /site/public /usr/share/nginx/html

VOLUME /usr/share/nginx/html/data
VOLUME /usr/share/nginx/html/online
