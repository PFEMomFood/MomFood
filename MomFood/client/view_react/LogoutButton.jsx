/**
 * Created by Emily on 07/01/16.
 */
App.LogoutButton=React.createClass({
    logoutUser:function(){
        Meteor.logout(function(err){

        })
    },
    render(){
        return (
            <a className='logout-button' onClick={this.logoutUser}>{this.props.currentUser.username}(Log out)</a>
        );
    }
})