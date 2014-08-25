Template.nextSession.session = function(){
  return Sessions.findOne({statut: "next"});
};

Template.nextSession.club = function(){
  return klubLocalDatas;
};
