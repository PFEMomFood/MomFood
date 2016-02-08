/**
 * Created by Cedric on 06/02/16.
 */
App.EventMain = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
      return{
          event:Events.find({_id:this.props.eventId}).fetch()[0]
      }
    },
    render(){
        return(
            <div id="main-container">
                <div id="image-show-container">
                    <App.ImageShow event={this.data.event} imageCount={this.data.event.images.length}/>
                </div>
            </div>
        )
    }
})