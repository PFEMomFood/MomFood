/**
 * Created by Emily on 17/02/16.
 */
/**
 * Created by Cedric on 01/02/16.
 */
var host1,host2,host3,host4,host5;

if (Meteor.users.find().count() === 0){
    console.log("***************Now creating new hosts***************");
    host1 = {
        username:"y?",
        email:"illusion_ever@gmail.com",
        profile: {
            firstName:"Cédric",
            lastName: "YANG",
            gender:'Male',
            country:'China',
            description:'Bonjour! Since I was a girl, I’ve dreamed of all things French:' +
            ' the fashion, the art, the history, but most of all the food. To uncover the magic ' +
            'of French cuisine, I recently traveled for six months throughout France, determined to' +
            ' discover and bring home a bit of that je ne sais quoi in French cuisine. I studied under Susan' +
            ' Herrmann Loomis, one of the most renowned authorities on French cooking. While living in Susan’s' +
            ' 14th-century home for a month, I assisted her with tastings and dinner parties and helped test' +
            ' recipes for her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote' +
            ' and the lesson I learned). Outside a French village, I harvested and sold produce at the farmers market' +
            ' with Baptiste, an organic farmer, who delivers vegetables and fruit daily to Michelin-starred restaurants.'
        }
    };
    host2 = {
        username:"Emilyroo",
        email:"ybb.emily@gmail.com",
        profile: {
            firstName:"Amélie",
            lastName: "Yan",
            gender:'Female',
            country:'Malta',
            description:'Bonjour! Since I was a girl, I’ve dreamed of all things French:' +
            ' the fashion, the art, the history, but most of all the food. To uncover the magic ' +
            'of French cuisine, I recently traveled for six months throughout France, determined to' +
            ' discover and bring home a bit of that je ne sais quoi in French cuisine. I studied under Susan' +
            ' Herrmann Loomis, one of the most renowned authorities on French cooking. While living in Susan’s' +
            ' 14th-century home for a month, I assisted her with tastings and dinner parties and helped test' +
            ' recipes for her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote' +
            ' and the lesson I learned). Outside a French village, I harvested and sold produce at the farmers market' +
            ' with Baptiste, an organic farmer, who delivers vegetables and fruit daily to Michelin-starred restaurants.'

        }
    };
    host3 = {
        username:"cookie_fun",
        email:"bingbing_yan@gmail.com",
        profile: {
            firstName:"Selina",
            lastName: "Xu",
            gender:'Female',
            country:'Japon',
            description:'Bonjour! Since I was a girl, I’ve dreamed of all things French:' +
            ' the fashion, the art, the history, but most of all the food. To uncover the magic ' +
            'of French cuisine, I recently traveled for six months throughout France, determined to' +
            ' discover and bring home a bit of that je ne sais quoi in French cuisine. I studied under Susan' +
            ' Herrmann Loomis, one of the most renowned authorities on French cooking. While living in Susan’s' +
            ' 14th-century home for a month, I assisted her with tastings and dinner parties and helped test' +
            ' recipes for her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote' +
            ' and the lesson I learned). Outside a French village, I harvested and sold produce at the farmers market' +
            ' with Baptiste, an organic farmer, who delivers vegetables and fruit daily to Michelin-starred restaurants.'
        }
    };
    host4 = {
        username:"whynot",
        email:"illusion_forever@gmail.com",
        profile: {
            firstName:"Andrew",
            lastName: "Ollivier",
            gender:'Male',
            country:'Gozo',
            description:'Bonjour! Since I was a girl, I’ve dreamed of all things French:' +
            ' the fashion, the art, the history, but most of all the food. To uncover the magic ' +
            'of French cuisine, I recently traveled for six months throughout France, determined to' +
            ' discover and bring home a bit of that je ne sais quoi in French cuisine. I studied under Susan' +
            ' Herrmann Loomis, one of the most renowned authorities on French cooking. While living in Susan’s' +
            ' 14th-century home for a month, I assisted her with tastings and dinner parties and helped test' +
            ' recipes for her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote' +
            ' and the lesson I learned). Outside a French village, I harvested and sold produce at the farmers market' +
            ' with Baptiste, an organic farmer, who delivers vegetables and fruit daily to Michelin-starred restaurants.'

        }
    };
    host5 = {
        username:"riendire",
        email:"illusion_never@gmail.com",
        profile: {
            firstName:"Zac",
            lastName: "YANG",
            gender:'Male',
            country:'JinTang',
            description:'Bonjour! Since I was a girl, I’ve dreamed of all things French:' +
            ' the fashion, the art, the history, but most of all the food. To uncover the magic ' +
            'of French cuisine, I recently traveled for six months throughout France, determined to' +
            ' discover and bring home a bit of that je ne sais quoi in French cuisine. I studied under Susan' +
            ' Herrmann Loomis, one of the most renowned authorities on French cooking. While living in Susan’s' +
            ' 14th-century home for a month, I assisted her with tastings and dinner parties and helped test' +
            ' recipes for her upcoming book, In a French Kitchen (ask me about the time I burned the apple compote' +
            ' and the lesson I learned). Outside a French village, I harvested and sold produce at the farmers market' +
            ' with Baptiste, an organic farmer, who delivers vegetables and fruit daily to Michelin-starred restaurants.'

        }
    };

    Meteor.users.insert(host1);
    Meteor.users.insert(host2);
    Meteor.users.insert(host3);
    Meteor.users.insert(host4);
    Meteor.users.insert(host5);
    console.log("***************New entry created: ",Meteor.users.find().count());
    console.log("***************");
}


