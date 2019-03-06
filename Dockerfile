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

#install all dependencies in package.json
RUN npm install

#run build described in local package.json
RUN npm run build

#install http server
RUN npm i http-server -g -c-1

#open port 8080 for testing
EXPOSE 8080
CMD ["http-server"]



