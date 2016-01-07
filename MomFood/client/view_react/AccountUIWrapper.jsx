App.AccountUIWrapper = React.createClass({  //wrap Blaze in a React component
    componentDidMount(){
        //use Meteor Blaze to render login butons
        this.view = Blaze.render(Template.loginButtons,
           React.findDOMNode(this.refs.loginContainer));
    },
    componentWillUnmount(){
        //Clean up Blaze view
        Blaze.remove(this.view);
    },
    render(){
        //Just render a placeholder container that will be filled in
        return <span ref="loginContainer" />
    }
})
