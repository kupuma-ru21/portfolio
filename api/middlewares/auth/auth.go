package auth

import (
	"context"
	"net/http"
	"os"

	"github.com/golang-jwt/jwt/v5"
)

type userIdKey struct{}

const (
	tokenPrefix = "UT"
)

func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		tokenString := req.Header.Get("Authorization")
		if tokenString == "" {
			next.ServeHTTP(w, req)
			return
		}

		jwtSecretKey := os.Getenv("JWT_SECRET_KEY")
		if jwtSecretKey == "" {
			http.Error(w, `{"reason": "jwtSecretKey not found"}`, http.StatusUnauthorized)
		}

		claims := &jwt.RegisteredClaims{}
		token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
			return []byte(jwtSecretKey), nil
		})
		if err != nil || !token.Valid {
			http.Error(w, `{"reason": "invalid token"}`, http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(req.Context(), userIdKey{}, claims.Subject)
		next.ServeHTTP(w, req.WithContext(ctx))
	})
}

func HasUserId(ctx context.Context) bool {
	return ctx.Value(userIdKey{}) != nil
}
