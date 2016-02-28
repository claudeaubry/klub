Meteor.startup(function () {
  Meteor.subscribe('next_klub')
  getNextKlub = () => NextKlub.findOne({type: 'klub'})
  getNextKjeub = () => NextKlub.findOne({type: 'kjeub'})
})
