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
	
## What I learned
1. Webpack configuration through webpack.config.js 
   1. Can have multiple for diff environments, i.e. *webpack.dev.config.js*
   1. *entry*: designates a start point for bundle, typically main file which loads other reqs
```javascript
	module.exports = {
    		entry: './jsx/app.jsx',
    		output:{
        		path: __dirname + '/js',
		        filename:'bundle.js' //give a specific name to bundled js
    		},
    	devtool:'#sourcemap',
    	module:{
        	loaders: [
            		{ test: /\.css$/,loader:'style-loader!css-loader'},
			//specifies the loader to import and injects css into page from js
            		{ test: /\.jsx?$/, exclude: /(node_modules)/, loaders:['babel-loader']}
			//specifies the loader to do jsx transformation
        ]
    }
}
```
## Up Next 
    * Webpack usages in complex projects
