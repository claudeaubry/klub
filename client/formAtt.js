Template.formAtt.helpers({
  attName: function () {
    return Session.get('formLinkUsername');
  }
});

Template.formAtt.events({
  'submit form': function (event) {
    var link = $("input#linkSubmit").val();
    var idSession = Session.get('formLinkIdSession');
    var sessionTarget = KSessions.findOne(idSession);

    event.preventDefault();
    sessionTarget.url = link;
//    _.findWhere(sessionTarget.attendees, {username: username}).url = link;
    KSessions.update(sessionTarget._id, sessionTarget);

//    KSessions.update(idSession, (url: link);

    $('#modalAttendeeLink').modal('hide');
  }
});
