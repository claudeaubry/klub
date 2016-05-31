Template.bookView.helpers({
  oneBook: function () {
    return new Library().bookById(this.id)
  }
})

Template.bookTitle.helpers({
  title: function () {
    return new Library().bookTitleById(this.id)
    // return new Library().bookById(this.id).title
  }
})

Template.bookNextView.helpers({
  oneBook: function () {
    return new Library().bookById(this.id)
  }
})

Template.bookDetails.helpers({
  oneBook: function () {
    return new Library().bookById(this.id)
  }
})

Template.imageItem.helpers({
  typeIs: function(type) {
    return this.type === type
  }
})
