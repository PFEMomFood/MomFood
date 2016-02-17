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

    componentDidMount: function() {
        window.onscroll = function headerScroll(){
            if (document.body.scrollTop>50|| document.documentElement.scrollTop>50){
                document.getElementById("header").className = "fixed-header";
            }else{
                document.getElementById("header").className="";
            }
        };
        window.addEventListener('scroll', this.check_if_in_view);
    },
    render(){
        return(
            <div id="main-container" className="blueBoard container" >
                <div>
                    <div id="image-show-container" className="col-md-9 col-sm-12">
                        <App.ImageShow event={this.data.event} imageCount={this.data.event.images.length}/>
                    </div>
                    <App.ReserveInfo/>
                </div>

                <App.MenuInfo/>

                <App.HostInfo/>
            </div>
        )
    }
})