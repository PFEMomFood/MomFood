/**
 * Created by Cedric on 02/02/16.
 */
App.EventCard = React.createClass({
    getInitialState: function(){
        return {liked:false};
    },
    eventLiked:function(event){
        if(!this.props.liked){
            //this.state.liked=true;
            console.log("eventcard", this.props.eventData._id)
            Meteor.users.update({_id:Meteor.userId()},{$push:{'profile.eventsLiked':this.props.eventData._id}})
            $(event.currentTarget).removeClass('fa-heart-o');
            $(event.currentTarget).addClass('fa-heart');
        }
        else {
            console.log("eventcard", this.props.eventData._id)
            Meteor.users.update({_id:Meteor.userId()},{$pull:{'profile.eventsLiked':this.props.eventData._id}})
            //this.state.liked=false;
            $(event.currentTarget).removeClass('fa-heart');
            $(event.currentTarget).addClass('fa-heart-o');
        }

    },
    render()
    {
        return (
            <div className="eventContainer col-md-4 col-sm-6 col-xs-12">
                <div className="view view-first ">
                    <a href={"/events/"+this.props.eventData._id} className='eventCard'>
                        {/*<img src={"/"+this.props.img}/>*/}
                        <img src={this.props.eventData.images[0]} alt=""/>
                        <div className="mask">
                            <h2>{this.props.eventData.title}</h2>
                            <p>{this.props.eventData.description}</p>
                            <h4 className='card-foot'>{this.props.eventData.price}€ per person</h4>
                        </div>
                    </a>
                </div>
                    <div className="card-brief">

                        <div className="card-brief-item "><span>{this.props.eventData.start.toDateString()}</span></div>
                        <div className="card-brief-item " style={{"textAlign":"center","width":"auto"}}><i className={this.props.liked?'fa fa-heart':'fa fa-heart-o'} onClick={this.eventLiked}></i></div>
                        <div className="card-brief-item item-right "><span>{this.props.eventData.address.city}</span></div>

                </div>
            </div>
        );
    }
});
