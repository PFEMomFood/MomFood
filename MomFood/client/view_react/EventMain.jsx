/**
 * Created by Cedric on 06/02/16.
 */
App.EventMain = React.createClass({
    render(){
        return(
            <div id="main-container">
                <h1>{this.props.eventId}</h1>
            </div>
        )
    }
})