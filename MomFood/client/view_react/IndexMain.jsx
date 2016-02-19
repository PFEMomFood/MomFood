/**
 * Created by Cedric on 06/02/16.
 */
App.IndexMain = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var events= MomFood.Collection.Events.find({}).fetch();
        var currentuserId= Meteor.userId();
        if (Meteor.users.find().count() != 0&& events.length != 0) {
            var eventsLiked = Meteor.users.find({_id: currentuserId}, {fields: {'profile.eventsLiked': 1}}).fetch()[0].profile.eventsLiked;

            for(var i=0;i<events.length;i++){
                for(var j=0;j < eventsLiked.length; j++)
                    if(eventsLiked[j]==events[i]._id)
                    {
                        events[i].liked=true;
                        break;
                    }
                    else
                        events[i].liked=false;
             }
        }
        console.log(events);
        console.log(eventsLiked)
        return {
                events:events,
                currentUser:currentuserId
        };
    },

    componentWillReceiveProps(nextProps){
        console.log("nextProps")
    },

    render(){
        return(
            <div id="main-container">
                <div id="main-banner">
                    <div id="main-banner-title-container">
                        <div id="main-banner-title-wrapper">
                            <div id="main-banner-title">
                                <span>Devant nous s'ouvre le souvenir  Derrière, le passé, l'enfance</span>
                            </div>
                            <div id="main-banner-description " >
                                <span>Have you ever missed the flavor of your moms? Those are memories full with joy and laughters.
                                    Come and wake up memories of the food from your childhood. With the choice of editors, you are going
                                    to have a brand new old tongue.
                                </span>
                            </div>
                            <div id="main-banner-links"  className="animated pulse">
                                <a href="#anchor">Discover</a>
                                <i className="fa fa-spoon margin-bar"></i>
                                <a href="#anchor">Reservation</a>
                            </div>
                        </div>
                    </div>
                    <div id="main-banner-image">
                        <div id="main-banner-next-arrow">
                            <i className="fa fa-long-arrow-down"></i>
                        </div>
                    </div>

                    <a name="anchor"></a>
                </div>

                <App.EventsContainer eventsData={this.data.events} ></App.EventsContainer>
            </div>
        )
    }
})