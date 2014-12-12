Template.pastSessions.helpers({
  kSessions: function () {
    return KSessions.find({}, {sort: {i: -1}});
  }
});
