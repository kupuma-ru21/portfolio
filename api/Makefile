test-go:
	JWT_SECRET_KEY=JWT_SECRET_KEY go test -v ./...

run:
	ENV=local go run ./main.go

gen:
	go generate .

db-schema:
	go run -mod=mod entgo.io/ent/cmd/ent new $(db-schema)