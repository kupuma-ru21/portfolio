docker-compose-up:
	docker compose up --build -d

docker-compose-down:
	docker compose down

# REF: https://github.com/nektos/act/issues/2239
run-github-actions:
	act --container-architecture linux/amd64 --container-daemon-socket -

run-a-workflow:
	act -j $(job) test --container-architecture linux/amd64 --container-daemon-socket -

show-workflows:
	act -l
