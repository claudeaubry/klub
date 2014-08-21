Template.formBook.events({
  'submit form': function (event) {
    var _id = $("#_idSubmit").val();
    var book = $("input#bookSubmit").val();
    var author = $("input#authorSubmit").val();
    var teaser = $("input#teaserSubmit").val();

    event.preventDefault();
    if (! book)
    {
      throw alert("Il manque un titre !");
    };
    if (! author)
    {
      throw alert("Il manque un auteur !");
    };
    
    // Check to create a new book or update an old
    if (_id) {
      Books.update(_id, {
        title: book,
        author: author,
        teaser: teaser,
        statut: "proposed"
      });
    }
    else {
      Books.insert({
        title: book,
        author: author,
        teaser: teaser,
        statut: "proposed"
      });
    }
    $('#myModal').modal('hide');
    $("#_idSubmit").val('');
    $("input#bookSubmit").val('');
    $("input#authorSubmit").val('');
    $("input#teaserSubmit").val('');
  }
});
