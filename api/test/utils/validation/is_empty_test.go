package test

import (
	"portfolio-api/utils/validation"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestStringIsEmpty(t *testing.T) {
	assert.Equal(t, true, validation.IsEmpty(""))
}

func TestStringIsNotEmpty(t *testing.T) {
	assert.Equal(t, false, validation.IsEmpty("something"))
}
