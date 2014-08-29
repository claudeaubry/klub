Template.formAtt.helpers({
  attName: function () {
    return Session.get('formLinkUsername');
  }
});

Template.formAtt.events({
  'submit form': function (event) {
    var link = $("input#linkSubmit").val();
    var username = Session.get('formLinkUsername');
    var idSession = Session.get('formLinkIdSession');
    var sessionTarget = Sessions.findOne(idSession);

    event.preventDefault();
    _.findWhere(sessionTarget.attendees, {username: username}).url = link;
    Sessions.update(sessionTarget._id, sessionTarget);
    $('#modalAttendeeLink').modal('hide');
  }
});
