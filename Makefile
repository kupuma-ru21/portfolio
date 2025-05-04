# REF: https://github.com/nektos/act/issues/2239
run-github-actions:
	act --container-architecture linux/amd64 --container-daemon-socket -

run-a-workflow:
	act -j $(job) test --container-architecture linux/amd64 --container-daemon-socket -

show-workflows:
	act -l

docker-reset:
	docker rm -f $$(docker ps -aq) || true
	docker rmi -f $$(docker images -aq) || true
	docker volume rm -f $$(docker volume ls -q) || true
	docker network rm $$(docker network ls -q | grep -v "bridge\|host\|none") || true
	docker builder prune -af

copy-env:
	cp .env.docker api/.env && cp .env.docker client/.env

docker-network:
	docker network create portfolio || true

include .env.docker
export $(shell cat .env.docker | xargs)

docker-run-db:
	docker run -d \
		--name postgres \
		--network portfolio \
		-e POSTGRES_USER=$(POSTGRES_USER) \
		-e POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
		-e POSTGRES_DB=$(POSTGRES_DB) \
		-p 5432:$(POSTGRES_PORT) \
		-v pgdata:/var/lib/postgresql/data \
		postgres:15

docker-build-api:
	docker build -f api/Dockerfile -t api api

docker-run-api:
	docker run -d \
		--name api \
		--network portfolio \
		-p 8080:$(PORT) \
		api

docker-build-client:
	docker build -f client/Dockerfile -t client client

docker-run-client:
	docker run -d \
		--name client \
		--network portfolio \
		-p 3000:3000 \
		client

dev: docker-reset docker-network docker-run-db copy-env docker-build-api docker-run-api docker-build-client docker-run-client
