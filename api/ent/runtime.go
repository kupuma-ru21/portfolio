// Code generated by ent, DO NOT EDIT.

package ent

import (
	"portfolio-api/ent/app"
	"portfolio-api/ent/schema"
	"portfolio-api/ent/user"

	"github.com/google/uuid"
)

// The init function reads all schema descriptors with runtime code
// (default values, validators, hooks and policies) and stitches it
// to their package variables.
func init() {
	appFields := schema.App{}.Fields()
	_ = appFields
	// appDescTitle is the schema descriptor for title field.
	appDescTitle := appFields[1].Descriptor()
	// app.TitleValidator is a validator for the "title" field. It is called by the builders before save.
	app.TitleValidator = appDescTitle.Validators[0].(func(string) error)
	// appDescDetail is the schema descriptor for detail field.
	appDescDetail := appFields[2].Descriptor()
	// app.DetailValidator is a validator for the "detail" field. It is called by the builders before save.
	app.DetailValidator = appDescDetail.Validators[0].(func(string) error)
	// appDescLink is the schema descriptor for link field.
	appDescLink := appFields[3].Descriptor()
	// app.LinkValidator is a validator for the "link" field. It is called by the builders before save.
	app.LinkValidator = appDescLink.Validators[0].(func(string) error)
	// appDescImageURL is the schema descriptor for image_url field.
	appDescImageURL := appFields[5].Descriptor()
	// app.ImageURLValidator is a validator for the "image_url" field. It is called by the builders before save.
	app.ImageURLValidator = appDescImageURL.Validators[0].(func(string) error)
	// appDescID is the schema descriptor for id field.
	appDescID := appFields[0].Descriptor()
	// app.DefaultID holds the default value on creation for the id field.
	app.DefaultID = appDescID.Default.(func() uuid.UUID)
	userFields := schema.User{}.Fields()
	_ = userFields
	// userDescEmail is the schema descriptor for email field.
	userDescEmail := userFields[1].Descriptor()
	// user.EmailValidator is a validator for the "email" field. It is called by the builders before save.
	user.EmailValidator = userDescEmail.Validators[0].(func(string) error)
	// userDescPassword is the schema descriptor for password field.
	userDescPassword := userFields[2].Descriptor()
	// user.PasswordValidator is a validator for the "password" field. It is called by the builders before save.
	user.PasswordValidator = userDescPassword.Validators[0].(func(string) error)
	// userDescID is the schema descriptor for id field.
	userDescID := userFields[0].Descriptor()
	// user.DefaultID holds the default value on creation for the id field.
	user.DefaultID = userDescID.Default.(func() uuid.UUID)
}
