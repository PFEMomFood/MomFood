/**
 * Created by Cedric on 01/02/16.
 */
var events1, events2, events3, events4, events5, events6, events7;
if(Meteor.users.find().count()!==0){
    console.log("add events if  called")

    var userIds = Meteor.users.find({},{fields:{_id:1}}).fetch();

    console.log("userid ",userIds)

    if (MomFood.Collection.Events.find().count() === 0){
        var events = new Array( );
        console.log("***************Now creating new events***************")
        events[0] = {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "3 rue tronchet",
                "city": "Paris",
                "zip_code": 75008,
                "country": "France",
                "longitude":48.871198,
                "latitude":2.324887
            },
            price: 40,
            images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
        };

        events[1] = {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "9 Avenue Franco-Russe",
                "city": "Paris",
                "zip_code": 75007,
                "country": "France",
                "longitude":48.859830,
                "latitude":2.299310
            },
            price: 40,
            images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
        };

        events[2] = {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "27 rue de l'exposition",
                "city": "Paris",
                "zip_code": 75007,
                "country": "France",
                "longitude": 48.857217,
                "latitude": 2.304304
            },
            price: 40,
            images:["/lameloie.jpg","/beger.png","/esgarool.png"]
        };

        events[3]= {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "3 rue tronchet",
                "city": "Paris",
                "zip_code": 75008,
                "country": "France",
                "longitude":48.831235,
                "latitude":2.357004
            },
            price: 40,
            images:["/beger.png","/crasong.png","/esgarool.png"]
        };

        events[4] = {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "213 Boulevard Vincent Auriol",
                "city": "Paris",
                "zip_code": 75013,
                "country": "France"
            },
            price: 40,
            images:["/lameloie.jpg","/crasong.png","/esgarool.png"]
        };

        events[5] = {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "76-78 Av. des Champs-Élysées",
                "city": "Paris",
                "zip_code": 75008,
                "country": "France",
                "longitude":48.871689,
                "latitude":2.304850
            },
            price: 40,
            images:["/lameloie.jpg","/beger.png","/crasong.png"]
        };

        events[6]= {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "2 Rue d'Amsterdam",
                "city": "Paris",
                "zip_code": 75009,
                "country": "France",
                "longitude":48.875812,
                "latitude":2.327058
            },
            price: 40,
            images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png","/dish_chinois.jpg"]
        };

        /*console.log(userIds[0]._id);*/
        for (var i=0;i<7;i++){

           events[i].host=userIds[Math.floor(Math.random() * 5)]._id;
        }
        MomFood.Collection.Events.insert(events[0]);
        MomFood.Collection.Events.insert(events[1]);
        MomFood.Collection.Events.insert(events[2]);
        MomFood.Collection.Events.insert(events[3]);
        MomFood.Collection.Events.insert(events[4]);
        MomFood.Collection.Events.insert(events[5]);
        MomFood.Collection.Events.insert(events[6]);

        console.log("***************New entry created: ",MomFood.Collection.Events.find().count());
        console.log("***************");
    }

}

