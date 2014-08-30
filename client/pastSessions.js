Template.pastSessions.sessions = function(){
  return KSessions.find({statut: "past"}, {sort: {i: -1}});
};
Template.pastSessions.events = {

  'click .modifyLink': function () {
    Session.set('formLinkIdSession', this._idSession);
    Session.set('formLinkUsername', this.username);
    $("#linkSubmit").val("");
  },

};
