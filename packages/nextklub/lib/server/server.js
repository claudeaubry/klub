Meteor.startup( () => {
  (! NextKlub.find().count())
    && NextKlub.insert();

  Meteor.publish("next_klub", () => NextKlub.find());
});
