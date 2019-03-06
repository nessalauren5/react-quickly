# react-quickly


Dockerized React Examples from React Quickly

*teaching myself react in 30 days*

## Running with Docker
*requires Docker to be installed on your local machine)*

Update Dockerfile to point to desired project
Replace this line 

```Dockerfile
    COPY /projects/webpack .
 ```	
 
 with this one to switch from running the webpack project to the menu projec
 
 
 ```Dockerfile
    COPY /projects/menu .
 ```
    
While in the location of the Dockerfile on cmd line, build docker image using: 

    docker build -t react-examples .

Run using:

    docker run -p 8080:8080 react-examples

* can use any name, not just react-examples
* running the container will output the IP:PORT where the react page can be seen

## Start Here:
[React Quickly Examples](/examples)
