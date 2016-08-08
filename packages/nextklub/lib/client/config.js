Meteor.startup(function () {
  Meteor.subscribe('next_klub')
})

Template.configKlubs.helpers({
  klubs: () => NextKlub.find(),
  nextKlub: () => NextKlub.findOne({type: 'lecture'}),
  nextKjeub: () => NextKlub.findOne({type: 'jeu'}),
  nextSkrib: () => NextKlub.findOne({type: 'scribing'})
})

Template.configKlubs.events({
  'click .delete': function (elt) {
    elt.preventDefault()
    NextKlub.remove(this._id)
  },
  'click .launchklub': elt => {
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'lecture',
      glyph: 'glyphicon-book'})
  },
  'click .launchkjeub': elt => {
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'jeu',
      glyph: 'glyphicon-knight'})
  },
  'click .launchskrib': elt => {
    elt.preventDefault()
    NextKlub.insert({state: 'propositions', type: 'scribing',
      glyph: 'glyphicon-pencil'})
  }
})
