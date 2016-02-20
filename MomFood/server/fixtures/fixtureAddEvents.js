/**
 * Created by Cedric on 01/02/16.
 */
var events1, events2, events3, events4, events5, events6, events7;
if(Meteor.users.find().count()!==0){
    var userIds = Meteor.users.find({},{fields:{_id:1}}).fetch();

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
                "latitude":48.871198,
                "longitude":2.324887
            },
            price: 40,
            images:["/beger.png","/lameloie.jpg","/crasong.png","/esgarool.png"]
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
                "latitude":48.859830,
                "longitude":2.299310
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
                "latitude": 48.857217,
                "longitude": 2.304304
            },
            price: 40,
            images:["/esgarool.png","/lameloie.jpg","/beger.png"]
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
                "latitude":48.831235,
                "longitude":2.357004
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
                "street": "13 Rue Georges Lebigot",
                "city": " Villejuif",
                "zip_code": 94800,
                "country": "France"
            },
            price: 40,
            images:["/crasong.png","/lameloie.jpg","/crasong.png","/esgarool.png"]
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
                "latitude":48.871689,
                "longitude":2.304850
            },
            price: 40,
            images:["/dish_chinois.jpg","/lameloie.jpg","/beger.png","/crasong.png"]
        };

        events[6]= {
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "23 Voie Coysevox",
                "city": " Vitry-sur-Seine",
                "zip_code": 94400,
                "country": "France",
                "latitude":48.788194,
                "longitude": 2.379185
            },
            price: 40,
            images:["/lameloie.jpg","/beger.png","/crasong.png","/porc-roti.png","/ice-cream.jpg"]
        };


        events[7]={
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "123 Boulevard Maxime Gorki",
                "city": "Villejuif",
                "zip_code": 94800 ,
                "country": "France",
                "latitude":48.792661,
                "longitude":2.370087
            },
            price: 40,
            images:["/poulet-roti.jpg","/beger.png","/crasong.png","/esgarool.png","/dish_chinois.jpg"]
        };

        events[8]={
            title: "Quality Time with Andrew",
            description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
            "of course, unforgettable teaching ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "86 Boulevard Maxime Gorki",
                "city": "Villejuif",
                "zip_code":  94800 ,
                "country": "France",
                "latitude":48.793787,
                "longitude": 2.368857
            },
            price: 40,
            images:["/porc.jpg","/pasta.png","/porc-roti.png","/esgarool.png","/poulet.jpg"]
        };

        events[9]={
            title: "ROMAN HOLIDAYS",
            description: "THE BEST IS COMING AND MEMORABLE EVENINGS TOO!!!!! ENJOY YOUR TIME WITH GREAT COMPANY AND HAPPY PEOPLE WHO LOVE THE LIFE ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "67 Avenue de Stalingrad",
                "city": "Villejuif",
                "zip_code":  94800 ,
                "country": "France",
                "latitude":48.783161,
                "longitude": 2.368070
            },
            price: 40,
            images:["/porc-roti.jpg","/poulet.jpg","/crasong.png","/ice-cream.jpg"]
        };

        events[9]={
            title: "Japanese Time",
            description: "THE BEST IS COMING AND MEMORABLE EVENINGS TOO!!!!! ENJOY YOUR TIME WITH GREAT COMPANY AND HAPPY PEOPLE WHO LOVE THE LIFE ",
            start: new Date(),
            host: '',
            participants: [234,345],
            address: {
                "street": "15 Avenue de Paris",
                "city": "Villejuif",
                "zip_code":  94800 ,
                "country": "France",
                "latitude":48.783161,
                "longitude": 2.368070
            },
            price: 40,
            images:["/Japanese Food.jpg","/porc.jpg","/ice-cream.jpeg","/dish_chinois.jpg"]
        };


        /*console.log(userIds[0]._id);*/
        for (var i=0;i<10;i++){
            events[i].host=userIds[Math.floor(Math.random() * 5)]._id;
            MomFood.Collection.Events.insert(events[i]);
        }


        console.log("***************New entry created: ",MomFood.Collection.Events.find().count());
        console.log("****************");
    }

}

