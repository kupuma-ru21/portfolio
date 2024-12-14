package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.55

import (
	"context"
	"portfolio-api/ent"
	"portfolio-api/utils/errCustom"
	"portfolio-api/utils/validation"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input ent.CreateUserInput) (uuid.UUID, error) {
	isEmpty := validation.IsEmpty(input.Email)
	if isEmpty {
		return uuid.Nil, errCustom.Create("email is required")
	}

	isEmpty = validation.IsEmpty(input.Password)
	if isEmpty {
		return uuid.Nil, errCustom.Create("password is required")
	}

	isInvalid := validation.Email(input.Email)
	if isInvalid {
		return uuid.Nil, errCustom.Create("Invalid email")
	}

	passwordHashed, err := bcrypt.GenerateFromPassword([]byte(input.Password), bcrypt.DefaultCost)
	if err != nil {
		return uuid.Nil, err
	}

	user, err := r.Client.User.Create().SetEmail(input.Email).SetPassword(string(passwordHashed)).Save(ctx)
	if err != nil {
		return uuid.Nil, err
	}

	return user.ID, nil
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*ent.User, error) {
	return r.Client.User.Query().All(ctx)
}
