package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/field"
	"github.com/google/uuid"
)

// Company holds the schema definition for the Company entity.
type Company struct {
	ent.Schema
}

// Fields of the Company.
func (Company) Fields() []ent.Field {
	return []ent.Field{
		field.UUID("id", uuid.UUID{}).Default(uuid.New),
		field.String("title").NotEmpty(),
		field.String("detail").NotEmpty(),
		field.String("link").NotEmpty(),
		field.Enum("link_type").NamedValues("App", "APP", "Company", "COMPANY"),
		field.String("image_url").NotEmpty(),
	}
}

// Edges of the Company.
func (Company) Edges() []ent.Edge {
	return nil
}

func (Company) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.Mutations(entgql.MutationCreate(), entgql.MutationUpdate()),
	}
}
