
.PHONY: build up down composer composer-install composer-autoload

default:
	docker-compose up

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

