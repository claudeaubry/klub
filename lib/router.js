Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('admin', {
    path: '/klubowner',
    layoutTemplate: 'admin',
    template: 'pastKlubList'
  });

  this.route('adminNextKlub', {
    path: '/klubowner/prochain',
    layoutTemplate: 'admin',
    template: 'nextKlubEdit'
  });

  this.route('adminBookList', {
    path: '/klubowner/livres',
    layoutTemplate: 'admin',
    template: 'bookList'
  });

  this.route('adminBookEdit', {
    path: '/klubowner/livre/:bookId',
    layoutTemplate: 'admin',
    template: 'bookEdit',
    data: function () {
      return this.params.bookId;
    }
  });

  this.route('adminPastKlubList', {
    path: '/klubowner/historique',
    layoutTemplate: 'admin',
    template: 'pastKlubList'
  });

  this.route('adminKlubPastEdit', {
    path: '/klubowner/klub/:klubId',
    layoutTemplate: 'admin',
    template: 'pastKlubEdit',
    data: function () {
      return +this.params.klubId;
    }
  });
});
