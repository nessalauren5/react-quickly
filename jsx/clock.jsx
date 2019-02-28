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
	    console.log('rendering clock')
		return <div>{this.state.currentTime}</div>
	}
}

ReactDOM.render(
	<Clock />,
	document.getElementById('clock-content')
)