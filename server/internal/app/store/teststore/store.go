package teststore

import(
	"github.com/sleonia/Matcha/internal/app/store"
	"github.com/sleonia/Matcha/internal/app/model"
)


type Store struct {
	userRepository *UserRepository
}

func New() *Store {
	return &Store{}
}

func (s *Store) User() store.UserRepository {
	if s.userRepository != nil {
		return s.userRepository
	}

	s.userRepository = &UserRepository{
		store: s,
		users: make(map[int]*model.User),
	}

	return s.userRepository
}
