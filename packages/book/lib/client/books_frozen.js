Template.booksFrozen.helpers({
  titles: () => Books.find({statut: 'frozen'})
})

Template.booksFrozen.events({
  'click .repeat': function (elt) {
    const book = new Library().bookById(this._id)

    elt.preventDefault()
    book.statut = 'proposed'
    Books.update(this._id, book)
  }
})
