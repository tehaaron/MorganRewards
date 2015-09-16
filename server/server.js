//if (Rewards.find().count() === 0) {
//    Rewards.insert({
//        name: "Weed the backyard",
//        trophy: "/images/lemonhearts.jpg",
//        earned: false
//    });
//
//    Rewards.insert({
//        name: "3 Perfect Spelling Tests",
//        trophy: "/images/fizzypop.jpg",
//        earned: false
//    });
//
//    Rewards.insert({
//        name: "Keep room clean for a week",
//        trophy: "/images/pinkiepie.jpg",
//        earned: false
//    });
//}

if (Password.find({name: 'ParentPassword'}).count() === 0) {
    Password.insert({
        name: "ParentPassword",
        password: ""
    })
}

var PW = "";

var getPW = function() {
    var x = Password.find({name: 'ParentPassword'}).fetch();
    if (x[0].password === "") {
        PW = "";
    } else {
        PW = x[0].password;
    }
};

Meteor.methods({
   comparePW: function(attemptedPW) {
       getPW();

       if (attemptedPW === PW && PW !== "" && PW !== null) {
           return true;
       } else {
           return "Incorrect Password";
       }
   },
   setPW: function(currentPW) {
       getPW();
       if(PW === "") {
           Password.update(
               {name: 'ParentPassword'},
               { $set: {
                   password : currentPW
               }
               }, {upsert: true}
           );
           PW = currentPW;
           console.log("Set: "+PW);
           return true;
       } else {
           console.log("Not set, already: "+PW);
           return "Error, password already set.";
       }
   },
    setEarned: function(id, name, earned) {
        Rewards.update(
            {_id: id},
            {
                $set: {
                    name: name,
                    earned: earned
                }
            }
        );
    }
});

Meteor.startup(function() {

});