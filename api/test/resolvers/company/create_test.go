package test

import (
	"context"
	"log"
	"portfolio-api/ent"
	"portfolio-api/ent/company"
	"portfolio-api/gqlgen/resolvers"
	"testing"

	"entgo.io/ent/dialect"
	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/assert"
)

func Test_mutationResolver_CreateApp(t *testing.T) {
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
		title := "Company title"
		detail := "Company Detail"
		link := "https://example.com/"
		linkType := company.LinkTypeApp
		imageURL := "https://picsum.photos/200/300"
		appId, err := r.Mutation().CreateCompany(
			ctx,
			ent.CreateCompanyInput{
				Title:    title,
				Detail:   detail,
				Link:     link,
				LinkType: linkType,
				ImageURL: imageURL,
			},
		)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		app, err := r.Query().Company(ctx, appId)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		assert.Equal(t, title, app.Title)
		assert.Equal(t, detail, app.Detail)
		assert.Equal(t, link, app.Link)
		assert.Equal(t, linkType, app.LinkType)
		assert.Equal(t, imageURL, app.ImageURL)
	})
}
