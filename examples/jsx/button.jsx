class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {counter: 0}
    }
    //regular class function as event handler
    handleClick(event){
        //event holds the React SyntheticEvent obj, This is a wrapper for the browser specfic event objs!
        console.log(event)
        event.preventDefault()
        this.setState({counter: ++this.state.counter})
    }
    render(){
        return (<div>
            //pass in handler with .bind(this) if the handler needs the reference to the class
                    <Clickable handler={this.handleClick.bind(this)} counter={this.state.counter}/>
                </div>)
    }
}

class Clickable extends React.Component{
    render(){
        return (<div>
            //pass in handler to the buttons onClick(camel case) as a property
            <button onClick={this.props.handler} className='btn btn-primary'> Clicked {this.props.counter} times</button>
        </div>)
    }
}

React.render(<Content/>,document.getElementById('url-content'))