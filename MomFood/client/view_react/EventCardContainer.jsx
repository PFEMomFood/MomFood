/**
 * Created by Cedric on 02/02/16.
 */
App.EventCardContainer = React.createClass({
    render(){
       /* var eventNodes = this.props.data.map(function(event) {
            return (
                <App.Event item={event}  key={event.id}>
                </App.Event>
            );
        });
        return (
            <ul className="eventList">
                {eventNodes}
            </ul>
        );*/
        var eventNodes=this.props.eventsData.map(function(event){
            return(
                <App.EventCard eventData={event} key={event._id} />
                /*<li key={event._id}>{event._id}</li>*/

            )
        });
        return (
            <ul className="container">
                {eventNodes}

            </ul>
        )
    }
})