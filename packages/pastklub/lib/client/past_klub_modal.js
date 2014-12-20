Template.formKM.helpers({
  'klub': function () {
    return PastKlub.findOne(Session.get('formLinkIdKlub'));
  }
});

Template.formKM.events({
  'submit form': function (event) {
    var idKlub = Session.get('formLinkIdKlub');
    var klubTarget = PastKlub.findOne(idKlub);

    event.preventDefault();
    klubTarget.url = $("input#linkSubmit").val();
    klubTarget.summary = $("textarea#summarySubmit").val();
    klubTarget.attendees = $("input#attendeesSubmit").val().split(",");
    klubTarget.presence_author = $("input#presence_author:checked").val();
    PastKlub.update(klubTarget._id, klubTarget);
    $('#modalKlubMaster').modal('hide');
    Session.set('formLinkIdKlub', '');
  }
});
