Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'main'
  });
  this.route('admin', {
    path: '/admin566',
    template: 'ksList'
  });
  this.route('adminCreate', {
    path: '/admin566/create',
    template: 'ksEdit',
    data: {}
  });
  this.route('adminEdit', {
    path: '/admin566/edit/:ks',
    template: 'ksEdit',
    data: function () {
      return KSessions.findOne({i: this.params.ks}); }
  });
});
