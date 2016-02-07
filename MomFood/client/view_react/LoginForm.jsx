/**
 * Created by Emily on 06/01/16.
 */
App.LoginForm=React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            isLoginServiceConfigured:Accounts.loginServicesConfigured()
        };
    },
    getInitialState: function() {
        return {userName: '', password: '',alert:''};
    },
    toRegister:function(){
        $("#myModal").addClass('registering');
        /*this.setState({registering:true});*/
    },
    loginUser:function(event) {
        event.preventDefault();
        // Trim and validate your fields here....
        var u=this.state.userName.trim();
        var p=this.state.password.trim();
        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        self=this;
        Meteor.loginWithPassword(u, p, function(err){
            if (err) {
                self.setState({alert: 'Username/password is incorrect'});
            }
            else
            {
                $('#myModal').modal('hide');
                self.setState({userName:""});
                self.setState({password:""});
                self.setState({alert:""});
            }
        });
        this.setState({alert:""});
        return false;
    },

    handleUsernameChange: function(e) {
        this.setState({userName: e.target.value});
    },
    handlePasswordChange:function(e) {
        this.setState({password: e.target.value});
    },

    render(){
        return (

            <div id="login-form">

                <form className="conn-form" role="document"  onSubmit={this.loginUser} >
                    {this.data.isLoginServiceConfigured?
                        <App.LoginWithSM />:""}
                    {
                        this.state.alert!==''?
                            <div className="alert alert-danger" role="alert">
                                <span className="sr-only">Error:</span>
                                {this.state.alert}
                            </div>:''
                    }
                    <input className="btn-input butt col-12" type="text" placeholder="username" value={this.state.userName} onChange={this.handleUsernameChange} />
                    <br/>
                    <input className="btn-input butt col-12" type="password"  placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br/>
                    <button className="btn-main butt col-12" type="submit"   disabled={this.state.userName==''||this.state.password==''}>CONNECTION</button>
                </form>
                <div className="modal-footer conn-footer">
                    <a href="#" onClick={this.toRegister} id="registerLink"><small>Register</small></a>
                </div>
            </div>

        );
    }


})