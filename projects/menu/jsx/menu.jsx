const menuOptions = ['Home', 'Menu', 'About', 'Services', 'Portfolio', 'Contact Us']
class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state = {data_items:menuOptions}
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({data_items:data.items}))
            .catch((error) => {
                console.log('unable to retrieve data via fetch api')
                console.log(error.message)
            })
    }

    componentWillUpdate(){
        console.log("Received new props, re-rendering")
    }

    render(){
        let menus = this.state.data_items

        return <div>
            {
                menus.map((v,i) => {
                return React.createElement('div',
                    {key: i},
                    <Link label={v}/>)
            }
            )
            }
        </div>

    }
}

class Link extends React.Component{
    render(){
        const url = '/'
            + this.props.label
            .toLowerCase()
            .trim()
            .replace(' ','')
        console.log('creating link: ' + url)
        return (<div>
            <a href={url} >
                {this.props.label}
            </a>
                <br />
            </div>
        )
    }
}



ReactDOM.render(
    <Menu url="menu-items.json"/>,
    document.getElementById('menu')
)