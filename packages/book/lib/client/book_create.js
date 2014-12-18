Template.bookCreate.events({
  'click .createBook': function () {
    $("#_idSubmit").val('');
    $("input#bookSubmit").val('');
    $("input#authorSubmit").val('');
    $("input#teaserSubmit").val('');
    $("input#originSubmit").val('');
  },

  'submit form': function (event) {
    var _id = $("#_idSubmit").val(),
    book = $("input#bookSubmit").val(),
    author = $("input#authorSubmit").val(),
    teaser = $("input#teaserSubmit").val(),
    origin = $("input#originSubmit").val();

    event.preventDefault();
    if (!book) {
      throw alert("Il manque un titre !");
    }
    if (!author) {
      throw alert("Il manque un auteur !");
    }

    Books.insert({
      title: book,
      author: author,
      teaser: teaser,
      origin: origin,
      statut: "proposed"
    });

    $('#modalBook').modal('hide');
  }
});
