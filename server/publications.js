Meteor.publish(
    'rewards', function() {
        return Rewards.find();
    }
);

Meteor.publish(
    'images', function() {
        return Images.find();
    }
);

