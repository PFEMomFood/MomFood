/**
 * Created by Cedric on 01/02/16.
 */
MomFood.Collection.Events = new Mongo.Collection("events");



Schemas.Address = new SimpleSchema({
    street: {
        type: String,
        max: 100
    },
    city: {
        type: String,
        max: 100
    },
    state: {
        type: String,
        max: 100,
        optional: true
    },
    zip_code: {
        type: String,
        regEx: /^[0-9]{5}$/
    },
    country: {
        type: String
    },
    latitude:{
        type: Number,
        label: "latitude",
        decimal: true,
        optional: true
    },
    longitude:{
        type: Number,
        label: "longitude",
        decimal: true,
        optional: true
    }
})

Schemas.Events = new SimpleSchema({
    title:{
        type: String,
        label: "Title",
        max: 200
    },
    description:{
        type: String,
        label: "Description"
    },
    start: {
        type: Date,
        label: "Start date of the event"
    },
    host: {
        type: Number,

    },
    participants: {
        type:[Schemas.Users],
        optional: true
    },
    address: {
        type: Schemas.Address,
        label: "Address"
    },
    price: {
        type: Number,
        label: "Price for an event"
    },
    images:{
        type:[String],
        label: "event images"
    }
});

MomFood.Collection.Events.attachSchema(Schemas.Events);