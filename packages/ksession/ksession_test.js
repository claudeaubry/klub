Tinytest.add("A session exist", function (test) {
  test.equal(true, true);
});

Tinytest.add("C session exist", function (test) {
  test.equal(true, true);
});

Tinytest.add("B session exist", function (test) {
  test.equal(true, false);
});
