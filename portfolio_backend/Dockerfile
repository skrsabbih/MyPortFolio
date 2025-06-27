############################
# 1️⃣ Build vendor layer   #
############################
FROM composer:2 AS vendor
WORKDIR /app

COPY composer.json composer.lock ./
# ⚠️ ここ --no-scripts যোগ
RUN composer install --no-dev --prefer-dist --no-interaction --no-progress \
    --ignore-platform-reqs --no-scripts

############################
# 2️⃣ PHP 8.2 + Apache     #
############################
FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
      libpq-dev libzip-dev zip git unzip libpng-dev libonig-dev \
  && docker-php-ext-install pdo pdo_pgsql pgsql mbstring gd zip

RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/! /var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf \
    && a2enmod rewrite

WORKDIR /var/www/html
COPY . .
COPY --from=vendor /app/vendor ./vendor

# Laravel housekeeping
RUN php artisan key:generate --force \
 && php artisan migrate --force \
 && php artisan storage:link || true \
 && php artisan package:discover --ansi   # 🆕 এখন স্ক্রিপ্ট চালাও

EXPOSE 80
CMD ["apache2-foreground"]
