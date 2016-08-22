Template.modalBook.helpers({
  book: () =>  new Library().bookById(Session.get('selectedBookId'))
})

Template.modalBook.events({
  'submit form': (event) => {
    const b = {}
    bid = Session.get('selectedBookId')
    event.preventDefault()

    b.type = new Library().itemOfKlub(Session.get('typeKlub'))
    b.title = $('input#titleSubmit').val()
    b.author = $('input#authorSubmit').val()
    b.desc = $('textarea#descSubmit').val()
    b.teaser = $('textarea#teaserSubmit').val()
    b.site = $('input#siteSubmit').val()
    b.img = $('input#imgSubmit').val()
    b.origin = $('input#originSubmit').val()
    if (!b.title)
      throw alert('Il faut un titre !')
    if (bid === null) {
      b.proposedAt = moment().format()
      b.statut = 'proposed'
      Books.insert(b)
    } else
      Books.update(bid, b)
    $('#modalBook').modal('hide')
  }
})
