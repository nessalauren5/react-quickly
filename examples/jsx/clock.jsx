class Clock extends React.Component {
	//first method invoked by react
	constructor(props) {
		super(props)
		this.launchClock()
		this.state = {currentTime: (new Date()).toLocaleString()}

	}

	/* method to update clock*/
	launchClock() {
		setInterval(() => {
			console.log('updating the time.')
			this.setState({
				currentTime: (new Date()).toLocaleString()
			})
		}, 1000)
	}


//third method invoked by react rendering the content
	render() {
		console.log('rendering both clocks')
		return <div>
			<AnalogDisplay time={this.state.currentTime}/>
			<DigitalDisplay time={this.state.currentTime}/>
		</div>
	}

}

ReactDOM.render(
	<Clock />,
	document.getElementById('clock-content')
)