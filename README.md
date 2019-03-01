# react-quickly


Dockerized React Examples from React Quickly

*teaching myself react in 30 days*

## Running with Docker
*requires Docker to be installed on your local machine)*

Build docker image using: 

    docker build -t react-examples .

Run using:

    docker run -p 8080:8080 react-examples

* can use any name, not just react-examples
* running the container will output the IP:PORT where the react page can be seen

## What I've learned
1. Define components by extending React.Component
```js
	class CustomComponent extends React.Component{
		render(){
			return ReactDOM.createElement('NAME',{properties})
		}
	}
```
^ all components must define the render() method

^ ReactDom.createElement() actually generates the html for the component and attaches it to the DOM if necessary, remember React will only update exactly what changes.

2. Using JSX to create components using HTML like shorthand

```HTML
    <HelloWorld />
    <Outer>
    	<Inner/>
    </Outer>
```
3. Use ReactDom's render method to invoke the update to the DOM

```javascript
    ReactDOM.render(
	<Clock />,
	document.getElementById('clock-content')
)
// or 

ReactDOM.render(
	React.createElement(Clock,null),
	document.getElementById('id')
)
```

4. Transpiling JSX using Babel CLI (*transpiles all jsx to individual js files*)

      ```console
       ./node_modules/.bin/babel ./jsx/* --out-dir ./js
      ```
       
5. Leverage properties inside components for custom behavior
```js
	   render(){
    	    let input 
    	    if(this.props.type="Radio")
    		    input = <Radio/>
    	    else
    		    input = <Checkbox/>
    		
    	    return <div> {input} </div>
       }
```
    
6. Leverage state inside components for dynamic behavior
    
```javascript
	    class Clock extends React.Component{
	    
	       constructor(props){
		   super(props)
		   this.launchClock()
		   this.state={
		       currentTime:(new Date()).toLocaleString()
		       }
	       }
```
     
^ only use this.state in constructor

```javascript 
	    launchClock(){
	           setInterval(() => {
		       console.log('updating the time.')
		       this.setState({ 
		       currentTime : (new Date()).toLocaleString()
		       })
	           },1000)
            }
```
 
^in other methods use this.setState({props},callback)

```javascript 
	    render(){
	        console.log('rendering both clocks')
		return <div>
			<AnalogDisplay time={this.state.currentTime}/>
			<DigitalDisplay time={this.state.currentTime}/>
		       </div>
	    }
```
^use this.state just like the props object

7. React Lifecycles

### Mounting 
* constructor() - used for setting the initial state of a component, always called first before mounting to DOM
* componentWillMount() - invoked only once just before initial rendering
* render() - paints the DOM with this component
* componentDidMount() - invoked only once in browser, not on server. great place for XHR requests

### Updating
* componentWillReceiveProps() - called when props are sent to the component, React has no way of knowing if they are diff props from before
* shouldComponentUpdate() - method for optimization to prevent unneccessary re-rendering of components
* componentWillUpdate() - called before a component renders
* render() - rerender changes brought to this component
* componentDidUpdate() - called after a component has been re-rendered

### Unmounting
* componentWillUnMount() - used for cleanup to avoid memory leaks. Great place to remove event listeners

8. Implementing Events

```javascript

confirmLeave(){
	//method to confirm user wants to navigate to another page
}

componentDidMount(){
	//attached listener
	window.addEventListener('beforeunload',this.confirmLeave)
}

componentWillUnMount(){
	//detach listener
	window.removeEventListener('beforeunload',this.confirmLeave)
}
```
## Up Next:
* Handeling Events


