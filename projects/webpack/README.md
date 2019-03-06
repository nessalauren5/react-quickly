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
	
## Summary of Concepts
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
1. using app.js to load your dependencies 
   1. //import css which will be imported&injected by loaders
   
        ```javascript
      require('../css/main.css')
        ```
        
   1. Store react and reactDOM in global constants
   (*can do the same for any other components needed*)
        
        ```javascript
        const React = require('react')
        const ReactDOM = require('react-dom')
        const Content = require('./content.jsx')
         ```
              
   1. Replace all .js imports with a single import:
        ```hmtl
        <script src="js/bundle.js"></script>
        ```
        
## Up Next 
    * Webpack usages in complex projects
