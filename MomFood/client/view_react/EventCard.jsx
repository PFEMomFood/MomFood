/**
 * Created by Cedric on 02/02/16.
 */
App.EventCard = React.createClass({
    render(){
       return(
           <div className="card-holder col-md-4 col-sm-6 col-xs-12">
               <div className="card grow blur"></div>
               <div className="card-brief">
                   <div className="card-brief-item "><h3>{this.props.eventData.start}</h3></div>
                   <div className="card-brief-item item-right "><h3>{this.props.eventData.address.city}</h3></div>
               </div>
           </div>
       );
   }
});
