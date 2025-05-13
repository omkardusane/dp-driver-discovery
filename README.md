# driver-discovery

## Setup Instructions


### Backend:
create .env file as specified in   `./backend/example.envfile` as `dev.env`

```
cd backend
npm install
npm run dev
```

for test:
```
npm run test
```

for production
create new envfile production.env
```
npm start
```

### Frontend:

```
cd frontend
npm install
npm run dev
```
for production
```
npm run build
```

### to just try:
- build the frontend with ``npm run build`` in      `./frontend`
- serve the backend in dev or prod mode with appropriate env files

## Docs

[Tech summary](./docs/tech-summary.md)
[Goals & Reqs](./docs/goals.md)