/**
 * Created by Cedric on 01/02/16.
 */
var events1, events2, events3, events4, events5;

if (MomFood.Collection.Events.find().count() === 0){
    console.log("***************Now creating new events***************")
    events1 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };

    events2 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };

    events3 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/lameloie.jpg","/beger.png","/esgarool.png"]
    };

    events4 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/beger.png","/crasong.png","/esgarool.png"]
    };

    events5 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/lameloie.jpg","/crasong.png","/esgarool.png"]
    };

    events6 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/lameloie.jpg","/beger.png","/crasong.png"]
    };

    events7 = {
        title: "Quality Time with Andrew",
        description: "This is going to be an excellent event with Andrew, we are hoping to have nice meals and " +
        "of course, unforgettable teaching ",
        start: new Date(),
        host: 123,
        participants: [234,345],
        address: {
            "street": "3 rue tronchet",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
        images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png","/dish_chinois.jpg"]
    };
    MomFood.Collection.Events.insert(events1);
    MomFood.Collection.Events.insert(events2);
    MomFood.Collection.Events.insert(events3);
    MomFood.Collection.Events.insert(events4);
    MomFood.Collection.Events.insert(events5);
    MomFood.Collection.Events.insert(events6);
    MomFood.Collection.Events.insert(events7);

    console.log("***************New entry created: ",MomFood.Collection.Events.find().count());
    console.log("***************");
}


