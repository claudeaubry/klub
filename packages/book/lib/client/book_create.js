Template.bookCreate.events({
  'click .createBook': () => {
    $("input#bookSubmit").val('');
    $("input#authorSubmit").val('');
    $("input#teaserSubmit").val('');
    $("input#siteSubmit").val('');
    $("input#originSubmit").val('');
  },

  'submit form': (event) => {
    book = $("input#bookSubmit").val();
    author = $("input#authorSubmit").val();
    teaser = $("input#teaserSubmit").val();
    site = $("input#siteSubmit").val();
    origin = $("input#originSubmit").val();

    event.preventDefault();
    if (!book) {
      throw alert("Il faut un titre !");
    }
    if (!author) {
      throw alert("Il faut un auteur !");
    }

    Books.insert({
      title: book,
      author: author,
      teaser: teaser,
      site: site,
      origin: origin,
      statut: "proposed"
    });

    $('#modalBook').modal('hide');
  }
});
