Template.nextKlubView.helpers({
  knext: () => NextKlub.findOne({type: 'klub'}),
  jnext: () => NextKlub.findOne({type: 'kjeub'}),
  local: () => klubLocalDatas
})
