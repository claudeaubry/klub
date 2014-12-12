Template.pastSessionsDisplay.helpers({
  pastSessions: function () {
    return KSessions.find({}, {sort: {i: -1}});
  }
});
