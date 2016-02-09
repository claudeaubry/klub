Template.pastKlubList.helpers({
  pastKlubs: () => {
    const pastKlubs = []
    const pastKlubCollection = PastKlub.find({},
        {fields: {i: 1, book_id: 1}, sort: {i: -1}})

    pastKlubCollection.map(elt => {
      const title = new Library().bookTitleById(elt.book_id)
      pastKlubs.push({i: elt.i, book: title})
    })

    return pastKlubs
  }
})
