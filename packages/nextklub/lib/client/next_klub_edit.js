Template.nextKlubs.helpers({
  klubs: () => NextKlub.find()
})

// Template.nextKlubEdit.helpers({
//   nextKlub: () => getNextKlub(),
//   nextKjeub: () => getNextKjeub(),
//   nomineesBooks: () => new Library().nominees(),
//   nomineesGames: () => new Library().jnominees()
// })

Template.nextKlubEdit.helpers({
  typeIs: function(type) {
    return this.type === type
  },
  nomineesBooks: () => new Library().nominees(),
  nomineesGames: () => new Library().jnominees()
})

Template.nextKlubEdit.events({

  // 'click .startChoice': elt => {
  //   const nextKlub = NextKlub.findOne({type: 'klub'})
  //   elt.preventDefault()
  //   nextKlub.state = 'voteEnCours'
  //   NextKlub.update(nextKlub._id, nextKlub)
  // },
  'click .startChoice': function(elt) {
    elt.preventDefault()
    this.state = 'voteEnCours'
    NextKlub.update(this._id, this)
  },

  'click .choiceDone': elt => {
    const nextKlub = NextKlub.findOne({type: 'klub'})
    elt.preventDefault()
    if (nextKlub.book_id)
      associateBookToNextKlub(nextKlub.book_id)
    nextKlub.state = 'choixAssocié'
    NextKlub.update(nextKlub._id, nextKlub)
  },

  'click .modifyklub': elt => {
    const nextKlub = NextKlub.findOne({type: 'klub'})

    elt.preventDefault()
    nextKlub.date = $('input.date').val()
    nextKlub.dateprop = $('input.dateprop').val()
    nextKlub.voteer = $('input.vote').val()
    nextKlub.datevote = $('input.datevote').val()
    nextKlub.meetup = $('input.meetup').val()
    nextKlub.book_id = $('select[name=selBook]').val()
    NextKlub.update(nextKlub._id, nextKlub)
  },

  'click .archiveklub': elt => {
    const nextKlub = NextKlub.findOne({type: 'klub'})
    const pastKlub = {}
    const nextnextKlub = {}

    elt.preventDefault()
    pastKlub.date = nextKlub.date
    pastKlub.voteer = nextKlub.voteer
    pastKlub.meetup = nextKlub.meetup
    pastKlub.type = nextKlub.type
    pastKlub.book_id = nextKlub.book_id
    pastKlub.klubMaster = 'anonymous'
    discussedBookWhenPastKlub(pastKlub.book_id)
    createPastKlub(pastKlub)
    nextnextKlub.type = nextKlub.type
    nextnextKlub.state = 'propositions'
    NextKlub.update(nextKlub._id, nextnextKlub)
    Router.go('nextKlubs')
  },

  'click .launchkjeub': elt => {
    elt.preventDefault()
    NextKlub.insert({type: 'kjeub'})
  },
  'click .modifykjeub': elt => {
    const nextKjeub = NextKlub.findOne({type: 'kjeub'})

    elt.preventDefault()
    nextKjeub.date = $('input.jdate').val()
    nextKjeub.dateprop = $('input.jdateprop').val()
    nextKjeub.voteer = $('input.jvote').val()
    nextKjeub.datevote = $('input.jdatevote').val()
    nextKjeub.meetup = $('input.jmeetup').val()
    nextKjeub.book_id = $('select[name=jselBook]').val()
    if (nextKjeub.book_id)
      associateBookToNextKlub(nextKjeub.book_id)
    NextKlub.update(nextKjeub._id, nextKjeub)
    Router.go('nextKlubs')
  },

  'click .archivekjeub': elt => {
    const nextKlub = NextKlub.findOne({type: 'kjeub'})
    const pastKlub = {}
    const nextnextKlub = {}

    elt.preventDefault()
    pastKlub.date = nextKlub.date
    pastKlub.voteer = nextKlub.voteer
    pastKlub.meetup = nextKlub.meetup
    pastKlub.type = nextKlub.type
    pastKlub.book_id = nextKlub.book_id
    pastKlub.klubMaster = 'anonymous'
    discussedBookWhenPastKlub(pastKlub.book_id)
    createPastKlub(pastKlub)
    nextnextKlub.type = nextKlub.type
    NextKlub.update(nextKlub._id, nextnextKlub)
    Router.go('nextKlubs')
  }
})

Template.nextKlubEdit.rendered = function () {
  /*
  Add this method because it works on refresh
  but won't by clicking on previous list page.
  */
  this.$('select[name="selBook"]').val(this.$('input.book-id').val())
  this.$('select[name="jselBook"]').val(this.$('input.book-id').val())
}
