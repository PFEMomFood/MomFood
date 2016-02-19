 
var users1, users2, users3, users4, users5,users6, users7,  users8, users9, users10,users11, users12, users13, users14, users15 ;

if (Meteor.users.find().count() === 0){
    console.log("***************Now creating new users***************")
    users1 = {
        username: "Jean",
        createdAt: new Date(),
        profile: {
            "firstName":"Jean",
            "lastName": "Brown",
            "gender": "Male",
        },
    };

    users2 = {
        username: "Abel",
        createdAt: new Date(),
        profile: {
            "firstName":"Abel",
            "lastName": "Wood",
            "gender": "Female",
        },
    };

    users3 ={
        username: " Antony",
        createdAt: new Date(),
        profile: {
            "firstName":"Antony",
            "lastName": "Cook",
            "gender": "Male",
        },
    };

    users4 = {
        username: "Brandon",
        createdAt: new Date(),
        profile: {
            "firstName":"Brandon",
            "lastName": "Brook",
            "gender": "Male",
        },
    };

    users5 = {
        username: "Chester",
        createdAt: new Date(),
        profile: {
            "firstName":"Chester",
            "lastName": "Smith",
            "gender": "Male",
        },
    };

    users6 = {
        username: "Dave",
        createdAt: new Date(),
        profile: {
            "firstName":"Dave",
            "lastName": "Henry",
            "gender": "Male",
        },
    };
    users7 = {
        username: "Elton",
        createdAt: new Date(),
        profile: {
            "firstName":"Elton",
            "lastName": "Bush",
            "gender": "Female",
        },
    };
	  users8 = {
        username: "Theo",
        createdAt: new Date(),
        profile: {
            "firstName":"Theo",
            "lastName": "Capita",
            "gender": "Male",
        },
    };
	  users9 = {
        username: "Mandar",
        createdAt: new Date(),
        profile: {
            "firstName":"Mnadar",
            "lastName": "Chartlie",
            "gender": "Male",
        },
    };
	  users10 = {
        username: "Jenney",
        createdAt: new Date(),
        profile: {
            "firstName":"Jenney",
            "lastName": "Bush",
            "gender": "Female",
        },
    };
	  users11 = {
        username: "Tom",
        createdAt: new Date(),
        profile: {
            "firstName":"Tom",
            "lastName": "Bush",
            "gender": "Male",
        },
    };
	  users12 = {
        username: "Catherine",
        createdAt: new Date(),
        profile: {
            "firstName":"Catherine",
            "lastName": "Geoge",
            "gender": "Female",
        },
    };
	  users13 = {
        username: "Cloude",
        createdAt: new Date(),
        profile: {
            "firstName":"Cloude",
            "lastName": "Wood",
            "gender": "Male",
        },
    };
	  users14 = {
        username: "Ben",
        createdAt: new Date(),
        profile: {
            "firstName":"Ben",
            "lastName": "Chart",
            "gender": "Female",
        },
    };
	  users15 = {
        username: "Alice",
        createdAt: new Date(),
        profile: {
            "firstName":"Alice",
            "lastName": "Tati",
            "gender": "Female",
        },
    };
    Meteor.users.insert(users1);
    Meteor.users.insert(users2);
    Meteor.users.insert(users3);
    Meteor.users.insert(users4);
    Meteor.users.insert(users5);
    Meteor.users.insert(users6);
    Meteor.users.insert(users7);
    Meteor.users.insert(users8);
    Meteor.users.insert(users9);
    Meteor.users.insert(users10);
    Meteor.users.insert(users11);
    Meteor.users.insert(users12);
    Meteor.users.insert(users13);
    Meteor.users.insert(users14);
    Meteor.users.insert(users15);
   
    console.log("***************New entry created: ", Meteor.users.find().count());
    console.log("***************");
}