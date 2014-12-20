Template.formKM.events({
  'submit form': function (event) {
    var idSession = Session.get('formLinkIdSession');
    var sessionTarget = PastKlub.findOne(idSession);
    event.preventDefault();
    sessionTarget.url = $("input#linkSubmit").val();
    sessionTarget.summary = $("textarea#summarySubmit").val();
    sessionTarget.attendees = $("input#attendeesSubmit").val().split(",");
    PastKlub.update(sessionTarget._id, sessionTarget);
    $('#modalKlubMaster').modal('hide');
  }
});
