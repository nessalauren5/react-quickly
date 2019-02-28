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
    	
3. Transpiling JSX using Babel CLI (*transpiles all jsx to individual js files*)

      ```console
       ./node_modules/.bin/babel ./jsx/* --out-dir ./js
      ```
       
4. Leverage properties inside components for custom behavior
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
    
5. Leverage state inside components for dynamic behavior
    
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

## Up Next:
* React Lifecycles
    - Mounting, Updates, UnMounting
* Implementing Events

