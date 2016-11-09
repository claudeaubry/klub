import { Tinytest } from "meteor/tinytest"

Tinytest.add('Library.itemOfKlub', function (test) {
  Books = {}
  Books.find = () => true

  L = new Library()
  test.equal('book', L.itemOfKlub('lecture'))
  test.equal('game', L.itemOfKlub('jeu'))
})
