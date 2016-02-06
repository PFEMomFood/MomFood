/**
 * Created by Cedric on 06/01/16.
 */

App.index = React.createClass({
    mixins: [ReactMeteorData],
    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        return {
            currentUser:Meteor.user(),
            events:Events.find({}).fetch()
        };
    },
    /*componentDidMount(){
      console.log(this.data.events);
    },*/
    getInitialState(){
        return {view: {showConnModal: false}}
    },
    handleHideModal(){
        this.setState({view: {showConnModal: false}})
    },
    handleShowModal(){
        this.setState({view: {showConnModal: true}})
    },
    render(){
        return(
            <div id="container-wrapper">
                <link href='https://fonts.googleapis.com/css?family=Wire+One' rel='stylesheet' type='text/css'/>
                <App.search />
                <App.header currentUser={this.data.currentUser} handleShowModal={this.handleShowModal} />

                {this.state.view.showConnModal ? <App.ConnModal handleHideModal={this.handleHideModal}/> : null}


                <div id="main-container">
                    <div id="main-banner">
                        <div id="main-banner-title-container">
                            <div id="main-banner-title-wrapper">
                                <div id="main-banner-title">
                                    <span>Devant nous s'ouvre le souvenir  Derrière, le passé, l'enfance
                                    </span>
                                </div>
                                <div id="main-banner-description">
                        <span>Have you ever missed the flavor of your moms? Those are memories full with joy and laughters.
                            Come and wake up memories of the food from your childhood. With the choice of editors, you are going
                            to have a brand new old tongue.
                        </span>
                                </div>
                                <div id="main-banner-links">
                                    <a href="">Discover</a>
                                    <i className="fa fa-spoon margin-bar"></i>
                                    <a href="">Reservation</a>
                                </div>
                            </div>
                        </div>
                        <div id="main-banner-image">
                            <div id="main-banner-next-arrow">
                                <i className="fa fa-long-arrow-down"></i>
                            </div>
                        </div>

                    </div>
                    <App.EventCardContainer eventsData={this.data.events} ></App.EventCardContainer>

                </div>

                <App.Footer/>

            </div>
        )
    }
})