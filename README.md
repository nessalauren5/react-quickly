# react-quickly


Dockerized React Examples from React Quickly

*teaching myself react in 30 days*

Build docker image using: 

    docker build -t react-examples .

Run using:

    docker run -p 8080:8080 react-examples

* can use any name, not just react-examples
* running the container will output the IP:PORT where the react page can be seen

##What I've learned

1. creating React components using 

    ReactDOM.createElement('NAME',{properties})
2. Using JSX to create components using HTML like shorthand

    <HelloWorld />
    <Outer>
    		<Inner/>
    	</Outer>
    	
3. Transpiling JSX using Babel CLI (*transpiles all jsx to individual js files*)

    ./node_modules/.bin/babel ./jsx/* --out-dir ./js

4. Leverage properties inside components for custom behavior
    render(){
    	let input 
    	if(this.props.type="Radio")
    		input = <Radio/>
    	else
    		input = <Checkbox/>
    		
    	return <div> {input} </div>
    }
    
5. Leverage state inside components for dynamic behavior
    
    class Clock extends React.Component{
	constructor(props){
		super(props)
		this.launchClock()
		this.state={currentTime:(new Date()).toLocaleString()}
		
	}
	/* method to update clock*/
    launchClock(){
	setInterval(() => {
		console.log('updating the time.')
		this.setState({ 
			currentTime : (new Date()).toLocaleString()
		})
	},1000)
    }
	render(){
	    console.log('rendering both clocks')
		return <div>
			<AnalogDisplay time={this.state.currentTime}/>
			<DigitalDisplay time={this.state.currentTime}/>
		</div>
	}
}

