Meteor.startup(function () {
  if (NextKlub.findOne() === undefined) {
    NextKlub.insert({});
  }

  Meteor.publish("next_klub", function() {
    return NextKlub.find();
  });
});
