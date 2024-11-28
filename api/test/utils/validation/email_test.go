package test

import (
	"portfolio-api/utils/validation"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestValidEmail(t *testing.T) {
	const email = "example@email.com"
	assert.Equal(t, validation.Email(email), false)
}

func TestEmailWithoutDomain(t *testing.T) {
	const email = "example@"
	assert.Equal(t, validation.Email(email), true)
}

func TestEmailWithoutAtSign(t *testing.T) {
	const email = "example"
	assert.Equal(t, validation.Email(email), true)
}
