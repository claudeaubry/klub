Meteor.startup(function () {
  Meteor.subscribe("all_ksessions");
  KSessions.find().fetch();
});
