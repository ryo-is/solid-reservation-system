package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"back/graph/generated"
	"back/graph/model"
	"context"
)

func (r *mutationResolver) AddUser(ctx context.Context, input model.AddUser) (*model.User, error) {
	return &model.User{
		ID:      "id-adduser",
		Name:    input.Name,
		Kana:    input.Kana,
		Address: input.Address,
		Email:   input.Email,
		Tell:    input.Tell,
		Memo:    input.Memo,
	}, nil
}

func (r *queryResolver) Version(ctx context.Context) (*model.Version, error) {
	return &model.Version{
		Version: "0.0.1",
	}, nil
}

func (r *queryResolver) User(ctx context.Context, userID string) (*model.User, error) {
	return &model.User{
		ID:      userID,
		Name:    "name1",
		Kana:    "kana1",
		Address: "address1",
		Email:   "email1@example.com",
		Tell:    "08011111111",
		Memo:    "memo1",
	}, nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return []*model.User{{
		ID:   	 "1" ,
		Name:    "name1",
		Kana:    "かな1",
		Address: "address1",
		Email:   "email1@example.com",
		Tell:    "08011111111",
		Memo:    "memo1",
	}, {
		ID:   	 "2" ,
		Name:    "name2",
		Kana:    "かな2",
		Address: "address2",
		Email:   "email2@example.com",
		Tell:    "08022222222",
		Memo:    "memo2",
	}}, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
