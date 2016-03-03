Template.pastKlubDisplay.helpers({
  pastKlubAll: () => {
    // let ilocj = 0
    const klubs = PastKlub.find({}, {sort: {i: -1}})

    // klubs.fetch().map(klub => {
    //   if (klub.type === 'kjeub') {
    //     ilocj + 1
    //     klub.i = ilocj
    //   }
    // })
    return klubs
  }
})
