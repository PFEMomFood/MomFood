/**
 * Created by Cedric on 06/02/16.
 */
App.EventMain = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        if (!this.props.eventId){
            return;
        }
        else
        {
            var event=Events.find({_id:this.props.eventId}).fetch()[0];
            return{
                event:event,
                host: Meteor.users.find({_id:event.host}).fetch()[0]
            }
        }

    },
    componentDidMount: function() {
        window.scrollTo(0, 0);
        console.log(this.data.event)
    },
    render(){
        return(
            <div id="main-container" className="blueBoard container" >
                <div>
                    <div id="image-show-container" className="col-md-9 col-sm-12">
                        {
                            this.data.event ?
                                <App.ImageShow event={this.data.event} imageCount={this.data.event.images.length}/>
                                : null
                        }
                    </div>
                    <App.ReserveInfo reserveInfo={this.data.event}/>
                </div>

                <App.MenuInfo/>

                <App.HostInfo host={this.data.host}/>
            </div>
        )
    }
})