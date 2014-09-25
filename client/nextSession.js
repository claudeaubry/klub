Template.nextSession.next = function () {
  return KSessions.findOne({statut: "next"});
};

Template.nextSession.local = function () {
  return klubLocalDatas;
};
