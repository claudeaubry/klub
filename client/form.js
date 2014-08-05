Template.formBook.events({
  'submit form': function (event) {
    var book = $("input#bookSubmit").val();
    var author = $("input#authorSubmit").val();

    event.preventDefault();
    Books.insert({title: book, author: author, statut: "proposed"});
    $("input#authorSubmit").val("");
    $("input#bookSubmit").val("");
  }
});
