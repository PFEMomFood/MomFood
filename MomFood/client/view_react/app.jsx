/**
 * Created by Cedric on 06/01/16.
 */
App = {};

App.index = React.createClass({
    render(){
        return(
            <div id="container-wrapper">
                <div id="header">
                    <div className="header-text header-item header-item-left">Homepage</div>
                    <div className="header-item" id="logo"><img src="logo.png" alt=""/></div>
                    <i className="fa fa-search header-item header-item-right header-icon"></i>
                    <i className="fa fa-spoon margin-bar header-item header-item-right header-icon"></i>
                    <div className="header-text header-item header-item-right">Connect</div>
                </div>

                <div id="container">
                    <div id="main-banner">
                        <div id="main-banner-title-container">
                            <div id="main-banner-title-wrapper">
                                <div id="main-banner-title">
                                    <span>Devant nous s'ouvre le souvenir  Derrière, le passé, l'enfance</span>
                                </div>
                                <div><h1>hello world mingming</h1></div>
                                <div id="main-banner-description">
                        <span>Have you ever missed the flavor of your mom's? Those are memories full with joy and laughters.
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
                </div>
            </div>
        )
    }
})