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
  /*  componentDidMount(){
      console.log(this.data.currentUser._id);
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
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Tangerine"/>
                <link href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'/>
                <App.search />

                <App.header currentUser={this.data.currentUser} handleShowModal={this.handleShowModal} />

                {this.state.view.showConnModal ? <App.ConnModal handleHideModal={this.handleHideModal}/> : null}

                {/*this is to render the content of the page*/}
                <div id="main-container-wrapper">
                    {this.props.content}
                </div>


                <App.Footer/>

            </div>
        )
    }
})