Meteor.startup(function () {
  Meteor.subscribe('all_past_klub')
  PastKlub.find().fetch()
})

createPastKlub = klub => {
  klub.i = futureI()
  PastKlub.insert(klub)
}

futureI = () => {
  let result = 0

  PastKlub.find().fetch().map(klub => {
    if (klub.i > result)
      result = klub.i
  })

  return result + 1
}
