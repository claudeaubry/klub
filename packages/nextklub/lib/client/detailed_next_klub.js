Template.detailedNextKlub.helpers({
  klub: function () {
    return NextKlub.findOne({_id: this.toString()})
  }
})
