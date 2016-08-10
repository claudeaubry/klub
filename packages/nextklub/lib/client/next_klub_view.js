
Template.nextKlubsView.helpers({
  klubs: () => NextKlub.find({}, {sort: {date: +1}})
})

Template.nextKlubView.helpers({
  local: () => LocalData.findOne(),
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

Template.nextKlubView.events({
  'click .suggestItem': () => {
    // $('input#titleSubmit').val('')
    // $('input#authorSubmit').val('')
    // $('textarea#teaserSubmit').val('')
    // $('input#siteSubmit').val('')
    // $('input#imgSubmit').val('')
    // $('input#originSubmit').val('')
    Modal.show('modalBook', this)
  }
})
