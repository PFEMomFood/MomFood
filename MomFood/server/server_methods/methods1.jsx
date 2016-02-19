/**
 * Created by Cedric on 17/02/16.
 */
Meteor.methods({
    findEvents(userId,lat,lng,distance){
        check(userId, String);
        check(lat,Number);
        check(lng,Number);

        var eventRadius = distance ? distance:3000;

        var deg2rad = function(deg) {
            return deg * (Math.PI/180)
        };

        var allEvents = MomFood.Collection.Events.find({},{fields:{address:1}});

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
                var d = r * c * 1000; // Distance in km
                console.log("eventRadius: ",eventRadius,event.address.longitude," ",event.address.latitude," distance: ",d);
                if (d < eventRadius){
                    return event;
                }else{
                    return null;
                }
            });
    }
}
)