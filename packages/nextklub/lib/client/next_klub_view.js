Template.nextKlubView.helpers({
  next: function () {
    return NextKlub.findOne();
  },
  local: function () {
    return klubLocalDatas;
  }
});
