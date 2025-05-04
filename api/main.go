package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"portfolio-api/ent"
	"portfolio-api/ent/migrate"
	"portfolio-api/gqlgen"
	"portfolio-api/gqlgen/directive"
	"portfolio-api/gqlgen/resolvers"
	"portfolio-api/middlewares/auth"

	"entgo.io/ent/dialect"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"

	_ "github.com/lib/pq"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalln(err)
	}

	env := os.Getenv("ENV")
	if env == "" {
		log.Fatal("env is not set")
	}

	postgresUser := os.Getenv("POSTGRES_USER")
	if postgresUser == "" {
		log.Fatal("postgresUser is not set")
	}

	postgresPassword := os.Getenv("POSTGRES_PASSWORD")
	if postgresPassword == "" {
		log.Fatal("postgresPassword is not set")
	}

	postgresHost := os.Getenv("POSTGRES_HOST")
	if postgresHost == "" {
		log.Fatal("postgresHost is not set")
	}

	postgresPort := os.Getenv("POSTGRES_PORT")
	if postgresPort == "" {
		log.Fatal("postgresPort is not set")
	}

	postgresDb := os.Getenv("POSTGRES_DB")
	if postgresDb == "" {
		log.Fatal("postgresDb is not set")
	}

	var postgresqlUrl string

	if env == "development" {
		postgresqlUrl = fmt.Sprintf(
			"postgres://%s:%s@%s:%s/%s?sslmode=disable",
			postgresUser, postgresPassword, postgresHost,
			postgresPort, postgresDb,
		)
	} else {
		// Production
		// REF: https://cloud.google.com/sql/docs/postgres/connect-instance-cloud-run
		// REF: https://pkg.go.dev/cloud.google.com/go/cloudsqlconn#section-readme
		// REF: https://zenn.dev/google_cloud_jp/articles/cloudrun-cloudsql#cloud-run-%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B-1
		postgresqlUrl = fmt.Sprintf(
			// NOTE: host=/cloudsql/project:region:instance
			"host=%s user=%s password=%s dbname=%s",
			postgresHost, postgresUser,
			postgresPassword, postgresDb,
		)
	}

	// Create ent.Client and run the schema migration.
	client, err := ent.Open(dialect.Postgres, postgresqlUrl)
	if err != nil {
		log.Fatal("opening ent client: ", err)
	}
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
	); err != nil {
		log.Fatal("opening ent client: ", err)
	}

	srv := handler.NewDefaultServer(resolvers.NewSchema(gqlgen.Config{
		Resolvers:  &resolvers.Resolver{Client: client},
		Directives: directive.Directive,
	}))
	http.Handle("/",
		playground.Handler("Todo", "/query"),
	)
	http.Handle("/query", auth.AuthMiddleware(srv))

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("port is not set")
	}

	log.Printf("listening on http://localhost:%s/", port)
	if err := http.ListenAndServe(fmt.Sprintf(":%s", port), nil); err != nil {
		log.Fatal("http server terminated", err)
	}
}
