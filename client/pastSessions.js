Template.pastSessions.sessions = function(){
  return KSessions.find({statut: "past"}, {sort: {i: -1}});
};
Template.pastSessions.events = {

  'click .modifyLink': function () {
    var targetKlub = KSessions.findOne(this._id);
    Session.set('formLinkIdSession', this._id);
    $("#linkSubmit").val(targetKlub.url);
  },

};
