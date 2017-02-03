Template.itemli.events({
  'click .editBook': function(elt) {
    elt.preventDefault()
    Session.set('selectedBookId', this._id)
  },
  'click .frozeBook': function (elt) {
    const book = new Library().bookById(this._id)

    elt.preventDefault()
    book.statut = 'frozen'
    Books.update(this._id, book)
  }

})
