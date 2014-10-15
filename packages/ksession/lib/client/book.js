Template.book.helpers({
  oneBook: function () {
    return Books.findOne(this.id);
  }
});
