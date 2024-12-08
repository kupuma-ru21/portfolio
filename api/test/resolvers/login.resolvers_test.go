package test

import (
	"context"
	"log"
	"os"
	"portfolio-api/ent"
	"portfolio-api/gqlgen/resolvers"
	"testing"

	"entgo.io/ent/dialect"
	"github.com/golang-jwt/jwt/v5"
	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/assert"
)

func Test_mutationResolver_Login(t *testing.T) {
	// Create an ent.Client with in-memory SQLite database.
	client, err := ent.Open(dialect.SQLite, "file:ent?mode=memory&cache=shared&_fk=1")
	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}
	defer client.Close()
	ctx := context.Background()
	// Run the automatic migration tool to create all schema resources.
	if err := client.Schema.Create(ctx); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}

	t.Run("success", func(t *testing.T) {
		r := &struct{ *resolvers.Resolver }{Resolver: &resolvers.Resolver{Client: client}}
		email := "example@email.com"
		password := "password"
		// Create a user
		userId, err := r.Mutation().CreateUser(
			ctx,
			ent.CreateUserInput{Email: email, Password: password},
		)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		jwtSecretKey := os.Getenv("JWT_SECRET_KEY")
		tokenString, err := r.Mutation().Login(
			ctx,
			ent.CreateUserInput{Email: email, Password: password},
		)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(jwtSecretKey), nil
		})
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		assert.Equal(t, userId.String(), token.Claims.(jwt.MapClaims)["sub"])
	})
}
