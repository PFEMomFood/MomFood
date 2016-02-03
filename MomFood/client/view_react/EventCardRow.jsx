/**
 * Created by Cedric on 02/02/16.
 */
App.EventCardRow = React.createClass({
    render(){
        return(
            <div className="card-row">
                <App.EventCard />
                <App.EventCard className="card-center"/>
                <App.EventCard />
            </div>
        )
    }
})