Template.nextKlubEdit.helpers({
  nextKlub: () => getNextKlub(),
  nextSkrub: () => getNextSkrub(),
  nomineesBooks: () => new Library().nominees()
})

Template.nextKlubEdit.events({
  'click .modifyklub': elt => {
    const nextKlub = NextKlub.findOne()

    elt.preventDefault()
    nextKlub.date = $('input.date').val()
    nextKlub.dateprop = $('input.dateprop').val()
    nextKlub.voteer = $('input.vote').val()
    nextKlub.datevote = $('input.datevote').val()
    nextKlub.meetup = $('input.meetup').val()
    nextKlub.book_id = $('select[name=selBook]').val()
    if (nextKlub.book_id)
      associateBookToNextKlub(nextKlub.book_id)
    NextKlub.update(nextKlub._id, nextKlub)
    Router.go('adminBookList')
  },

  'click .archiveklub': elt => {
    const nextKlub = NextKlub.findOne()
    const pastKlub = {}

    elt.preventDefault()
    pastKlub.date = nextKlub.date
    pastKlub.voteer = nextKlub.voteer
    pastKlub.meetup = nextKlub.meetup
    pastKlub.book_id = nextKlub.book_id
    pastKlub.klubMaster = 'anonymous'
    discussedBookWhenPastKlub(pastKlub.book_id)
    createPastKlub(pastKlub)
    NextKlub.update(nextKlub._id, {})
    Router.go('nextKlubEdit')
  },

  'click .launchskrub': elt => {
    elt.preventDefault()
    NextKlub.insert({type: 'skrub'})
  }
})

Template.nextKlubEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$('select[name="selBook"]').val(this.$('input.book-id').val())
}
