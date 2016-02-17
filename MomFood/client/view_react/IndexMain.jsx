/**
 * Created by Cedric on 06/02/16.
 */
App.IndexMain = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            events:Events.find({}).fetch()
        };
    },
    render(){
        return(
            <div id="main-container">
                <div id="main-banner">
                    <div id="main-banner-title-container">
                        <div id="main-banner-title-wrapper">
                            <div id="main-banner-title">
                                            <span>Devant nous s'ouvre le souvenir  Derrière, le passé, l'enfance
                                            </span>
                            </div>
                            <div id="main-banner-description " >
                                <span>Have you ever missed the flavor of your moms? Those are memories full with joy and laughters.
                                    Come and wake up memories of the food from your childhood. With the choice of editors, you are going
                                    to have a brand new old tongue.
                                </span>
                            </div>
                            <div id="main-banner-links"  className="animated pulse">
                                <a href="#anchor">Discover</a>
                                <i className="fa fa-spoon margin-bar"></i>
                                <a href="#anchor">Reservation</a>
                            </div>
                        </div>
                    </div>
                    <div id="main-banner-image">
                        <div id="main-banner-next-arrow">
                            <i className="fa fa-long-arrow-down"></i>
                        </div>
                    </div>

                    <a name="anchor"></a>
                </div>

                <App.EventsContainer eventsData={this.data.events} ></App.EventsContainer>
            </div>
        )
    }
})