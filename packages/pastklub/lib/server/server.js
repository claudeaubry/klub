Meteor.startup(function () {
  Meteor.publish("all_past_klub", function() {
    return PastKlub.find();
  });
});
