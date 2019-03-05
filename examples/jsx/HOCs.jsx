//define HOCs with the fat arrow annotation
const LoadWebsite = (Component)=> {

    //by convention _ is used to denote an inner private class/attribute
    class _LoadWebsite extends React.Component {

        constructor(props){
            super(props)
            this.state = {label:'Run'}
            this.state.handleClick = this.handleClick.bind(this)
        }

        getUrl(){
            return 'https://facebook.github.io/react/docs/top-level-api.html'
        }
        //handle click events
        handleClick(event){
            //set content of iframe to url defined in getUrl
            var iframe = document.getElementById('frame').src = this.getUrl()
        }

        componentDidMount(){
            console.log("mounted component")
            console.log(ReactDOM.findDOMNode(this))
        }

        render(){
            console.log(this.state)
            //use spread operator to pass all state and props to component (they may change)
            return <Component {...this.state} {...this.props} />
        }

    }
    //defines a name for the HOC
    _LoadWebsite.displayName = 'EnhancedComponent'
    return _LoadWebsite
}

class Button extends React.Component{
    render(){
        return <button
            className="btn btn-primary"
            onClick={this.props.handleClick}>
            {this.props.label}
        </button>
    }
}

class Link extends React.Component{
    render(){
        return <a onClick={this.props.handleClick} href="#">
            {this.props.label}</a>
    }
}

class Logo extends React.Component{
    render(){
        return <img onClick={this.props.handleClick} width="40" src="https://image.flaticon.com/icons/png/512/25/25231.png" href="#"/>
    }
}

const EnhancedButton = LoadWebsite(Button)
const EnhancedLink = LoadWebsite(Link)
const EnhancedLogo = LoadWebsite(Logo)

class Content extends React.Component{
    render(){
        return <div>
                <EnhancedButton/>
                <br/>
                <br/>
                <EnhancedLink/>
                <br/>
                <br/>
                <EnhancedLogo/>
                <iframe id='frame' src="" width="600" height="500"/>
                </div>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById('content')
)