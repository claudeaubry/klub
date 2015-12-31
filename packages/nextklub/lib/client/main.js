Meteor.startup(function () {
  Meteor.subscribe("next_klub");
  getNextKlub = () => NextKlub.findOne()
});
