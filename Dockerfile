FROM node:latest
RUN apt-get update 
RUN apt-get install -y vim
RUN mkdir /public
WORKDIR /public
COPY . .
#install transpiler
RUN npm i --save-dev babel-cli babel-preset-react
RUN ./node_modules/.bin/babel ./jsx/first.jsx -o ./js/first.js

#install http server
RUN npm i http-server -g


EXPOSE 8080
CMD ["http-server"]



