Template.passwordForm.events({
   'submit .setPassword' : function(event) {
       event.preventDefault();

       var inputText = event.target.inputText.value;

       Meteor.call('setPW', inputText, function(err, res) {
           if (res !== true) {
               Session.set('setPWErr', res);
           } else {
               alert('Password has been set.');
           }
       });

       event.target.inputText.value = "";
   }
});

Template.passwordForm.helpers({
    passwordSetError: function(){
        var err = Session.get('setPWErr');
        if(err !== null) {
            return err;
        }
    }
});