class LinkItem extends React.Component{
	render(){
		//jsx
		return <a href={this.props.url}  title={this.props.title}>{this.props.label}</a>
	}
}

ReactDOM.render(
	React.createElement(LinkItem,{url:"https://www.google.com",title:"Take Me to Google",label:"Click Me!"}),//standard js
	document.getElementById('url-content')
)
