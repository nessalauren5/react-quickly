## Summary of Concepts

1. Load dynamic menu options from external source 
    1. menuOptions are a const with preloaded defaults
    1. state is used to update the view once the 'external' menu options are retrieved
    1. Leverages js fetch() function 
    
    ```js
   	    constructor(props){
               super(props)
               this.state = {data_items:menuOptions}
           }
       
           componentDidMount() {
               fetch(this.props.url)
                   .then(response => response.json())
                   .then(data => this.setState({data_items:data.items}))
                   .catch((error) => {
                       console.log('unable to retrieve data via fetch api')
                       console.log(error.message)
                   })
           }
   ``` 
    
1. package.json
    1. name & version required for published apps
    1. main is the entry point (i.e. index.js)
    1. scripts refers to events during the lifecycle of this app
        invoke via
             ```bash 
                   npm run-script NAME
             ```
    ```json
        {
          "name": "webpack-jsx",
          "version": "1.0.0",
          "main": "component.jsx",
          "scripts" : {"jsx":"./node_modules/.bin/babel ./jsx/* --out-dir ./js"},
          "babel": {
            "presets": ["react"]
          },
          "devDependencies": {
            "babel-cli": "^6.26.0",
            "babel-preset-react": "^6.24.1"
          }
        }
   ```

1. .map() to transform array
    1. use fat operator and operator on v(alue) and i(ndex)
    1. third unused attribute here is list
    1. for each item in the menu list we create a link item and pass it the corresponding value
```js
    menus.map((v,i) => {
                return <Link label={v} className="nav-item nav-link"/>
                })
```

## Up Next:
[Webpack Project](../webpack)
