Template.rewardsList.helpers({
    rewards: function(){

        return Rewards.find();
    }
});

Template.rewardsList.onRendered(function() {

});