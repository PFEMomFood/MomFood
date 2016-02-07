/**
 * Created by Emily on 06/01/16.
 */
/**
 * Created by Emily on 06/01/16.
 */
App.RegisterForm=React.createClass({
    getInitialState: function() {
        return {userName: '', password: '',repass:'',alert:''};
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
        if(isValidPassword(pass)){
            if(pass==repass){
                self=this;
                Accounts.createUser({username: usr, password : pass}, function(err){
                    if (err){
                         self.setState({alert:err.message});
                        /*self.setState({alert:'youyou'});*/
                            //console.log(err.error);

                    }

                    else
                    {
                        $('#myModal').modal('hide');
                        self.setState({userName:""});
                        self.setState({password:""});
                        self.setState({repass:""});
                    }
                });
            }
            else this.setState({alert:'The passwords are inconsistent.'});
        }
        else this.setState({alert:'The length of password should be longer than 6.'});
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
            <div  id="register-form">
                <form className="conn-form" role="document"  onSubmit={this.RegisterUser} >
                    {
                        this.state.alert!==''?
                            <div className="alert alert-danger" role="alert">
                                <span className="sr-only">Error:</span>
                                {this.state.alert}
                            </div>:''
                    }
                    <input className="btn-input butt col-12" type="text"  placeholder="username" value={this.state.userName} onChange={this.handleUsernameChange} />
                    <br/>
                    <input className="btn-input butt col-12" type="password"  placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <br/>
                    <input className="btn-input butt col-12" type="password"  placeholder="password(again)"  value={this.state.repass}onChange={this.handleRepassChange}/>
                    <br/>
                    <button className="btn-main butt col-12" type="submit" disabled={this.state.userName==''||this.state.password==''||this.state.repass==''}>REGISTER</button>


                </form>
                <div className="modal-footer conn-footer">
                    <a href="#" onClick={this.toLogin} id="loginLink"><small>Login</small></a>
                </div>
            </div>
    );
}


})