/**
 * Created by Cedric on 02/02/16.
 */
App.EventCard = React.createClass({
    render(){
        console.log((this.props.eventData.start));
       return(
           <div className="card-holder col-md-4 col-sm-6 col-xs-12">
               <div>
                   <div className="hidden-card-description">
                       <div>
                           <div> <span>{this.props.eventData.title}</span></div>
                           <div> <span>{this.props.eventData.price}</span></div>
                           <div> <span>{this.props.eventData.description}</span></div>
                       </div>
                   </div>
                   <div className="card grow blur">
                   </div>
               </div>
               <div className="card-brief">
                   <div className="card-brief-item "><span>{this.props.eventData.start.toDateString()}</span></div>
                   <div className="card-brief-item " style={{"textAlign":"center","width":"auto"}}><i className="fa fa-heart-o"></i></div>
                   <div className="card-brief-item item-right "><span>{this.props.eventData.address.city}</span></div>
               </div>
           </div>
       );
   }
});
