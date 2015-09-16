Template.ididitForm.helpers({
    passwordError: function(){
        var err = Session.get('pwErr');
        if(err !== null) {
            return err;
        }
    }
});

Template.ididitForm.events({
    'submit .enterPassword' : function(event) {
        event.preventDefault();

        var inputText = event.target.attemptedPW.value;
        var selectedReward = Session.get('selectedReward'); //object

        Meteor.call('comparePW', inputText, function(err, res) {

            if (res === true && selectedReward.earned === false) {

                Meteor.call('setEarned', selectedReward._id, selectedReward.name, true, function() {
                    Meteor.defer(function() {
                        blur();
                    });
                });

                event.target.attemptedPW.value = "";
                Session.set('pwErr', null);
                $('#ididit-modal').closeModal();

            } else if (res === true && selectedReward.earned === true){
                Meteor.call('setEarned', selectedReward._id, selectedReward.name, false, function() {
                    Meteor.defer(function() {
                        blur();
                    });
                });

                event.target.attemptedPW.value = "";
                Session.set('pwErr', null);
                $('#ididit-modal').closeModal();

            } else if (res !== true) {
                event.target.attemptedPW.value = "";
                Session.set('pwErr', res);
            }
        });
    }
});