
.PHONY: build up down composer composer-install composer-autoload

default:
	docker-compose up

network:
	docker network create -d bridge laravel-nginx

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

composer:
	docker-compose exec php-fpm bash -c "composer update"

composer-install:
	docker-compose exec php-fpm bash -c "composer install"

composer-autoload:
	docker-compose exec php-fpm bash -c "composer dump-autoload"

laravel-install:
	docker-compose exec php-fpm bash -c "composer create-project --perfect-dist laravel/laravel"

laravel:
	docker-compose exec php-fpm bash -c "php artisan $(artisan)"

permissions:
	chown -R www-data:www-data $(CURDIR)/www
	chmod -R 777 $(CURDIR)/www/storage

scheduler:
	docker-compose exe php-fpm bash -c "artisan schedule:run >> /dev/null 2>&1"
