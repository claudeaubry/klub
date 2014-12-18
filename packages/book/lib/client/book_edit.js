Template.bookEdit.helpers({
  book: function () {
    // this provides from url parameter
    return Books.findOne(this.toString());
  }
});

Template.bookEdit.events({
  'submit form': function (elt) {
    var _id = $('input.id').val(),
      book = _id ? Books.findOne(_id) : {};

    elt.preventDefault();
    book.index = $("input.index").val();
    book.author = $("input.author").val() || "anonymous";
    book.title = $("input.title").val();
    book.img = $("input.img").val();
    book.site = $("input.site").val();
    book.origin = $("input.origin").val();
    book.teaser = $("input.teaser").val();
    // Update an existent record or create it
    if (_id) {
      Books.update(_id, book);
    } else {
      Books.insert(book);
    }
  },
  'click .delete': function (elt) {
    var _id = $('input.id').val();

    elt.preventDefault();
    Books.remove(_id);
    Router.go('adminBookList');
  }
});
