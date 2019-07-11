
.PHONY: build install up down

default:
	docker-compose up

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

install:
	docker-compose up -d
	docker-compose exec nest bash -c "pwd & npm -i -y"
