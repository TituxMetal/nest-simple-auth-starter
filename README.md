## Create User Endpoint

Create a user

### Arguments

- email: required, string, valid email
- username: required, string, min length 5
- password: required, string

### Response

User Entity

- id: string
- email: string
- username: string
- createdAt: Date
- updatedAt: Date

```sh
curl --request POST \
  --url http://localhost:3333/users \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "username",
    "email": "example@email.com",
    "password": "strong password"
  }'
```

## Auth Register Endpoint

Register a new user

### Arguments

- email: required, string, valid email
- username: required, string, min length 5
- password: required, string

### Response

Auth User Entity

- id: string
- email: string
- username: string
- token: string
- createdAt: Date
- updatedAt: Date

```sh
curl --request POST \
  --url http://localhost:3333/auth/register \
  --header 'Content-Type: application/json' \
  --data '{
    "username": "username",
    "email": "example@email.com",
    "password": "strong password"
  }'
```
