Meteor.startup(function () {
  Meteor.subscribe("all_past_klub");
  PastKlub.find().fetch();
});

createPastKlub = function (klub) {
  klub.i = futureI();
  PastKlub.insert(klub);
}

futureI = function () {
  var result = 0;

  PastKlub.find().fetch().map(function (klub) {
    if (klub.i > result) {
      result = klub.i;
    }
  });

  return result + 1;
}
