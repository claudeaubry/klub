
Template.modalBook.helpers({
  book: () => {
    const bookId = Session.get('selectedBookId')
    const bookType = new Library().itemOfKlub(Session.get('typeKlub'))
    if (bookId !== null) {
      return new Library().bookById(bookId)
    } else
      return { type: bookType, title:'', author:'', desc:'',site:'',teaser:'', img:'', origin:''}
  }
})

Template.modalBook.events({
  'submit form': (event) => {
    const b = {}
    bid = Session.get('selectedBookId')
    const target = event.target

    event.preventDefault()
    b.type = new Library().itemOfKlub(Session.get('typeKlub'))
    b.title = target.title.value
    b.author = target.author.value
    b.desc = target.desc.value
    b.teaser = target.teaser.value
    b.site = target.site.value
    b.img = target.img.value
    b.origin = target.origin.value
    b.proposedAt = moment().format('dddd D MMMM YYYY')
    if (!b.title)
      throw alert('Il faut un titre !')
    if (!b.type)
      b.type = "book"
    if (bid === null) {
      b.statut = 'proposed'
      Books.insert(b)
    } else {
      b.statut = new Library().bookById(bid).statut
      Books.update(bid, b)
    }
    target.title.value = ''
    target.author.value = ''
    target.desc.value = ''
    target.teaser.value = ''
    target.site.value =''
    target.img.value =''
    target.origin.value = ''
    $('.modal-backdrop').hide() // for black background
    $('body').removeClass('modal-open') // For scroll run
    $('#modalBook').modal('hide')
  }
})
