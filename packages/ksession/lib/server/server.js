Meteor.startup(function () {
  Meteor.publish("all_ksessions", function() {
    return KSessions.find();
  });
});
