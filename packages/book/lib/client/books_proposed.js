Template.booksProposed.helpers({
  titles: () => new Library().nominees()
})

Template.booksProposed.events({
  'click .suggestItem': () => {
    $('input#titleSubmit').val('')
    $('input#authorSubmit').val('')
    $('textarea#teaserSubmit').val('')
    $('input#siteSubmit').val('')
    $('input#originSubmit').val('')
  }
})
