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
            events:  events
        }
    },

    render(){
        console.log(this.data.events)
        return (
            <div id="main-container">
                <h1>The wish list of {this.props.userId}</h1>

            </div>
        )
    }

})