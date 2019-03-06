const React = require('react')

class Content extends React.Component {

    /* first method by default is constructor
    constructor(props){
        super(props)
    }*/
    
    //second method invoked by react before mounting to the DOM
    componentWillMount() {
        console.log('attempting to mount component')

    }

    render(){
        console.log('component rendered.')
        return React.createElement('div',null,'Hello Component!')
    }

//fourth method invoked by react, after dom has been rendered
    componentDidMount() {
        console.log('component did mount')
    }


}
//export content
module.exports = Content