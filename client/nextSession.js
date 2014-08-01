Template.nextSession.session = function(){
  return Sessions.findOne({statut: "next"});
};
