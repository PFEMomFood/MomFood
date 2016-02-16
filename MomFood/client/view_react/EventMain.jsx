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
    check_if_in_view:function()
    {
        var $animation_elements = $('.animation-element');
        var $window = $(window);
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    },
   /* handleScroll:function() {
      /!*console.log("scrolling");*!/

        this.check_if_in_view();
    },*/
    componentDidMount: function() {
        window.scrollTo(0,0);
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


            </div>
        )
    }
})