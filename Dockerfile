FROM node:alpine


RUN npm install brain-game
ENTRYPOINT node node_modules/brain-game/dist/bin/brain-progression.js
