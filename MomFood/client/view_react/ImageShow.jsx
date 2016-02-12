/**
 * Created by Cedric on 06/02/16.
 */
App.ImageShow = React.createClass({
    getDefaultProps:function(){
        return{
            // animation types:
            // "sides" : new slides will slide in from left / right
            // "center": new slides will appear in the center
            animation: 'sides', // sides || center
            // if true the slider will automatically
            // slide, and it will only stop if the user
            // clicks on a thumb
            autoplay: false,
            // interval for the slideshow
            slideshow_interval: 3000,
            // speed for the sliding animation
            speed: 800,
            // easing for the sliding animation
            easing: '',
            // percentage of speed for the titles animation.
            // Speed will be speed * titlesFactor
            titlesFactor: 0.60,
            // titles animation speed
            titlespeed: 800,
            // titles animation easing
            titleeasing: '',
            // maximum width for the thumbs in pixels
            thumbMaxWidth: 150,
            imageCount:1//this.props.event.images.length,
        };
    },
    getInitialState(){
        self = this;
      return{
          display_image:"none",
          current_position:0,
          slideWidth: window.innerWidth * 0.7,
          isDisplay : (function(){
              var len = self.props.event.images.length;
              var isDisplay = [];
              for (var i =0;i<len;i++){
                  isDisplay.push("none")
              }
              isDisplay[0] = "list-item";
              return isDisplay;
          })()
      }
    },
    componentDidMount(){
        window.addEventListener('resize', this.handleResize);
        console.log("slideWidth",this.refs["slides-container"].offsetWidth)
    },
    componentWillUnmount(){
        window.removeEventListener('resize');
    },

    componentWillMount(){
        console.log(this.state.isDisplay)
        var chooseClass =  this.state["ei-slider-element"]
        var self = this
        //this.imageSlides = this.props.event.images.map(function(url,index){
        //  return(
        //      <li key={"image"+index} style={{display:self.state.isDisplay[index]}}>
        //          <img src={url} alt="image01" />
        //          <div className="ei-title">
        //              <h2>Creative</h2>
        //              <h3>Geek</h3>
        //          </div>
        //      </li>
        //  )
        //});
        this.imageThumbs = this.props.event.images.map(function(url,index){
            return(
                <li key = {"thumb"+index}
                    onClick = {self.handleClick.bind(self,index)}
                    className="ei-slider-element" style={{width:1/self.props.imageCount*100+"%"}}>
                    <a href="#" style={{background:"rgba(0,0,0,0.9)"}} >Slide 1</a>
                    <img src={"/thumb"+ url.substring(0,url.length-4)+".jpg"} alt="thumb01" />
                </li>
            )
        })
    },

    handleMouseEnter(e){
        $(e.currentTarget).css("background-color","#f0f0f0 !important")
        console.log($(e.currentTarget).children())
    },

    handleMouseOut(){
    },

    handleClick(index,e){
        var self = this;
        this.setState({
            isDisplay:(function(){
                var len = self.props.event.images.length;
                var isDisplay = [];
                for (var i =0;i<len;i++){
                    isDisplay.push("none")
                }
                isDisplay[index] = "list-item";
                return isDisplay;
            })()
        },function(){
        })
    },
    handleResize(e){
        this.setState({slideWidth: this.refs["slides-container"].offsetWidth})
    },

    render(){
        var self = this;
        return(
            <div id="ei-slider" className="ei-slider" ref="slides-container" style={{height:this.state.slideWidth*9/16}}>
                <ul className="ei-slider-large" ref="slider-images">
                    {
                        this.props.event.images.map(function(url,index){
                        return <li key={"image"+index} style={{display:self.state.isDisplay[index]}}>
                                    <img src={url} alt="image01" />
                                    <div className="ei-title">
                                    <h2>Creative</h2>
                                    <h3>Geek</h3>
                                    </div>
                                </li>
                        })
                    }
                </ul>
                <ul className="ei-slider-thumbs" ref="slider-thumbs">
                    {
                        this.props.event.images.map(function(url,index){
                        return(
                            <li key = {"thumb"+index}
                            onClick = {self.handleClick.bind(self,index)}
                            className="ei-slider-element" style={{width:1/self.props.imageCount*100+"%"}}>
                                <a href="#" style={{background:"#FFCA28"}} >Slide 1</a>
                                <img src={"/thumb"+ url.substring(0,url.length-4)+".jpg"} alt="thumb01" />
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
})
