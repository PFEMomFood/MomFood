
var events1,  events2, events3, events4, events5,events6, events7, events8, events9;

if (MomFood.Collection.Events.find().count() === 0){
    console.log("***************Now creating new events***************")
    events1 = {
        title: "Special Chicken Swing",
        description: "Very tasty fried chicken swing and also Special suace. You can see all the process and details for making this dishes",
        start: new Date(),
        host: 13,
        participants: [14,5],
        address: {
            "street": "3 Rue de téhéran ",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };

    events2 = {
        title: "Chinese Noodles",
        description: "Have you ever want to have a taste on Chinese style cuisine and Have you ever want to try a different flavour about noodles? If do, this event is for you. ",
        start: new Date(),
        host: 12,
        participants: [14,1],
        address: {
            "street": "16 rue Claude Bernard ",
            "city": "Paris",
            "zip_code": 75005,
            "country": "France"
        },
        price: 50,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };


    events3 = {
          title: "Fish Filets in Hot Chili Oil",
        description: " This is a very famous traditional Sichuan food, the fish with spicy will give you a totally different feeling for fishes  ",
        start: new Date(),
        host: 15,
        participants: [11,12],
        address: {
            "street": " 19 boulevard du parc ",
            "city": "Neuilly-sur-Seine ",
            "zip_code":92051 ,
            "country": "France"
        },
        price: 40,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };


    events4 = {
          title: "Authentic Italy Cheese Pizza",
        description: "  ",
        start: new Date(),
        host: 11,
        participants: [13,11],
        address: {
            "street": " ",
            "city": "Paris",
            "zip_code": 75008,
            "country": "France"
        },
        price: 40,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };


    events5 = {
        title: "Sushi for you",
        description: " If you are passionate about cooking Japanese food, this event is for you. Don't hestate and come! ",
        start: new Date(),
        host: 4,
        participants: [14,5],
        address: {
            "street": "36 Rue de l'Arbalète ",
            "city": "Paris",
            "zip_code": 75005,
            "country": "France"
        },
        price: 37,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };


    events6 = {
         title: "Sweet and Sour Spareribs",
        description: "This is a traditional Chinese food which cook spareribs with sugar and vinegar, if you like sweet and sour, join us!  ",
        start: new Date(),
        host: 3,
        participants: [14,5],
        address: {
            "street": "31 Avenue Jean Moulin ",
            "city": "Torcy",
            "zip_code": 77200,
            "country": "France"
        },
        price: 45,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };

  
    events7 = {
         title: " desert",
        description: "If you want to make the desert youself at home but have no idea how to make it ? In this event , I will show you the whole process ",
        start: new Date(),
        host: 10,
        participants: [4,7],
        address: {
            "street": " 6 Rue Alfred de Musset  ",
            "city": "Villejiuf ",
            "zip_code": 94800  ,
            "country": "France"
        },
        price: 30,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };
      events8 = {
         title: "The sauce ribs you never taste ",
        description: " This dish is created by myself and with a experience as the cook for ten years, I know the secret of cooking and hope to communicate with you. ",
        start: new Date(),
        host: 15,
        participants: [4,9],
        address: {
            "street": " 11bis Rue Edmond Michelet",
            "city": "Le Kremlin-Bicêtre",
            "zip_code":94270  ,
            "country": "France"
        },
        price: 55,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };
      events9 = {
         title: " Have fun with Lobsetr ",
        description: "In this event, I will show you the process of making seefood especially the lobster, have fun with the process and also the decicious food.  ",
        start: new Date(),
        host: 1,
        participants: [7,9],
        address: {
            "street": "166 Avenue d'Italie  ",
            "city": "Paris",
            "zip_code": 75013  ,
            "country": "France"
        },
        price: 40,
		images:["/lameloie.jpg","/beger.png","/crasong.png","/esgarool.png"]
    };

    MomFood.Collection.Events.insert(events1);
    MomFood.Collection.Events.insert(events2);
    MomFood.Collection.Events.insert(events3);
    MomFood.Collection.Events.insert(events4);
    MomFood.Collection.Events.insert(events5);
    MomFood.Collection.Events.insert(events6);
    MomFood.Collection.Events.insert(events7);
    MomFood.Collection.Events.insert(events8);
    MomFood.Collection.Events.insert(events9);

    console.log("***************New entry created: ",MomFood.Collection.Events.find().count());
    console.log("***************");
}