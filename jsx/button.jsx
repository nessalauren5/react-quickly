class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {counter: 0}
    }
    handleClick(event){
        console.log(event)
        event.preventDefault()
        this.setState({counter: ++this.state.counter})
    }
    render(){
        return (<div>
                    <Clickable handler={this.handleClick.bind(this)} counter={this.state.counter}/>
                </div>)
    }
}

class Clickable extends React.Component{
    render(){
        return (<div>
            <button onClick={this.props.handler} className='btn btn-primary'> Clicked {this.props.counter} times</button>
        </div>)
    }
}

React.render(<Content/>,document.getElementById('url-content'))