// Template.booksProposed.helpers({
//   books: (ptype) => new Library().nominees(type : ptype),
//   nomineesGames: () => new Library().nominees('game'),
//   nomineesVideos: () => new Library().nominees('video')
// })
//
// Template.gamesProposed.helpers({
//   games: () => new Library().nominees('game')
// })
// Template.videosProposed.helpers({
//   videos: () => new Library().nominees('video')
// })

Template.itemli.events({
  'click .editBook': function(elt) {
    elt.preventDefault()
    Session.set('selectedBookId', this._id)
  },
  'click .frozeBook': function (elt) {
    const book = new Library().bookById(this._id)

    elt.preventDefault()
    book.statut = 'frozen'
    Books.update(this._id, book)
  }

})
