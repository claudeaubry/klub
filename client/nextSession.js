Template.nextSession.session = function(){
  return Sessions.findOne({statut: "next"});
};

Template.nextSession.club = function(){
  return {place: klubDatas.place, hour: klubDatas.hour, map: klubDatas.map };
};
