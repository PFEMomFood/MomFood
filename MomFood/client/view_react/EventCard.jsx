/**
 * Created by Cedric on 02/02/16.
 */
App.EventCard = React.createClass({

    render(){
       return(
           <div className="card-holder">
               <div className="card grow blur">

               </div>
               <div className="card-brief">
                   <div className="card-brief-item "><span>{this.props.eventData.host}</span></div>
                   <div className="card-brief-item item-right "><span>{this.props.eventData.address.city}</span></div>
               </div>
           </div>
       )
   }
});
