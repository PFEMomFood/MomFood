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
        price: 40
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
        price: 40
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
        price: 40
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
        price: 40
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
        price: 40
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
        price: 40
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
        price: 40
    }
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


