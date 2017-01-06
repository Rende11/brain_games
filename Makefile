install:
	npm install
run:
	npm run babel-node -- ./src/bin/$(G)
eslint:
	npm run eslint -- ./src
publish:
	npm publish
