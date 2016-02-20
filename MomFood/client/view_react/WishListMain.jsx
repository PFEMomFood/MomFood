/**
 * Created by Emily on 20/02/16.
 */
App.WishListMain= React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        var eventsLiked = Meteor.user() && Meteor.user().profile ? Meteor.user().profile.eventsLiked : null;
        if(eventsLiked)
            events= Events.find({_id:{$in:eventsLiked}}).fetch()
        else events=null;
        return{
            events:  events,
            username: (function(){
                if (Meteor.user()){
                    if (Meteor.user().username){
                        return Meteor.user().username
                    }else{
                        return Meteor.user().profile.name
                    }
                }else{
                    return null
                }
            })(),
        }
    },


    render(){
        console.log(Meteor.user())
        if(this.data.events)
            var wishNodes= this.data.events.map(function(event,index) {

                return <App.WishCard eventData={event} key={event._id}/>
            });
        else wishNodes=null;
        return (//this.props.currentUser.username?this.props.currentUser.username:this.props.currentUser.profile.name}(Log out)</a>

            <div id="main-container" className="container">
                <h3>The wish list of {this.data.username }</h3>
                {
                    wishNodes?wishNodes:'is empty'
                }


            </div>
        )
    }

})