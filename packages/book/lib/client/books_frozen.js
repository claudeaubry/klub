Template.booksFrozen.helpers({
  books: () => Books.find({type: 'book', statut: 'frozen'}),
  games: () => Books.find({type: 'game', statut: 'frozen'})
})

Template.booksFrozen.events({
  'click .repeat': function (elt) {
    const book = new Library().bookById(this._id)

    elt.preventDefault()
    book.statut = 'proposed'
    Books.update(this._id, book)
  }
})
