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
            <a className='logout-button' onClick={this.logoutUser}>
                {this.props.currentUser.username?this.props.currentUser.username:this.props.currentUser.profile.name}(Log out)</a>
        );
    }
})