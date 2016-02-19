/**
 * Created by Cedric on 02/02/16.
 */
App.EventsContainer = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        console.log("get meteor data updated")
        return{
            eventsLiked: Meteor.user() && Meteor.user().profile ?
                Meteor.user().profile.eventsLiked: null,
        }
    },
    render(){
        var that = this;
        var eventNodes=this.props.eventsData.map(function(event,index){

            var liked = false;
            if (that.data.eventsLiked) {
                for (var i = 0; i < that.data.eventsLiked.length; i++) {
                    if (event._id == that.data.eventsLiked[i]){
                        liked = true;
                        break;
                    }else{
                        //doesn't match
                    }
                }
            }else{
                console.log("user is not logged in or have no likes")
            }

            return <App.EventCard eventData={event} key={event._id} liked={liked}/>
        });
        return (
            <ul className="container">

                {eventNodes}

            </ul>
        )
    }
})