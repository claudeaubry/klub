Template.pastKlub.helpers({
  klub: function () {
    return this;
  }
});

Template.pastKlub.events = {
  'click .modifyLink': function () {
    var targetKlub = PastKlub.findOne(this._id);

    Session.set('formLinkIdSession', this._id);
    $("#linkSubmit").val(targetKlub.url);
    $("#summarySubmit").val(targetKlub.summary);
    $("#attendeesSubmit").val(targetKlub.attendees);
  },
};
