



Template.detailedNextKlub.helpers({
  klub: function () {return NextKlub.findOne({_id: this.toString()})}
})
Template.detailedNextKlub.helpers({
  typeLecture: function(name) {return name === 'lecture'},
  typeJeu: function(name) {return name === 'jeu'},
  typeScribing: function(name) { return name === 'scribing'},
  stateProp: function(name) {return name === 'propositions'},
  stateVote: function(name) {return name === 'voteEnCours'},
  stateChoisi: function(name) {return name === 'choixAssocié'}
})

Template.detailedNextKlub.events({
  'click .addBook': function(elt) {
    elt.preventDefault()
    Session.set('selectedBookId', null)
  },
  'click .editChoosenBook': function(elt) {
    const k = NextKlub.findOne({_id: this.toString()})
    elt.preventDefault()
    Session.set('selectedBookId', k.book_id)
  },

  'click .klubFini': function(elt) {
    elt.preventDefault()
    const nextKlub = {}
    const pastKlub = NextKlub.findOne({_id: this.toString()})
    discussedBookWhenPastKlub(pastKlub.book_id)
    createPastKlub(pastKlub)
    nextKlub.state = 'propositions'
    nextKlub.type = pastKlub.type
    nextKlub.place = LocalData.findOne().place
    nextKlub.site = LocalData.findOne().site
    NextKlub.update(pastKlub._id, nextKlub)
    Router.go('home')
  }
})
