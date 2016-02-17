/**
 * Created by Emily on 04/02/16.
 */
ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: "726709881035-2c44o2ar386ttbvbrvlp8786oincovmn.apps.googleusercontent.com",
            secret: "kOQgCrff_cst54crZzLUt1Av"
        }
    }
);
ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
        $set: {
            loginStyle: "popup",
            appId: "757885897677689",
            secret: "52d234e2c04333bc672bdd48328cd73c"
        }
    }
);

