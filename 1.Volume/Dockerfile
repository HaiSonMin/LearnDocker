FROM node

WORKDIR /app

COPY package.json .

ARG NODE_ENV

# If when we development project in enviroment development we execure "npm install"(includes devDependencies in package.json)
# Else when execure command "npm install --only=production" only "dependencies" pakage
RUN if [ "${NODE_ENV}" = "development" ]; then npm install; else npm install --only=production; fi

# Install nodemon globally
RUN if [ "${NODE_ENV}" = "development" ]; then npm install -g nodemon; fi

COPY . .

ENV PORT=3000

EXPOSE $PORT

CMD [ "node", "server.js" ]
# CMD [ "npm", "run", "dev" ]