Template.itemEdit.events({
  'submit form': elt => {
    const _id = $('input.bid').val()
    const book = new Library().bookById(_id)
    elt.preventDefault()
    book.author = $('input#author').val()
    book.teaser = $('textarea#teaser').val()
    Books.update(_id, book)
    Router.go('detailedNextKlub', {_id: _id})
  }
})
