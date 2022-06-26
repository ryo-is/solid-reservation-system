serve:
	go run server.go

graphql-codegen:
	go run github.com/99designs/gqlgen generate

start-containers:
	docker compose down --volumes --remove-orphans
	docker compose up -d --build

down-containers:
	docker compose down --volumes --remove-orphans
