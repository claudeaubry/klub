Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'main'
  });
  this.route('admin', {
    path: '/klubowner',
    template: 'ksList'
  });
  this.route('adminCreate', {
    path: '/klubowner/create',
    template: 'ksEdit',
    data: {}
  });
  this.route('adminEdit', {
    path: '/klubowner/edit/:ks',
    template: 'ksEdit',
    data: function () {
      return KSessions.findOne({i: +this.params.ks});
    }
  });
});
