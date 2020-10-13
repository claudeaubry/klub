Meteor.startup(function () {
  Meteor.subscribe('local_data')
  // if (! LocalData.find().count())
  //   LocalData.insert({})
  // document.title = LocalData.findOne().title
})

Template.registerHelper('ISOToFr', ( isoString ) => {
  if ( isoString )
    return moment( isoString ).locale('fr').format( 'dddd D MMMM YYYY' )
})

Template.registerHelper('klubItem', ( typeKlub ) => {
  let typeItem
  if ( typeKlub === 'lecture' ) typeItem = 'book'
  if ( typeKlub === 'jeu' ) typeItem = 'game'
  if ( typeKlub === 'scribing' ) typeItem = 'video'
  if ( typeKlub === 'shuhari' ) typeItem = 'practice'
  return typeItem
})
Template.registerHelper('klubGlyph', ( typeKlub ) => {
  let glyph
  if ( typeKlub === 'lecture' ) glyph = 'glyphicon-book'
  if ( typeKlub === 'jeu' ) glyph = 'glyphicon-knight'
  if ( typeKlub === 'scribing' ) glyph = 'glyphicon-pencil'
  if ( typeKlub === 'shuhari' ) glyph = 'glyphicon-pencil'
  return glyph
})
Template.registerHelper('defaultImg', ( typeItem ) => {
  let img
  if ( typeItem === 'book' ) img = '_book.jpg'
  if ( typeItem === 'game' ) img = '_jeu.jpg'
  if ( typeItem === 'video' ) img = '_crayon.jpg'
  if ( typeItem === 'practice' ) img = '_crayon.jpg'
  return img
})
