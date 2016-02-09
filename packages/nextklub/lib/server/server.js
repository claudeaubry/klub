Meteor.startup(() => {
  Meteor.publish("next_klub", () => NextKlub.find())
})
