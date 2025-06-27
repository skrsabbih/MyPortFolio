FROM php:8.2-apache

RUN apt-get update && apt-get install -y \
    unzip git libpq-dev libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql mbstring gd zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

# Set Apache DocumentRoot to /var/www/html/public
RUN sed -ri -e 's!/var/www/html!/var/www/html/public!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/! /var/www/html/public!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN a2enmod rewrite

RUN composer install --no-dev --optimize-autoloader \
    && php artisan key:generate --force \
    && php artisan migrate --force \
    && php artisan storage:link || true

EXPOSE 80

CMD ["apache2-foreground"]
