Meteor.startup(function () {
  Meteor.subscribe('next_klub')
  getNextKlub = () => NextKlub.findOne()
  getNextSkrub = () => NextKlub.findOne({type: 'skrub'})
})
