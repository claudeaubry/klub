Meteor.startup(function () {
  Meteor.subscribe('local_data')
  // if (! LocalData.find().count())
  //   LocalData.insert({})
  // document.title = LocalData.findOne().title
})
