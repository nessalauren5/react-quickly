class Component extends React.Component {
//second method invoked by react before mounting to the DOM
    componentWillMount() {
        console.log('attempting to mount component')

    }

//fourth method invoked by react, after dom has been rendered
    componentDidMount() {
        console.log('component did mount')
    }

    render(){
        console.log('component rendered.')
        return React.createElement('div',null,'Hello Component!')
    }
}

ReactDOM.render(
    React.createElement(Component,null),
    document.getElementById('url-content')
)