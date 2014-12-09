Template.book_view.helpers({
  oneBook: function () {
    return Books.findOne(this.id);
  }
});
