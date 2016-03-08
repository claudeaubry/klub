Template.adminnextKLubs.helpers({
  klubs: () => NextKlub.find()
})

Template.nextKlubAdmin.helpers({
  typeIs: function(type) {
    return this.type === type
  },
  stateIs: function(state) {
    return this.state === state
  },
  nomineesBooks: () => new Library().nominees(),
  nomineesGames: () => new Library().jnominees(),
  nomineesVideos: () => new Library().vnominees()
})

Template.nextKlubAdmin.events({
  'click .plusklub': function() {
    this.plus = ! this.plus
    NextKlub.update(this._id, this)
  },
  'click .raz': function() {
    const nextKlub = {}
    nextKlub.type = this.type
    nextKlub.state = 'propositions'
    NextKlub.update(this._id, nextKlub)
  },
  'click .startChoice': function(elt) {
    elt.preventDefault()
    this.state = 'voteEnCours'
    NextKlub.update(this._id, this)
  },

  'click .choiceDone': function(elt) {
    elt.preventDefault()
    if (!this.book_id)
      throw alert('Il faut associer un élément au préalable !')
    this.state = 'choixAssocié'
    NextKlub.update(this._id, this)
  },

  'click .modifyklub': function(elt) {
    elt.preventDefault()
    this.plus = false
    this.date = $('input.date').val()
    this.hour = $('input.hour').val()
    this.dateprop = $('input.dateprop').val()
    this.voteer = $('input.vote').val()
    this.datevote = $('input.datevote').val()
    this.meetup = $('input.meetup').val()
    if (this.type === 'klub')
      this.book_id = $('select[name=selBook]').val()
    if (this.type === 'kjeub')
      this.book_id = $('select[name=selGame]').val()
    if (this.type === 'skrib')
      this.book_id = $('select[name=selVideo]').val()
    if (this.book_id)
      associateBookToNextKlub(this.book_id)
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
    Router.go('adminnextKLubs')
  }
})

Template.nextKlubAdmin.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$('select[name="selBook"]').val(this.$('input.book-id').val())
  this.$('select[name="selGame"]').val(this.$('input.book-id').val())
  this.$('select[name="selVideo"]').val(this.$('input.book-id').val())
}
