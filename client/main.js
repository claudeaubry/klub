Meteor.startup(function () {
  $('body').scrollspy({target: '.navbar-default'});
  document.title = klubLocalDatas.title;

  Meteor.subscribe("all_books");
  Meteor.subscribe("all_ksessions");
  Meteor.subscribe("all_users");
});
