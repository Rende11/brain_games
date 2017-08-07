FROM mhart/alpine-node


RUN npm install brain-game
ENTRYPOINT node node_modules/brain-game/dist/bin/brain-progression.js
