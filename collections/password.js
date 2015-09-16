Password = new Mongo.Collection('password');

Password.attachSchema(new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    password: {
        type: String,
        optional: false
    }
}));