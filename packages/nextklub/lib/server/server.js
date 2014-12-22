Meteor.startup(function () {
  if  (! NextKlub.find().count()) {
    NextKlub.insert({});
  }

  Meteor.publish("next_klub", function() {
    return NextKlub.find();
  });
});
