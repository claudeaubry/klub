Template.session.sessions = function(){
  return Sessions.find({statut: "past"});
};
Template.session.events = {

  'click .modifyLink': function () {

    $("#linkSubmit").val("");


  },

};
