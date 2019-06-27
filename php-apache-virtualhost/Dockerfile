
FROM php:7.2-apache

WORKDIR /app

COPY . /app

COPY /vhost.conf /etc/apache2/sites-available/000-default.conf

#RUN apt-get update && apt-get upgrade -y
#
#RUN docker-php-ext-install mbstring pdo pdo_mysql \
#    && chown -R www-data:www-data /app/public

#RUN chown -R www-data:www-data /app/app \
#    && a2enmod rewrite

EXPOSE 80