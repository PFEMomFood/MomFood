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
                <button className='btn-facebook col-12' onClick={this.toLoginFB}>Login With Facebook</button>
                <button className='btn-facebook col-12' onClick={this.toLoginGL}>Login With Google</button>
            </div>

        )
    }

});