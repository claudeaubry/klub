Template.bookEdit.helpers({
  book: function () {
    // this provided from url parameter
    return Books.findOne(this.toString());
  }
});

Template.bookEdit.events({
  'submit form': elt => {
    var _id = $('input.id').val(),
      book = Books.findOne(_id);

    elt.preventDefault();
    book.author = $("input.author").val();
    book.title = $("input.title").val();
    book.img = $("input.img").val();
    book.site = $("input.site").val();
    book.origin = $("input.origin").val();
    book.teaser = $("input.teaser").val();
    book.statut = $("input.statut").val();
    Books.update(_id, book);
    Router.go('adminBookList');
  },
  'click .freeze': elt => {
    var _id = $('input.id').val(),
      book = Books.findOne(_id);

    elt.preventDefault();
    book.statut = "frozen";
    Books.update(_id, book);
    Router.go('adminBookList');
  },
  'click .delete': elt => {
    var _id = $('input.id').val();
    elt.preventDefault();
    Books.remove(_id);
    Router.go('adminBookList');
  }
});
