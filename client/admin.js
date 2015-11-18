Template.admin.events({
  'click .nextKlub': (elt) => {
    Router.go('adminNextKlub');
  },
  'click .createPastKlub': (elt) => {
    Router.go('adminCreate');
  }
});
