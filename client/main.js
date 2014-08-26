Meteor.startup(function () {
  $('body').scrollspy({target: '.navbar-default'});
  document.title = klubLocalDatas.title;
});
