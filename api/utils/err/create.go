package err

import "errors"

func Create(message string) error {
	return errors.New(message)
}
