Meteor.startup(function () {
  Meteor.subscribe('next_klub')
})

Template.configKlubs.helpers({
  klubs: () => NextKlub.find(),
  nextKlub: () => NextKlub.findOne({type: 'lecture'}),
  nextKjeub: () => NextKlub.findOne({type: 'jeu'}),
  nextSkrib: () => NextKlub.findOne({type: 'scribing'}),
  nextShuK: () => NextKlub.findOne({type: 'shuhari'})
})

Template.configKlubs.events({
  'click .delete': function (elt) {
    elt.preventDefault()
    NextKlub.remove(this._id)
  },
  'click .launchklub': elt => {
    let defaultPlace = LocalData.findOne().place
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'lecture',
      place: defaultPlace})
  },
  'click .launchkjeub': elt => {
    let defaultPlace = LocalData.findOne().place
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'jeu',
      place: defaultPlace})
  },
  'click .launchskrib': elt => {
    let defaultPlace = LocalData.findOne().place
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'scribing',
      place: defaultPlace})
  },
  'click .launchshu': elt => {
    let defaultPlace = LocalData.findOne().place
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'shuhari',
      place: defaultPlace})
  }
})
