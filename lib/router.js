Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('admin', {
    path: '/klubowner',
    template: 'admin'
  });

  this.route('adminNextKlub', {
    path: '/klubowner/nextklub',
    template: 'nextKlubEdit'
  });

  this.route('adminEdit', {
    path: '/klubowner/edit/:klubId',
    template: 'pastKlubEdit',
    data: function () {
      return +this.params.klubId;
    }
  });
});
