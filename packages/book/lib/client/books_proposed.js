Template.booksProposed.helpers({
  titles: () => new Library().bnominees()
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
