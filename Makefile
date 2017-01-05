G=brain-even.js
install:
	npm install
run G:
	npm run babel-node -- ./src/bin/brain-even.js

publish:
	npm publish
