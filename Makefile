install:
	npm install
run:
	npm run babel-node -- ./src/bin/$(G)
eslint:
	npm run eslint -- ./src

build:
	rm -rf dist
	npm run build

publish:
	npm publish

docker-run:
	docker run -it --rm rende11/brainjs 
