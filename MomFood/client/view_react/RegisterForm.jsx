/**
 * Created by Emily on 06/01/16.
 */
/**
 * Created by Emily on 06/01/16.
 */
App.RegisterForm=React.createClass({
    getInitialState: function() {
        return {userName: '', password: '',repass:''};
    },
    toLogin:function(){

        $("#myModal").removeClass('registering');
        /*this.setState({registering:false});*/
    },
    RegisterUser:function(event) {
        event.preventDefault();
        // Trim and validate your fields here....
        var usr=this.state.userName.trim();
        var pass=this.state.password.trim();
        var repass=this.state.repass.trim();
        // If validation passes, supply the appropriate fields to the
        var isValidPassword = function(val) {
            return val.length >= 6 ? true : false;
        };
        if(pass==repass&&isValidPassword(pass))
            Accounts.createUser({username: usr, password : pass}, function(err){
                if (err)
                 alert("login failed");
                 // The user might not have been found, or their passwword
                 // could be incorrect. Inform the user that their
                 // login attempt has failed.
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
    handleRepassChange:function(e) {
        this.setState({repass: e.target.value});
    },

    render(){
        return (
            <div className="modal-content" id="register-form">
                <form className="conn-form" role="document"  onSubmit={this.RegisterUser} >
                    <input className="btn-input btn-col" type="text" id="login-email" placeholder="username" onChange={this.handleUsernameChange} />
                    <br/>
                    <input className="btn-input btn-col" type="password" id="login-password" placeholder="password" onChange={this.handlePasswordChange}/>
                    <br/>
                    <input className="btn-input btn-col" type="password" id="login-repass" placeholder="password(again)" onChange={this.handleRepassChange}/>
                    <br/>
                    <input className="btn-submit btn-col" type="submit" id="login-button" value="REGISTER" />


                </form>
                <div className="modal-footer conn-footer">
                    <a href="#" onClick={this.toLogin} id="loginLink"><small>Login</small></a>
                </div>
            </div>
    );
}


})