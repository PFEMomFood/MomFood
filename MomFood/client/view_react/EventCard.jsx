/**
 * Created by Cedric on 02/02/16.
 */
App.EventCard = React.createClass({
    /*hoverHandler:function(event){
       /!* console.log( event.target);*!/
        $(event.currentTarget).find(".hidden-card-description").show();
       /!* $(this.getDOMNode()).find('.card').siblings(".hidden-card-description").show();*!/
    },
    blurHandler:function(event){
        $(event.currentTarget).find(".hidden-card-description").hide();
        /!*$(this.getDOMNode()).find('.card').siblings(".hidden-card-description").hide();*!/
    },
    render(){
        console.log((this.props.eventData.start));
       return(
           <div className="card-holder col-md-4 col-sm-6 col-xs-12" >
            <div onMouseEnter={this.hoverHandler} onMouseLeave={this.blurHandler}>


                   <div className="card grow blur" ></div>
                   <div className="hidden-card-description" >
                           <div> <span>{this.props.eventData.title}</span></div>
                           <div> <span>{this.props.eventData.price}</span></div>
                           <div> <span>{this.props.eventData.description}</span></div>
                   </div>
            </div>

               <div className="card-brief">

                   <div className="card-brief-item "><span>{this.props.eventData.start.toDateString()}</span></div>
                   <div className="card-brief-item " style={{"textAlign":"center","width":"auto"}}><i className="fa fa-heart-o"></i></div>
                   <div className="card-brief-item item-right "><span>{this.props.eventData.address.city}</span></div>

               </div>
           </div>
       );
   }*/
    render()
    {
        return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="view view-first ">
                <img src="/lameloie.jpg" />
                <div className="mask">
                    <h2>{this.props.eventData.title}</h2>
                    <p>{this.props.eventData.description}</p>
                    <h2>{this.props.eventData.price}</h2>
                    <a href="#" class="info">Read More</a>
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
