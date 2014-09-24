Template.kSession.events = {
  'click .modifyLink': function () {
    var targetKlub = KSessions.findOne(this._id);
    Session.set('formLinkIdSession', this._id);
    $("#linkSubmit").val(targetKlub.url);
    $("#summarySubmit").val(targetKlub.summary);
    $("#attendeesSubmit").val(targetKlub.attendees);
  },
};
