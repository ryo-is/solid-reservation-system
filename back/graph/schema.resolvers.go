package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"back/graph/generated"
	"back/graph/model"
	"context"
	"fmt"
)

func (r *mutationResolver) AddUser(ctx context.Context, input model.AddUser) (*model.User, error) {
	return &model.User{
		ID:     "id-adduser",
		Name:   input.Name,
		Kana:   input.Kana,
		Address: input.Address,
		Email: input.Email,
		Tell: input.Tell,
		Memo: input.Memo,
	}, nil
}

func (r *queryResolver) Hello(ctx context.Context) (*model.Hello, error) {
	fmt.Printf("hello")
	return &model.Hello{
		Message: "Hello World!!!",
	}, nil
}

func (r *queryResolver) User(ctx context.Context, userID string) (*model.User, error) {
	fmt.Printf("User")
	return &model.User{
		ID:     userID,
		Name:   "name1",
		Kana:   "kana1",
		Address: "address1",
		Email: "email1",
		Tell: "tell1",
		Memo: "memo1",
	}, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
