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

func Test_mutationResolver_UpdateApp(t *testing.T) {
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

		a, err := r.Query().Company(ctx, appId)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		assert.Equal(t, title, a.Title)
		assert.Equal(t, detail, a.Detail)
		assert.Equal(t, link, a.Link)
		assert.Equal(t, linkType, a.LinkType)
		assert.Equal(t, imageURL, a.ImageURL)

		titleUpdated := "Company title updated"
		detailUpdated := "Company Detail updated"
		linkUpdated := "https://www.google.com/"
		linkTypeUpdated := company.LinkTypeCompany
		imageURLUpdated := "https://picsum.photos/300/300"

		appIdUpdated, err := r.Mutation().UpdateCompany(
			ctx,
			appId,
			ent.UpdateCompanyInput{
				Title:    &titleUpdated,
				Detail:   &detailUpdated,
				Link:     &linkUpdated,
				LinkType: &linkTypeUpdated,
				ImageURL: &imageURLUpdated,
			},
		)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		aUpdated, err := client.Company.Get(ctx, appIdUpdated)
		if err != nil {
			log.Fatalf("error: %v", err)
		}

		assert.Equal(t, titleUpdated, aUpdated.Title)
		assert.Equal(t, detailUpdated, aUpdated.Detail)
		assert.Equal(t, linkUpdated, aUpdated.Link)
		assert.Equal(t, linkTypeUpdated, aUpdated.LinkType)
		assert.Equal(t, imageURLUpdated, aUpdated.ImageURL)
	})
}
