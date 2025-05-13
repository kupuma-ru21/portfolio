package schema

import (
	"time"

	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
	"entgo.io/ent/schema/mixin"
)

// BaseMixin to be shared will all different schemas.
type BaseMixin struct {
	mixin.Schema
}

// Fields of the Mixin.
func (BaseMixin) Fields() []ent.Field {
	return []ent.Field{
		field.Time("created_at").
			Default(time.Now).
			Annotations(
				entgql.Skip(
					entgql.SkipMutationCreateInput,
				),
				entgql.OrderField("CREATED_AT"),
			).Immutable(),
		field.Time("updated_at").
			Annotations(
				entgql.Skip(
					entgql.SkipMutationCreateInput,
					entgql.SkipMutationUpdateInput,
				),
				entgql.OrderField("UPDATED_AT"),
			).
			Default(time.Now).
			UpdateDefault(time.Now),
	}
}

// Hooks of the Mixin.
func (BaseMixin) Hooks() []ent.Hook {
	return []ent.Hook{}
}
