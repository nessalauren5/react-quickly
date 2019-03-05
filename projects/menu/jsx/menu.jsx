const menuOptions = ['Home', 'Menu', 'About', 'Services', 'Portfolio', 'Contact Us']
class Menu extends React.Component{
    render(){
        let menus = ['Home',
            'Menu',
            'About',
            'Services',
            'Portfolio',
            'Contact Us']//this.props.menus
        return <div>
            {menus.map((v,i) => {
                return React.createElement('div',
                    {key: i},
                    <Link label={v}/>)
            })}
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
    <Menu/>,
    document.getElementById('menu')
)