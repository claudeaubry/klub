Template.formBook.events({
  'submit form': function (event) {
    var book = $("input#bookSubmit").val();
    var author = $("input#authorSubmit").val();
    var teaser = $("input#teaserSubmit").val();

    event.preventDefault();
    Books.insert({title: book, author: author, teaser: teaser, statut: "proposed"});
    $("input#bookSubmit").val("");
    $("input#authorSubmit").val("");
    $("input#teaserSubmit").val("");
  }
});
