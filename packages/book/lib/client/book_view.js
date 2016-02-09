Template.bookView.helpers({
  oneBook: function () {
    return new Library().bookById(this.id)
  }
})

Template.bookTitle.helpers({
  title: function () {
    return new Library().bookTitleById(this.id)
  }
})
