/**
 * Created by Emily on 18/01/16.
 */
App.ConnModal = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            isLoginServiceConfigured:Accounts.loginServicesConfigured()
        };
    },
    /*isLoginServiceConfigured:function(){
        return Accounts.loginServicesConfigured();
    },*/
    componentDidMount(){
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    },

    render(){
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
                <div className="modal-dialog" id="conn-dialog">
                    <div className="modal-content">
                        {this.data.isLoginServiceConfigured?
                            <App.LoginWithSM />:""}
                        <App.LoginForm></App.LoginForm>
                        <App.RegisterForm></App.RegisterForm>
                    </div>
                </div>
            </div>
        )
    },
    propTypes:{
        handleHideModal: React.PropTypes.func.isRequired
    }
});
