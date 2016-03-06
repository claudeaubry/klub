Template.nextKlubView.helpers({
  klubs: () => NextKlub.find(),
  knext: () => NextKlub.findOne({type: 'klub'}),
  prop: () => NextKlub.findOne({type: 'klub', state: 'propositions'} ),
  choix: () => NextKlub.findOne({type: 'klub', state: 'voteEnCours'} ),
  assoc: () => NextKlub.findOne({type: 'klub', state: 'choixAssocié'} ),
  jnext: () => NextKlub.findOne({type: 'kjeub'}),
  local: () => LocalData.findOne()
})
