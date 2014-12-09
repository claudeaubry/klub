Meteor.startup(function () {
  Meteor.publish("next_klub", function() {
    return NextKlub.findOne();
  });
});
