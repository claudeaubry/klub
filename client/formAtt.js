Template.formAtt.events({
  'submit form': function (event) {
//    var _id = $("#_idSubmit").val();
    var link = $("input#linkSubmit").val();


    event.preventDefault();
    $('#myAttModal').modal('hide');

      Sessions.update(_id, { attendees : link });

    
  }
});
