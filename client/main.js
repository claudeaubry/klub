Meteor.startup(function () {
  document.title = klubLocalDatas.title;
  Meteor.subscribe("all_books");
  Meteor.subscribe("all_ksessions");
});
