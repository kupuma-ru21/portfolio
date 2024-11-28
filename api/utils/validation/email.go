package validation

import (
	emailVerifier "github.com/AfterShip/email-verifier"
)

func Email(email string) bool {
	return !(emailVerifier.IsAddressValid(email))
}
