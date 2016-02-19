App.MapContainer = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        return{
            location_error: Geolocation.error(),
            location: Geolocation.latLng(),
            loaded: GoogleMaps.loaded(),
            events: MomFood.Collection.Events.find({},{address:1}).fetch(),
        };
    },
    getInitialState(){
      return{
          eventsNearby:null,
      }
    },
    componentDidMount(){
        GoogleMaps.load();
    },
    componentWillReceiveProps(nextProps){
        console.log("MapContainer will receive props: ", nextProps,this.props);
        if (this.props.eventRadius !== nextProps.eventRadius){
            this.setState({
                eventsNearby: null,
            })
        }else{
            console.log("MapContainer will receive props: ","no update on eventRadius")
        }
    },
    render(){
        console.log("render: ","event radius: ",this.props.eventRadius, this.data.location," ",this.data.loaded);

        if(this.data.loaded && this.data.location){
            return <App.GoogleMap name="MomFoodMap"
                                  center={this.data.location}
                                  zoom={11}
                                  eventRadius = {this.props.eventRadius}
            />
        }else{
            return <div className="center">
                <div className="bouncywrap">

                        <div className="dotcon dc1">
                            <div className="dot">
                                <i className="fa fa-spoon"></i>
                            </div>
                        </div>

                        <div className="dotcon dc2">
                            <div className="dot">
                                <i className="fa fa-spoon"></i>
                            </div>
                        </div>

                        <div className="dotcon dc3">
                            <div className="dot">
                                <i className="fa fa-spoon"></i>
                            </div>
                        </div>

                    </div>
            </div>
        }
    }
});

App.GoogleMap = React.createClass({
    propTypes:{
        name: React.PropTypes.string.isRequired,
        center: React.PropTypes.object.isRequired,
        zoom: React.PropTypes.number.isRequired,
        eventRadius: React.PropTypes.number.isRequired,
    },
    componentDidMount(){
        GoogleMaps.create({
            name:this.props.name,
            element: document.getElementById("map-container"),
            options: {
                center: this.props.center,
                zoom: this.props.zoom
            }
        });

        var self = this;

        GoogleMaps.ready(this.props.name,function(map){

            self.myMarker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance,
                label: "Me"
            });

            self.meCircle = new google.maps.Circle({
                center: map.options.center,
                radius:  Number(self.props.eventRadius)? Number(self.props.eventRadius):3000,
                strokeColor: '#FFA409',
                strokeOpacity: 0.4,
                strokeWeight: 2,
                fillColor: '#FFA409',
                fillOpacity: 0.35,
                map: map.instance,

            });

        });
    },

    componentWillReceiveProps(nextProps){
        console.log("receive props called ",nextProps);
        //on update event
        if (this.props.eventRadius != nextProps.eventRadius){
            console.log("receive props called different event radius")


            //set events to null
            this.setState({
                eventsNearby: null,
            })

            //change overlay circle
            if (this.meCircle) {
                console.log("receive props get circle");
                this.meCircle.setMap(null);
                this.meCircle = null;

                self = this;
                var map = GoogleMaps.maps.MomFoodMap;

                this.meCircle = new google.maps.Circle({
                    center: map.options.center,
                    radius:  Number(nextProps.eventRadius) ? Number(nextProps.eventRadius):3000,
                    strokeColor: '#FFA409',
                    strokeOpacity: 0.4,
                    strokeWeight: 2,
                    fillColor: '#FFA409',
                    fillOpacity: 0.35,
                    map: map.instance,

                });
            }else{
                console.log("receive props, circle: ",this.meCircle)
            }



        }

    },

    componentWillUnmount(){
        if(GoogleMaps.maps[this.props.name]){
            google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
            delete GoogleMaps.maps[this.props.name];
        }
    },

    shouldComponentUpdate(nextProps, nextStates){
        //if radius changes or events changes component should update
        if ( (this.props.eventRadius == nextProps.eventRadius)
            && (this.state.eventsNearby == nextStates.eventsNearby) ){
            console.log("component should not update")
            return false;
        }else{
            console.log("component should update")
            return true;
        }
    },

    componentWillUpdate(nextProps, nextStates){
        console.log("component will update")
        //compare events to set and clear markers
        if (this.state.eventsNearby !== nextStates.eventsNearby){

            //clear previous marker
            if (this.markers && (this.markers.length!=0)){
                for (var i = 0; i < this.markers.length; i++){
                    if (this.markers[i]) {
                        this.markers[i].setMap(null);
                    }else{
                        console.log("component will update, markers[] is null" )
                    }
                }
                this.markers = null;
            }else{
                console.log("receive props, ", this.markers)
            }

            //set new markers
            events = nextStates.eventsNearby;
            if (events) {
                var image = "/thumb/map-marker-icon3.png";

                // if previous markers exist, skip setting new marker
                if ( ( !this.markers ) || (this.markers.length === 0)) {
                    this.markers = new Array();
                    for (var i = 0; i < events.length; i++) {
                        console.log(events[i]);
                        var map = GoogleMaps.maps.MomFoodMap.instance;
                        if (events[i] !== null) {
                            this.markers[i] = new google.maps.Marker({
                                position: {lat: events[i].address.latitude, lng: events[i].address.longitude},
                                map: map,
                                icon: image,
                            })

                            this.markers[i].eventId = events[i]._id;
                            this.markers[i].clickTime = 0;

                            this.markers[i].addListener("click", function (event) {
                                map.setZoom(14);
                                map.setCenter(this.getPosition());
                                this.clickTime++;
                                if (this.clickTime == 2) {
                                    this.clickTime = 0;
                                    document.getElementById("search-overlay").style.visibility = "hidden";
                                    //document.getElementById("search-overlay").style.opacity= "0.98";
                                    FlowRouter.go("/events/" + this.eventId)
                                }
                            })
                        } else {
                            console.log("event is null");
                        }
                    }
                } else {
                    console.log("markers exist")
                }
            } else {
                console.log("no events")
            }

        }else{
            console.log("component will update ", "same events, no update");
        }
    },

    getInitialState(){
        return{
            eventsNearby: null,
        }
    },

    render(){
        if ( this.state.eventsNearby === null){
            console.log("fetch eventsneaby",this.props.eventRadius)
            self = this;
            Meteor.call("findEvents", Meteor.userId(),
                this.props.center.lat,
                this.props.center.lng,
                this.props.eventRadius,
                function(error,result){
                    if (!error) {
                        self.setState({
                            eventsNearby:result,
                        })
                        console.log(result)
                    }else{
                        console.log("error: ",error);
                    }
                });
        }else{
            console.log("no update, ",this.state.eventsNearby)
        }
        return <div id="map-container" ></div>
    }
})