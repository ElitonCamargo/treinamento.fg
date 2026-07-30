install:
	npm install

dev:
	npm run dev

build:
	npm run build

prisma-generate:
	npm run prisma:generate

prisma-migrate:
	npm run prisma:migrate

prisma-studio:
	npm run prisma:studio

test:
	npm test

lint:
	npm run lint

format:
	npm run format

typecheck:
	npm run typecheck

check:
	npm run typecheck
	npm run lint
	npm test