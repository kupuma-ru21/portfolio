test-go:
	JWT_SECRET_KEY=JWT_SECRET_KEY go test -v ./...

gen:
	go generate .

run:
	make gen && cp ../.env .env && go run ./main.go

# make table table=Blog
table:
	go run -mod=mod entgo.io/ent/cmd/ent new $(table)
