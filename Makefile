.PHONY: all

all: build run


.PHONY: run

run:
	docker run --name matcha -p 3030:8080 -d matcha
.PHONY: build

build:
	docker build -t matcha .

.PHONY: remove

remove:
	docker container rm matcha
	docker image rm matcha

.PHONY: stop

stop:
	docker container stop matcha

.PHONY: re

re: stop remove build run
