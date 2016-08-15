Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', {name: 'home',
	template: 'home'
})

Router.route('/klubowner', {name: 'admin',
    layoutTemplate: 'admin',
    template: 'adminnextKLubs'
  })

Router.route('/klubowner/prochain', {name: 'adminNextKlub',
      layoutTemplate: 'admin',
      template: 'adminnextKLubs'
    })

Router.route('/klubowner/local', {name: 'adminLocalData',
      layoutTemplate: 'admin',
      template: 'LocalDataEdit'
    })

Router.route('/klubowner/livres', {name: 'adminBookList',
      layoutTemplate: 'admin',
      template: 'bookList'
    })

Router.route('/klubowner/livre/:bookId', {name: 'adminBookEdit',
      template: 'bookEdit',
      data: function () {
        return this.params.bookId
      }
    })

Router.route('/klubowner/historique', {name: 'adminPastKlubList',
    layoutTemplate: 'admin',
    template: 'pastKlubList'
  })

Router.route('/klubowner/klub/:klubId', {name: 'adminKlubPastEdit',
    layoutTemplate: 'admin',
    template: 'pastKlubEdit',
    data: function () {
      return +this.params.klubId
    }
  })

Router.route('/klub/:klubId', {name: 'detailedPastKlub',
  template: 'detailedPastKlub',
    data: function () {
      return +this.params.klubId
    }
  })

Router.route('/next/:klubId', {name: 'detailedNextKlub',
    template: 'detailedNextKlub',
    data: function () {
      return this.params.klubId
    }
  })

Router.route('/frozen/', {name: 'frozen',
    template: 'frozen'
  })
