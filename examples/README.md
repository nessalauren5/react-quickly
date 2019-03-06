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
9 Handling Events
```javascript
	 <input type="text" ... onChange={this.handleChange.bind(this)} 
```
^event handlers can be passed to a component through props

^attach .bind(this) when the handler will operate on class attributes (like state)

```javascript
class TextInput extends React.Component{
    constructor(props){
        super(props)
        this.state = { text : "Enter text here"}
    }
    //by convention use 'handle' as the prevents to event handler methods
    handleChange(event){
        console.log("Change event")
        event.preventDefault()
        //react state will not be in sync with the UI, so we have to keep 
	//state of what's being typed so we can include it in the view
        this.setState({text:event.target.value})
    }
```

^ event handlers should operate on state attributes (mutable)

```javascript
    render(){
        return <div>
            <form onSubmit={this.handlePress.bind(this)}>
                <input type="text" name={this.props.name} value={this.state.text} onChange={this.handleChange.bind(this)} onKeyUp={this.handlePress.bind(this)}/>
            </form>
        </div>
    }

}
```
^example renders a form with handlers bound to form onSubmit and input onChange and onkeyUp

10 High Order Components
*HOC give you the ability to extend and enhance a components functionality.*
* Define HOCs using the fat arrow notation ()=>{}
```javascript
	const LoadWebsite = (Component)=> {}
```
Use the HOC to enhance components with additional functionality
Script below allows you to render a website by using 3 diff components
```javascript
	const EnhancedButton = LoadWebsite(Button)
	const EnhancedLink = LoadWebsite(Link)
	const EnhancedLogo = LoadWebsite(Logo)
```
## Up Next:
* /projects/menu