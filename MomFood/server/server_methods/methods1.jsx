/**
 * Created by Cedric on 17/02/16.
 */
Meteor.methods({
    findEvents(userId,lat,lng){
        check(userId, String);
        check(lat,Number);
        check(lng,Number);
        var deg2rad = function(deg) {
            return deg * (Math.PI/180)
        };

        var allEvents = MomFood.Collection.Events.find({},{fields:{address:1}});var R = 6371000;

        var r = 6371;
        console.log("my address: ",lat," ",lng);

        return allEvents.map(function(event){
                var dLat = deg2rad(lat - event.address.latitude);
                var dLng = deg2rad(lng - event.address.longitude);

                var a =
                        Math.sin(dLat/2) * Math.sin(dLat/2) +
                        Math.cos(deg2rad(lat)) *
                        Math.cos(deg2rad(event.address.latitude)) *
                        Math.sin(dLng/2) * Math.sin(dLng/2)
                    ;
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = r * c; // Distance in km
                console.log(event.address.longitude," ",event.address.latitude," distance: ",d*1000);
                if (d < 3){
                    return event;
                }
            });
    }
}
)