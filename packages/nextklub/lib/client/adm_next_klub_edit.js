Template.adminnextKLubs.helpers({
  klubs: () => NextKlub.find()
})

Template.nextKlubAdmin.events({
  'click .raz': function(elt) {
    const nextKlub = {}
    elt.preventDefault()
    nextKlub.type = this.type
    nextKlub.state = 'propositions'
    NextKlub.update(this._id, nextKlub)
  }
})
