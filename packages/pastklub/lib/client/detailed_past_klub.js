Template.detailedPastKlub.helpers({
  klub: function () {
    return PastKlub.findOne({i: +this})
  }
})

Template.detailedPastKlub.events = {
  'click .modifyLink': function () {
    Session.set('formLinkIdKlub', this._id)
  }
}
