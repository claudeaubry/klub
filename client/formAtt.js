Template.formAtt.events({
  'submit formAtt': function (event) {
    var link = $("input#linkSubmit").val();


    event.preventDefault();

      Sessions.update(_id, {
        attendees : link
      });

    $('#myAttModal').modal('hide');
  }
});
