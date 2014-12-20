Template.pastKlub.helpers({
  klub: function () {
    return this;
  }
});

Template.pastKlub.events = {
  'click .modifyLink': function () {
    Session.set('formLinkIdKlub', this._id);
  }
};
