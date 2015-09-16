Rewards = new Mongo.Collection('rewards');

Rewards.allow({
    insert: function(userId, doc) {
        return !! userId;
    }
});

Rewards.attachSchema(new SimpleSchema({
    name: {
        type: String,
        optional: false
    },
    trophy: {
        type: String,
        optional: true
    },
    earned: {
        type: Boolean,
        optional: false,
        autoValue: function() {
            if(this.isInsert) {
                return false
            }
        }
    },
    userId: {
        type: String,
        optional: false
    }
}));