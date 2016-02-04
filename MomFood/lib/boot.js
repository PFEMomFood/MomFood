/**
 * Created by Cedric on 06/01/16.
 */

App = {};



Meteor.startup(function(){


    /*Accounts.loginServiceConfiguration.remove({
        service: "google"
    });

    Accounts.loginServiceConfiguration.insert({
        service: "google",
        clientId: "726709881035-2c44o2ar386ttbvbrvlp8786oincovmn.apps.googleusercontent.com",
        secret: "kOQgCrff_cst54crZzLUt1Av"
    });

    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "facebook",
        loginStyle: "popup",
        appId: "757885897677689",
        secret: "52d234e2c04333bc672bdd48328cd73c"
    });*/

    if (!Meteor.isServer){
        window.onscroll = function headerScroll(){
               if (document.body.scrollTop>50|| document.documentElement.scrollTop>50){
                   document.getElementById("header").className = "fixed-header";
                   console.log(document.getElementById("header").className)
               }else{
                   document.getElementById("header").className="";
               }

        };






        /*Accounts.ui.config({
            passwordSignupFields:"USERNAME_ONLY"
        });*/


        //ReactDOM.render(App.index,document.getElementsByTagName("body"))
    }

})
