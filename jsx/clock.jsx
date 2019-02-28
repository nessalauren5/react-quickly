class Clock extends React.Component{
	render(){
		return <div>{this.state.currentTime}</div>
	}
}

ReactDOM.render(
	React.createElement(Clock,null),
	document.getElementById('clock-content')
)