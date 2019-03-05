const menuOptions = ['Home', 'Menu', 'About', 'Services', 'Portfolio', 'Contact Us']
class Menu extends React.Component{
    render(){
        let menus = ['Home',
            'Menu',
            'About',
            'Services',
            'Portfolio',
            'Contact Us']//this.props.menus
        return React.createElement('div',
            null,
            menus.map((v,i) => {
                return React.createElement('div',
                    {key: i},
                    React.createElement(Link,{label: v})
                )
            })
        )
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
        return React.createElement('div',
            null,
            React.createElement(
                'a',
                {href: url},
                this.props.label
            ),
            React.createElement('br')
        )
    }
}



ReactDOM.render(
    React.createElement(Menu,
        null
    ),
    document.getElementById('menu')
)