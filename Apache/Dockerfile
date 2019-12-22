FROM alpine:3.7
LABEL Author="Luis Alonzo <wichon@gmail.com>" Description="A Simple apache/php image using alpine Linux for Web Apps"

# Install gnu-libconv required by php7-iconv
#RUN apk add gnu-libiconv
#ENV LD_PRELOAD /usr/lib/preloadable_libiconv.so

# Setup apache and php
RUN apk --update add apache2 php7-apache2 curl \
    php7-json php7-phar php7-openssl php7-curl php7-mcrypt php7-pdo_mysql php7-ctype php7-gd php7-xml php7-dom php7-iconv \
    && rm -f /var/cache/apk/* \
    && mkdir /run/apache2 \
    && mkdir /app \
    && mkdir -p /opt/utils  
    
EXPOSE 80

ADD start.sh /opt/utils/
ADD phpinfo.php /app

RUN chmod +x /opt/utils/start.sh

ENTRYPOINT ["/opt/utils/start.sh"]



