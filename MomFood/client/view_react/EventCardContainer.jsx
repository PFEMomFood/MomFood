/**
 * Created by Cedric on 02/02/16.
 */
App.EventCardContainer = React.createClass({
    render(){
        var eventNodes=this.props.eventsData.map(function(event){
            return(
                <App.EventCard eventData={event} key={event._id} />
            )
        });
        return (
            <ul className="container">
                {eventNodes}
            </ul>
        )
    }
})