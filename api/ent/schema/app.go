package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// App holds the schema definition for the App entity.
type App struct {
	ent.Schema
}

// Fields of the App.
func (App) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New),
		field.String("title").NotEmpty(),
		field.String("detail").NotEmpty(),
		field.String("link").NotEmpty(),
		field.Enum("link_type").NamedValues("App", "APP", "Company", "COMPANY"),
		field.String("image_url").NotEmpty(),
	}
}

// Edges of the App.
func (App) Edges() []ent.Edge {
	return nil
}

func (App) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
