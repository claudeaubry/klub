Template.formKM.events({
  'submit form': function (event) {
    var idSession = Session.get('formLinkIdSession');
    var sessionTarget = KSessions.findOne(idSession);
    event.preventDefault();
    sessionTarget.url = $("input#linkSubmit").val();
    sessionTarget.summary = $("input#summarySubmit").val();
    sessionTarget.attendees = $("input#attendeesSubmit").val().split(",");
    KSessions.update(sessionTarget._id, sessionTarget);
    $('#modalKlubMaster').modal('hide');
  }
});
