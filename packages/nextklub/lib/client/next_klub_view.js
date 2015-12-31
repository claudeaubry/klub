Template.nextKlubView.helpers({
  next: () => NextKlub.findOne(),
  local: () => klubLocalDatas
});
