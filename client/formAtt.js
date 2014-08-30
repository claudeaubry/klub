Template.formKM.helpers({
  idS: function () {
    return Session.get('formLinkIdSession');
  }
});

Template.formKM.events({
  'submit form': function (event) {
    var idSession = Session.get('formLinkIdSession');
    var sessionTarget = KSessions.findOne(idSession);

    event.preventDefault();
    sessionTarget.url = $("input#linkSubmit").val();
    sessionTarget.summary = $("input#summarySubmit").val();
//    _.findWhere(sessionTarget.attendees, {username: username}).url = link;
    KSessions.update(sessionTarget._id, sessionTarget);

    $('#modalAttendeeLink').modal('hide');
  }
});
