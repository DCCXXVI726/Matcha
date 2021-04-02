package apiserver

import (
	"net/http"
	"net/http/httptest"
	"testing"
	"github.com/stretchr/testify/assert"
)

func TestAPIServer_HandlePing(t *testing.T) {
	s := New(NewConfig())
	rec := httptest.NewRecorder()
	req, _ := http.NewRequest(http.MethodGet, "/hello", nil)
	s.handlePing().ServeHTTP(rec, req)
	assert.Equal(t, rec.Body.String(), `{"message": "kekong"}`)
}
