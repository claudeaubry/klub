Template.nextSession.helpers({
  next: function () {
    return KSessions.findOne({statut: "next"});
  },
  local: function () {
    return klubLocalDatas;
  }
});
