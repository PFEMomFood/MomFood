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
            <div id="main-container" className="blueBoard" >
                <div id="image-show-container">
                    <App.ImageShow event={this.data.event} imageCount={this.data.event.images.length}/>
                </div>
                <div>
                    <div className=" menuContainer animation-element slide-left">
                        <header className="menuTitle animation-element slide-bottom">Menu</header>

                        <section >
                            <header>Entrée</header>
                            <div className="dishContainer">
                                <h3><i className="fa fa-spoon"></i> tastes of the sea</h3>
                                <p>lemon myrtle cured tasmanian salmon, yarra valley salmon caviar vinaigrette
                                    poached spencer gulf prawn, black organic quinoa
                                    seared hervey bay scallop, potato strings</p>
                            </div>
                        </section>

                        <section>
                            <header>Plat</header>
                            <div className="dishContainer">
                                <h3><i className="fa fa-spoon"></i> herb crusted tasmanian salmon</h3>
                                <p>australian prawn ravioli, wilted kale, radish AND caper salad, saffron beurre noisette</p>
                            </div>

                        </section>

                        <section>
                            <header>Déssert</header>
                            <div className="dishContainer">
                                <h3><i className="fa fa-spoon"></i> gianduja semifreddo</h3>
                                <p>chocolate AND hazelnut, praline feuilletine, mango crisp</p>
                            </div>
                            <div className="dishContainer">
                                <h3><i className="fa fa-spoon"></i> banana pudding</h3>
                                <p>caramel sauce, pecan praline, vanilla bean ice-cream</p>
                            </div>
                        </section>
                    </div>


                </div>
                <div className="profileContainer container animation-element slide-right ">
                    <header className="menuTitle animation-element slide-bottom">About the host</header>
                    <div className="profilePhoto col-md-6 col-sm-12">
                            <img src="/host2.jpg" alt=""/>
                        </div>
                        <div className="profileDesp col-md-6 col-sm-12">
                            <p className="hostDesp">Bonjour!
                                Since I was a girl, I’ve dreamed of all things French: the fashion, the art, the history, but most of all the food.
                                To uncover the magic of French cuisine, I recently traveled for six months throughout France,
                                determined to discover and bring home a bit of that je ne sais quoi in French cuisine.
                                I studied under Susan Herrmann Loomis, one of the most renowned authorities on French cooking.
                                While living in Susan’s 14th-century home for a month, I assisted her with tastings and dinner parties and helped test recipes for
                                her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote and the lesson I learned). Outside a French
                                village, I harvested and sold produce at the farmers market with Baptiste, an organic farmer, who delivers vegetables and fruit daily to
                                Michelin-starred restaurants.
                            </p>
                        </div>



                </div>
            </div>
        )
    }
})