FROM node:latest

#update so we can install vim
RUN apt-get update 

#install vim
RUN apt-get install -y vim

#create directory for this web app
RUN mkdir /public
WORKDIR /public

#copy all artifacts into image
COPY . .

#install babel transpiler
RUN npm i --save-dev babel-cli babel-preset-react

#run transpiler against all jsx files
RUN ./node_modules/.bin/babel ./jsx/* -d ./js/

#install http server
RUN npm i http-server -g

#open port 8080 for testing
EXPOSE 8080
CMD ["http-server"]



