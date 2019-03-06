FROM node:latest

#update so we can install vim
RUN apt-get update 

#install vim
RUN apt-get install -y vim

#create directory for this web app
RUN mkdir /public
WORKDIR /public

#copy all artifacts into image
#change source to run different projects
COPY ./projects/webpack .
#COPY ./projects/menu .

#install babel transpiler
RUN npm i --save-dev react react-dom babel-cli babel-core babel-preset-react babel-loader webpack css-loader style-loader
#run transpiler against all jsx files
RUN npm run-script build

#install http server
RUN npm i http-server -g -c-1

#open port 8080 for testing
EXPOSE 8080
CMD ["http-server"]



