App.MapContainer = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        return{
            location_error: Geolocation.error(),
            location: Geolocation.latLng(),
            loaded: GoogleMaps.loaded(),
        };
    },
    componentDidMount(){
        GoogleMaps.load();
    },
    render(){
        console.log("render: ",this.data.location," ",this.data.loaded);
        if(this.data.loaded && this.data.location){
            return <App.GoogleMap name="MomFoodMap" center={this.data.location} zoom={13}/>
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
        });
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