/**
 * Created by Cedric on 06/01/16.
 */
App.search = React.createClass({
    handleClick: function(e){
        $("#search-overlay").css({visibility:"hidden",opacity:0});
    },
    handleLength: function(event){
        this.setState({width:event.target.value.length*20})
    },
    getInitialState(){
        return {
            width:50,
            eventRadius: 3000,
        }
    },
    handleSubmit(e){
        var key = e.which || e.keyCode
        if (key == 13) {

            console.log("submit")
            if (!isNaN(Number(e.currentTarget.value))){
                console.log("user input number: ",Number(e.currentTarget.value))
                this.setState({
                    eventRadius:Number(e.currentTarget.value)
                })
            }else{
                console.log("user input: ", e.currentTarget.value)
                $("#search-overlay").css({visibility:"hidden",opacity:0});
            }
        }
    },
    render(){
        return(
            <div id="search-overlay">
                <div id="search-container">
                    <div className="search-close">
                        <span className="search-close search-close-ward" onClick={this.handleClick}>&#10006;</span>
                    </div>
                    <div id="search-title">
                        SEARCH EVENTS
                    </div>
                    <div id="search-text">
                        <i className="fa fa-search feature-color"></i>
                        <input id="search-input" onKeyPress={this.handleSubmit} type="text"
                               onInput={this.handleLength} style={{width:this.state.width}}/>
                    </div>

                    <App.MapContainer eventRadius={this.state.eventRadius}/>

                </div>
            </div>

        )
    }
})