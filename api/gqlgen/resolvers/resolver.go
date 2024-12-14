package resolvers

import (
	"portfolio-api/ent"
	"portfolio-api/gqlgen"

	"github.com/99designs/gqlgen/graphql"
)

// Resolver is the resolver root.
type Resolver struct{ Client *ent.Client }

// NewSchema creates a graphql executable schema.
func NewSchema(c gqlgen.Config) graphql.ExecutableSchema {
	return gqlgen.NewExecutableSchema(c)
}
