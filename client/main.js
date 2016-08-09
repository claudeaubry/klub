Meteor.startup(function () {
  Meteor.subscribe('local_data')
  // if (! LocalData.find().count())
  //   LocalData.insert({})
  // document.title = LocalData.findOne().title
})

Template.registerHelper('ISOToFr', ( isoString ) => {
  if ( isoString )
    return moment( isoString ).locale('fr').format( 'D MMMM YYYY' )
})
