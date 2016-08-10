Template.booksProposed.helpers({
  titles: () => new Library().nominees()
})
Template.gamesProposed.helpers({
  games: () => new Library().jnominees()
})
Template.videosProposed.helpers({
  videos: () => new Library().vnominees()
})

Template.itemsProposal.helpers({
  app: () =>  klubAppDatas
})
