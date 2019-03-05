class TextInput extends React.Component{
    constructor(props){
        super(props)
        this.state = { text : "Enter text here"}
    }
    //by convention use 'handle' as the prevents to event handler methods
    handleChange(event){
        console.log("Change event")
        event.preventDefault()
        //react state will not be in sync with the UI, so we have to keep state of what's being typed so we can include it in the view
        this.setState({text:event.target.value})
    }

    handlePress(event){
        event.preventDefault()
        console.log("Press event")
        this.setState({text:event.target.value})
    }
    render(){
        return <div>
            <form onSubmit={this.handlePress.bind(this)}>
                <input type="text" name={this.props.name} value={this.state.text} onChange={this.handleChange.bind(this)} onKeyUp={this.handlePress.bind(this)}/>
            </form>
        </div>
    }

}

ReactDOM.render(
    <TextInput name="first"/>,
    document.getElementById('content')
)