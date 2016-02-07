/**
 * Created by Emily on 29/01/16.
 */

App.LoginWithSM = React.createClass({
    toLoginFB:function(){
        Meteor.loginWithFacebook({
            requestPermissions: ['email', 'public_profile']
        }, function (err) {
            if (err){
                alert('error : '+ err);
            }
                /*Session.set('errorMessage', err.reason || 'Unknown error');*/
        });
        $('#myModal').modal('hide');
    },
    toLoginGL:function(){
        Meteor.loginWithGoogle({
            requestPermissions: ['email', 'profile']
        }, function (err) {
            if(err) {
                //error handling
                alert('error : '+ err);
                throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Error');
            } else {
                //show an alert
                // alert('logged in');
            }
        });
        $('#myModal').modal('hide');
    },
    render(){
        return(
            <div className="login-SM">
                <button className='btn-facebook butt col-md-12' onClick={this.toLoginFB}><i className="zmdi zmdi-facebook"></i>  &nbsp;Login With Facebook</button>
                <button className='btn-google butt col-md-12' onClick={this.toLoginGL}><i className="zmdi zmdi-google"></i>  &nbsp;Login With Google</button>
            </div>

        )
    }

});