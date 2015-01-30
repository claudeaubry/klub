PastKlub = new Meteor.Collection('test-pastklub');

removeAll = function () {
  PastKlub.find().fetch().map(function (klub) {
    PastKlub.remove(klub._id);
  })
}

/*
 Test futureI
*/

Tinytest.add("futureI with no klub", function (test) {
  test.equal(futureI(), 1);

  removeAll();
});

Tinytest.add("futureI with klubs an max i equal to 13", function (test) {
  var i = 5;

  PastKlub.insert({i: 1});
  PastKlub.insert({i: 5});
  PastKlub.insert({i: 13});

  console.log("before", PastKlub.find().count())

  test.equal(futureI(),14);

  removeAll();
});


