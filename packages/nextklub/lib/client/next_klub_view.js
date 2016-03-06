Template.nextKlubView.helpers({
  // klubs: () => NextKlub.find(),
  // knext: () => NextKlub.findOne({type: 'klub'}),
  // prop: () => NextKlub.findOne({type: 'klub', state: 'propositions'} ),
  // choix: () => NextKlub.findOne({type: 'klub', state: 'voteEnCours'} ),
  // assoc: () => NextKlub.findOne({type: 'klub', state: 'choixAssocié'} ),
  // jnext: () => NextKlub.findOne({type: 'kjeub'}),
  // local: () => LocalData.findOne(),
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

Template.nextKlubsView.helpers({
  klubs: () => NextKlub.find()
})
