package test

import (
	"context"
	"log"
	"portfolio-api/ent"
	"portfolio-api/gqlgen/resolvers"
	"testing"

	"entgo.io/ent/dialect"
	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/assert"
	"golang.org/x/crypto/bcrypt"
)

func Test_mutationResolver_CreateUser(t *testing.T) {
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
		password := "example@email.com"
		userId, err := r.Mutation().CreateUser(
			ctx,
			ent.CreateUserInput{Email: email, Password: password},
		)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		user, err := client.User.Get(ctx, userId)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		assert.Equal(t, email, user.Email)

		err = bcrypt.CompareHashAndPassword(
			[]byte(user.Password),
			[]byte(password),
		)
		assert.Nil(t, err)
	})
}
