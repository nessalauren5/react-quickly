## Running on Docker
1. Update the Dockerfile COPY line to point to /examples
	```Dockerfile
		COPY /projects/webpack .
	```
2. Check console to find IP or access using localhost:8080 in the browser
	```console
	Starting up http-server, serving ./
	Available on:
	http://127.0.0.1:8080
	http://172.17.0.2:8080
	
	
## Up Next 
    * Webpack usages in complex projects
