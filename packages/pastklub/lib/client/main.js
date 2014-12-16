Meteor.startup(function () {
  Meteor.subscribe("all_past_klub");
  PastKlub.find().fetch();
});
