/**
 * Created by Cedric on 06/01/16.
 */

App = {};



Meteor.startup(function(){

    if (!Meteor.isServer){

        Accounts.ui.config({
            passwordSignupFields:"USERNAME_ONLY"
        });

        window.onscroll = function(){headerScroll()};

        function headerScroll(){
            if (document.body.scrollTop>50|| document.documentElement.scrollTop>50){
                document.getElementById("header").className = "fixed-header";
                console.log(document.getElementById("header").className)
            }else{
                document.getElementById("header").className="";
            }
        }

        //ReactDOM.render(App.index,document.getElementsByTagName("body"))
    }

})
