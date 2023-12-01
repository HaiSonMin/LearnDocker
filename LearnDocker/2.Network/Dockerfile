FROM node

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN if [ "${NODE_ENV}" = "development" ]; then npm install; else npm install --only=production; fi

# Install nodemon globally
RUN if [ "${NODE_ENV}" = "development" ]; then npm install -g nodemon; fi

COPY . .

ENV PORT=80

EXPOSE ${PORT}

CMD [ "node","app.js" ]
