/**
 * Created by Cedric on 01/02/16.
 */

Schemas.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}&/
    }
});

Schemas.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male','Female'],
        optional: true
    },
    organization: {
        type: String,
        optional: true
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: Schemas.UserCountry,
        optional: true
    }



})

Schemas.Users = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object,
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$verified":{
        type: Boolean
    },
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date,
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: String,
        optional: true
    },
    heartbeat: {
        type: Date,
        optional: true
    }
})