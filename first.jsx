class LinkItem extends React.Component{
	render(){
		return <a href={this.props.url}  title={this.props.title}>{this.props.label}</a>
	}
}

ReactDOM.render(
	React.createElement(LinkItem,{url:"https://www.google.com",title:"Take Me to Google",label:"Click Me!"}),
	document.getElementById('url-content')
)