Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'main'
  });
  this.route('admin', {
    path: '/admin',
    template: 'ksList',
    onBeforeAction: function () {
      if (! Meteor.user()) {
        this.redirect('home');
      }
    }
  });
  this.route('adminCreate', {
    path: '/admin/create',
    template: 'ksEdit',
    data: {}
  });
  this.route('adminEdit', {
    path: '/admin/edit/:ks',
    template: 'ksEdit',
    data: function () {
      return KSessions.findOne({i: +this.params.ks}); }
  });
});
