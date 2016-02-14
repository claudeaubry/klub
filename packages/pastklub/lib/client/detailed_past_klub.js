Template.detailedPastKlub.helpers({
  klub: function () {
    return PastKlub.findOne({i: +this})
  }
})
