/**
 * Created by Emily on 15/02/16.
 */

App.Show_logout= React.createClass({
    logoutUser:function(){
        Meteor.logout(function(err){
        })
    },
    render(){
        return(
            <div className="dropdown">
                <a className="dropdown-toggle"  id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    {this.props.currentUser.username?this.props.currentUser.username:this.props.currentUser.profile.name}
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">Wish Lists</a></li>
                    <li><a href="#">Messages</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#" onClick ={ this.logoutUser }>Log out</a></li>
                </ul>
            </div>
        );
    }
})