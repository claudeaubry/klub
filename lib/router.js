Router.map(function () {
  this.route('klub', {
    path: '/',
    template: 'klub'
  });
  this.route('next', {
    path: '/futur_session',
    template: 'nextSession'
  });
  this.route('past', {
    path: '/sessions_precedentes',
    template: 'pastSessions'
  });
  this.route('prop', {
    path: '/prochaine_lecture',
    template: 'proposal'
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
      return KSessions.findOne({i: +this.params.ks}); }
  });
  this.route('404', {
    path: '/*',
    template: '404'
  });
});
