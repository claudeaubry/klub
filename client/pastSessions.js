Template.pastSessions.kSessions = function () {
  return KSessions.find({statut: "past"}, {sort: {i: -1}});
};
