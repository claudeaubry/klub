Library = class Library {
  constructor() {
    this.books = Books.find({}, {sort: {type: 1, statut: -1}})
  }
  nominees(type) {
    return Books.find({type: type, statut: 'proposed'}, {sort: {title: 1}})
  }
  propsel() {
    return Books.find({$or :[{statut : 'selected'}, {statut : 'proposed'}]}, {sort: {title: 1}})
  }
  selected(type) {
    return Books.findOne({type: type, statut: 'selected'})
  }
  bookById(id) {
    return Books.findOne(id)
  }
  bookTitleById(id) {
    return Books.findOne(id, {fields: {title: 1}}).title
  }
  proposedCount(type) {
    return Books.find({type: type, statut: 'proposed'}).count()
  }
  itemOfKlub (typeKlub) {
    let typeItem
    if ( typeKlub === 'lecture' ) typeItem = 'book'
    if ( typeKlub === 'jeu' ) typeItem = 'game'
    if ( typeKlub === 'scribing' ) typeItem = 'video'
    return typeItem
  }
}

associateBookToNextKlub = id => {
  const book = new Library().bookById(id)
  const previousBook = new Library().selected(book.type)

  if (previousBook) {
    previousBook.statut = 'proposed'
    Books.update(previousBook._id, previousBook)
  }
  book.statut = 'selected'
  Books.update(id, book)
}

discussedBookWhenPastKlub = id => {
  const book = new Library().bookById(id)

  book.statut = 'discussed'
  Books.update(id, book)
}

Meteor.startup(function () {
  Meteor.subscribe('all_books')
})
