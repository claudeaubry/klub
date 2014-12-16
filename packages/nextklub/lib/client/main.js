Meteor.startup(function () {
  Meteor.subscribe("next_klub");
  getNextKlub = function () {
    return NextKlub.findOne();
  }
});
