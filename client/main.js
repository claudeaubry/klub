Meteor.startup(function () {
  Meteor.subscribe('local_data')
  // if (! LocalData.find().count())
  //   LocalData.insert({})

  // const loc = LocalData.findOne()
  // document.title = loc.title
})
