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
    render(){
        console.log("render: ",this.data.location," ",this.data.loaded);
        if (this.data.location && this.data.loaded && (this.state.eventsNearby === null)) {
            console.log("fetch eventsneaby")
            self = this;
            Meteor.call("findEvents", Meteor.userId(), this.data.location.lat, this.data.location.lng,
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
        }
        if(this.data.loaded && this.data.location){
            return <App.GoogleMap name="MomFoodMap"
                                  center={this.data.location}
                                  zoom={13}
                                  eventsNearby={this.state.eventsNearby} />
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
        //options: React.PropTypes.object.isRequired
        center: React.PropTypes.object.isRequired,
        zoom: React.PropTypes.number.isRequired
    },
    componentDidMount(){
        GoogleMaps.create({
            name:this.props.name,
            element: React.findDOMNode(this),
            options: {
                center: this.props.center,
                zoom: this.props.zoom
            }
        });

        GoogleMaps.ready(this.props.name,function(map){

            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance,
                label: "Me"
            });

            //var meCircle = new google.maps.Circle({
            //    strokeColor: '#FF0000',
            //    strokeOpacity: 0.8,
            //    strokeWeight: 2,
            //    fillColor: '#FF0000',
            //    fillOpacity: 0.35,
            //    map: map.instance,
            //    center: this.props.center,
            //    radius:  4000
            //});

        });
    },
    componentWillReceiveProps(nextProps){
        console.log("receive props called ",nextProps);

            events = nextProps.eventsNearby;
            if(events){
                var image = "/thumb/map-marker-icon3.png";
                for(var i = 0; i < events.length; i++){
                    console.log(events[i]);
                    if (events[i]!==null) {
                        new google.maps.Marker({
                            position: {lat: events[i].address.latitude, lng: events[i].address.longitude},
                            map: GoogleMaps.maps.MomFoodMap.instance,
                            icon: image,
                        })
                    }
                }
            }else{
                console.log("no events")
            }
    },
    componentWillUnmount(){
        if(GoogleMaps.maps[this.props.name]){
            google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
            delete GoogleMaps.maps[this.props.name];
        }
    },
    render(){
        return <div className="map-container"></div>
    }
})