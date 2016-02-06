/**
 * Created by Cedric on 02/02/16.
 */
App.EventsContainer = React.createClass({
    render(){
        var eventNodes=this.props.eventsData.map(function(event,index){
            if (index % 2 === 0) {
                return (
                    <App.EventCard eventData={event} key={event._id} img="beger.png"/>
                )
            }else{
                return(
                    <App.EventCard eventData={event} key={event._id} img="lameloie.jpg"/>
                )
            }
        });
        return (
            <ul className="container">
                {eventNodes}
            </ul>
        )
    }
})