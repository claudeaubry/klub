Tinytest.add("Create a ksession", function (test) {
  var ks = {},
    html = "";

  ks.i = 5;
  ks.date = "Dimanche 5 février 2014";
  ks.attendees = ["Tonio"];
  html = Blaze.toHTMLWithData(Template.ksession, ks);

  test.notEqual(html.search("Tonio</li>"), -1);
});
