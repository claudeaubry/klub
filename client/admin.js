Template.admin.events({
  'click .nextKlub': function (elt) {
    Router.go('adminNextKlub');
  },
  'click .createPastKlub': function (elt) {
    Router.go('adminCreate');
  }
});
