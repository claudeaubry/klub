Template.bookCreate.events({
  'click .createBook': () => {
    $("input#bookSubmit").val('');
    $("input#authorSubmit").val('');
    $("input#teaserSubmit").val('');
<<<<<<< HEAD
=======
    $("input#siteSubmit").val('');
>>>>>>> dev
    $("input#originSubmit").val('');
  },

  'submit form': (event) => {
    book = $("input#bookSubmit").val();
    author = $("input#authorSubmit").val();
    teaser = $("input#teaserSubmit").val();
<<<<<<< HEAD
=======
    site = $("input#siteSubmit").val();
>>>>>>> dev
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
<<<<<<< HEAD
=======
      site: site,
>>>>>>> dev
      origin: origin,
      statut: "proposed"
    });

    $('#modalBook').modal('hide');
  }
});
