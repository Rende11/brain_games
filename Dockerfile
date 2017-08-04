FROM phusion/baseimage 

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y \
	nodejs

RUN npm install brain-game
ENTRYPOINT nodejs node_modules/brain-game/dist/bin/brain-progression.js
