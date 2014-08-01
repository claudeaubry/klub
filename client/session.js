Template.session.sessions = function(){
  return Sessions.find({statut: "past"});
};
