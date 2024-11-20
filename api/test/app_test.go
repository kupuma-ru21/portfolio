package test

import (
	"context"
	"log"
	"portfolio-api/ent"
	"portfolio-api/ent/app"
	"testing"

	"entgo.io/ent/dialect"
	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/assert"
)

// Ref: https://entgo.io/docs/testing/
// TODO: run this on github actions
func TestApp(t *testing.T) {
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

	const title = "app"
	const detail = "detail"
	const link = "https://example.com/"
	const linkType = app.LinkTypeApp
	const imageURL = "https://fastly.picsum.photos/id/919/200/300.jpg?hmac=jkU3iBD7FmgjpBy_oLT-Au05XW2UsFassE3X44PO_iQ"

	app, err := client.App.Create().
		SetTitle(title).
		SetDetail(detail).
		SetLink(link).
		SetLinkType(linkType).
		SetImageURL(imageURL).
		Save(ctx)

	if err != nil {
		log.Fatalf("failed creating an app: %v", err)
	}

	_, err = uuid.Parse(app.ID.String())
	if err != nil {
		log.Fatalf("failed parsing uuid: %v", err)
	}

	assert.Equal(t, title, app.Title)
	assert.Equal(t, detail, app.Detail)
	assert.Equal(t, link, app.Link)
	assert.Equal(t, linkType, app.LinkType)
	assert.Equal(t, imageURL, app.ImageURL)
}
