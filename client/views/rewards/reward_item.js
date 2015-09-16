Template.rewardItem.helpers({
    image: function() {
        return Images.findOne({"_id" : this.trophy});
    },
    isEarned : function() {
        if(this.earned === true) {
            return 1;
        }
    }
});

Template.rewardItem.events({
    'click .ididthis' : function() {
        Session.set('selectedReward', this);
        $('#ididit-modal').openModal();
    },
    'click .noyoudidnt' : function() {
        Session.set('selectedReward', this);
        $('#ididit-modal').openModal();
    }
});

Template.rewardItem.onRendered(function() {
    blur();
});

