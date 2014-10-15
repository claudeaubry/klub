Template.nav.helpers({
  titleClub: function () {
    return klubLocalDatas.title;
  },
  isUser: function () {
    return Meteor.user();
  }
});
