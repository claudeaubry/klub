Template.formAtt.events({
  'submit formAtt': function (event) {
//    var _id = $("#_idSubmit").val();
    var link = $("input#linkSubmit").val();


    event.preventDefault();

      Sessions.update(_id, { attendees : link });

    $('#myAttModal').modal('hide');
  }
});
