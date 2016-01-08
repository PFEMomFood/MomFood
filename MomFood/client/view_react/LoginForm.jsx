/**
 * Created by Emily on 06/01/16.
 */
App.LoginForm=React.createClass({
    getInitialState: function() {
        return {userName: '', password: ''};
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
        Meteor.loginWithPassword(u, p, function(err){
            if (err)
            alert("username/password didn't exist");

            else
                $('#myModal').modal('hide');
        });
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
            <div className="modal-content" id="login-form">
                <form className="conn-form " role="document"  onSubmit={this.loginUser} >
                    <input className="btn-input btn-col" type="text" id="login-email" placeholder="username" onChange={this.handleUsernameChange} />
                    <br/>
                    <input className="btn-input btn-col" type="password" id="login-password" placeholder="password" onChange={this.handlePasswordChange}/>
                    <br/>
                    <input className="btn-submit btn-col" type="submit" id="login-button" value="CONNECTION" />
                </form>
                <div className="modal-footer conn-footer">
                    <a href="#" onClick={this.toRegister} id="registerLink"><small>Register</small></a>
                </div>
            </div>

        );
    }


})