Template.nextKlubs.helpers({
  klubs: () => NextKlub.find()
})

Template.nextKlubEdit.helpers({
  typeIs: function(type) {
    return this.type === type
  },
  nomineesBooks: () => new Library().nominees(),
  nomineesGames: () => new Library().jnominees()
})

Template.nextKlubEdit.events({
  'click .startChoice': function(elt) {
    elt.preventDefault()
    this.state = 'voteEnCours'
    NextKlub.update(this._id, this)
  },

  'click .choiceDone': function(elt) {
    elt.preventDefault()
    if (this.book_id)
      associateBookToNextKlub(this.book_id)
    this.state = 'choixAssocié'
    NextKlub.update(this._id, this)
  },

  'click .modifyklub': function(elt) {
    elt.preventDefault()
    this.date = $('input.date').val()
    this.dateprop = $('input.dateprop').val()
    this.voteer = $('input.vote').val()
    this.datevote = $('input.datevote').val()
    this.meetup = $('input.meetup').val()
    if (this.type === 'klub')
      this.book_id = $('select[name=selBook]').val()
    if (this.type === 'kjeub')
      this.book_id = $('select[name=selGame]').val()
    NextKlub.update(this._id, this)
  },

  'click .archiveklub': function(elt) {
    const pastKlub = {}
    const nextKlub = {}

    elt.preventDefault()
    pastKlub.date = this.date
    pastKlub.voteer = this.voteer
    pastKlub.meetup = this.meetup
    pastKlub.type = this.type
    pastKlub.book_id = this.book_id
    pastKlub.klubMaster = 'anonymous'
    discussedBookWhenPastKlub(pastKlub.book_id)
    createPastKlub(pastKlub)
    nextKlub.state = 'propositions'
    nextKlub.type = this.type
    NextKlub.update(this._id, nextKlub)
    Router.go('nextKlubs')
  }
})

Template.nextKlubEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$('select[name="selBook"]').val(this.$('input.book-id').val())
  this.$('select[name="selGame"]').val(this.$('input.book-id').val())
}
