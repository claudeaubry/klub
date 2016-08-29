Template.modalBook.helpers({
  // book: () =>  new Library().bookById(Session.get('selectedBookId'))
  book: () => {
    const bookId = Session.get('selectedBookId')
    if (bookId !== null) {
      return new Library().bookById(bookId)
    } else
      return {title:'', author:'', desc:'',site:'',teaser:'', img:'', origin:''}
  }
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
    // b.proposedAt = new Date()
    b.proposedAt = moment().format('dddd D MMMM YYYY')
    if (!b.title)
      throw alert('Il faut un titre !')
    if (bid === null) {
      b.statut = 'proposed'
      Books.insert(b)
    } else {
      b.statut = new Library().bookById(bid).statut
      Books.update(bid, b)
    }
    $('.modal-backdrop').hide() // for black background
    $('body').removeClass('modal-open') // For scroll run
    $('#modalBook').modal('hide')
  }
})
