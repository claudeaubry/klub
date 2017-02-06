Template.pastKlubList.helpers({
  pastKlubs: () => {
    const pastKlubs = PastKlub.find({}, {sort: {i: -1}})

    return pastKlubs
    // const pastKlubs = []
    // const pastKlubCollection = PastKlub.find({},
    //     {fields: {i: 1, type: 1, date: 1, book_id: 1}, sort: {i: -1}})
    //
    // pastKlubCollection.map(elt => {
    //   const title = new Library().bookTitleById(elt.book_id)
    //   pastKlubs.push({i: elt.i, type: elt.type, date: elt.date, book: title})
    // })
    //
    // return pastKlubs
  }
})
