Meteor.startup(function () {
  Meteor.subscribe('next_klub')
  getNextKlub = () => NextKlub.findOne({type: 'klub'})
  getNextKjeub = () => NextKlub.findOne({type: 'kjeub'})
})

Template.configKlubs.helpers({
  klubs: () => NextKlub.find(),
  nextKlub: () => NextKlub.findOne({type: 'klub'}),
  nextKjeub: () => NextKlub.findOne({type: 'kjeub'}),
  nextSkrib: () => NextKlub.findOne({type: 'skrib'})
})

Template.configKlubs.events({
  'click .delete': function (elt) {
    elt.preventDefault()
    NextKlub.remove(this._id)
  },
  'click .launchklub': elt => {
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'klub'})
  },
  'click .launchkjeub': elt => {
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'kjeub'})
  },
  'click .launchskrib': elt => {
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'skrib'})
  }
})
