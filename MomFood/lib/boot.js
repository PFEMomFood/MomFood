/**
 * Created by Cedric on 06/01/16.
 */

App = {};



Meteor.startup(function(){

    if (!Meteor.isServer){
        Accounts.loginServiceConfiguration.remove({
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
        });
        /*function getUserInfo(accessToken){
            let result =HTTP.get('http://api.')
        }
        Accounts.onCreateUser((option,user)=>{
                user.profile=getUserInfo(user.services.facebook.accessToken);
                user.login=user.profile.login;
                user.email=user.profile.email;
                return user;
            }
        );
        Accounts.onLogin((loginInfo)=>{
            let user=loginInfo.user;
            let accessToken=user.services.github.accessToken;
            let userInfo = getUserInfo(accessToken);
            Meteor.users.update({_id:user._id},
                {
                    $set: {
                        profile:userInfo,
                        login:userInfo.login,
                        email:userInfo.email
                    }
                });
        });*/
        /*Accounts.ui.config({
            passwordSignupFields:"USERNAME_ONLY"
        });*/

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
