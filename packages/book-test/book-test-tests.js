import { Tinytest } from "meteor/tinytest"


Tinytest.add('arraytests-map', function (test) {
  test.equal(8, [8, 5, 0, 66, 4, 3, 1, 7].length)
})

Tinytest.add('nextIndex', function (test) {
  test.equal(66, nextIndex([8, 5, 0, 66, 4, 3, 1, 7]))
})
