Template.frozen.helpers({
  typeKlub: function () { return this.toString() }
})
Template.frozen.helpers({
  lecture: function(name) { return name === 'lecture' },
  jeu: function(name) { return name === 'jeu' },
  scribing: function(name) { return name === 'scribing' },
  shuhari: function(name) { return name === 'shuhari' },
  books: () => Books.find({type: 'book', statut: 'frozen'}, {sort: {title: 1}}),
  games: () => Books.find({type: 'game', statut: 'frozen'}, {sort: {title: 1}}),
  videos: () => Books.find({type: 'video', statut: 'frozen'}, {sort: {title: 1}}),
  practices: () => Books.find({type: 'practice', statut: 'frozen'}, {sort: {title: 1}})
})
Template.itemFrozen.events({
  'click .repeat': function (elt) {
    const book = new Library().bookById(this._id)

    elt.preventDefault()
    book.statut = 'proposed'
    Books.update(this._id, book)
  }
})
