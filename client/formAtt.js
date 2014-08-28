Template.formAtt.helpers({
  _idSession: function () {
    return Session.get('formLinkIdSession');
  },
  username: function () {
    return  Session.get('formLinkUsername');
  }
});

Template.formAtt.events({
  'submit form': function (event) {
    var link = $("input#linkSubmit").val();
    var username = $("input.username").val();
    var idSession = $("input._idSession").val();
    var sessionTarget = Sessions.findOne(idSession);

    event.preventDefault();
    _.findWhere(sessionTarget.attendees, {username: username}).url = link;
    Sessions.update(sessionTarget._id, sessionTarget);
    $('#modalAttendeeLink').modal('hide');
  }
});