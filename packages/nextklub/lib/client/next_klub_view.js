Template.nextKlubView.helpers({
  knext: () => NextKlub.findOne(),
  jnext: () => NextKlub.findOne({type: 'kjeub'}),
  local: () => klubLocalDatas
})
