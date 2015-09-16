Template.layout.helpers({
    pageTitle: function() { return Session.get('pageTitle'); }
});

Template.layout.events({
    'hidden.bs.modal #ididit-modal' : function() {
        Session.set('pwErr', null);
    }
});