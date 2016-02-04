/**
 * Created by Cedric on 02/02/16.
 */
App.EventCard = React.createClass({

    render(){
       return(
           <div className="cardHolder col-md-4">
               <div className="card grow blur"></div>
               <div className="cardInfo">
                   <div className="card-brief-item "><span>{this.props.eventData.host}</span></div>
                   <div className="card-brief-item item-right "><span>{this.props.eventData.address.city}</span></div>
               </div>
           </div>
       )
   }
});
