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

Router.route('/klubowner/livre/:_id', {name: 'adminBookEdit',
      layoutTemplate: 'admin',
      template: 'bookEdit',
      data: function () {return new Library().bookById(this.params._id)}
    })

Router.route('/klubowner/historique', {name: 'adminPastKlubList',
    layoutTemplate: 'admin',
    template: 'pastKlubList'
  })

Router.route('/klubowner/klub/:klubI', {name: 'adminKlubPastEdit',
    layoutTemplate: 'admin',
    template: 'pastKlubEdit',
    data: function () {
      return +this.params.klubI
    }
  })

Router.route('/klub/:klubId', {name: 'detailedPastKlub',
  template: 'detailedPastKlub',
    data: function () {
      return +this.params.klubId
    }
  })

Router.route('/next/:_id', {name: 'detailedNextKlub',
    template: 'detailedNextKlub',
    data: function () {
      return this.params._id
    }
  })

Router.route('/frozen', {name: 'frozen',
    template: 'frozen'
  })
