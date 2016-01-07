Template.bookView.helpers({
  oneBook: function () {
    return Books.findOne(this.id);
  }
});
