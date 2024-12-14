package directive

import (
	"context"
	"portfolio-api/gqlgen"
	"portfolio-api/middlewares/auth"
	"portfolio-api/utils/errCustom"

	"github.com/99designs/gqlgen/graphql"
)

var Directive gqlgen.DirectiveRoot = gqlgen.DirectiveRoot{
	IsAuthenticated: isAuthenticated,
}

func isAuthenticated(ctx context.Context, obj interface{}, next graphql.Resolver) (res interface{}, err error) {
	ok := auth.HasUserId(ctx)
	if !ok {
		return nil, errCustom.Create("not authenticated")
	}
	return next(ctx)
}
