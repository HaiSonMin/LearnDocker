FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9000

ENV MONGODB_USERNAME=haison
ENV MONGODB_PASSWORD=bokute22102000

CMD ["npm","start"]