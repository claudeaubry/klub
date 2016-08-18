Template.frozen.helpers({
  typeKlub: function() { return Session.get('typeKlub')},
  lecture: function() { return Session.get('typeKlub') === 'lecture' },
  jeu: function() { return Session.get('typeKlub') === 'jeu' },
  scribing: function() { return Session.get('typeKlub') === 'scribing' },
  books: () => Books.find({type: 'book', statut: 'frozen'}),
  games: () => Books.find({type: 'game', statut: 'frozen'}),
  videos: () => Books.find({type: 'video', statut: 'frozen'})
})

Template.itemFrozen.events({
  'click .repeat': function (elt) {
    const book = new Library().bookById(this._id)

    elt.preventDefault()
    book.statut = 'proposed'
    Books.update(this._id, book)
  }
})
