Template.bookCreate.events({
  'click .suggestItem': () => {
    $('input#titleSubmit').val('')
    $('input#authorSubmit').val('')
    $('textarea#teaserSubmit').val('')
    $('input#siteSubmit').val('')
    $('input#originSubmit').val('')
  },

  'submit form': (event) => {
    title = $('input#titleSubmit').val()
    author = $('input#authorSubmit').val()
    teaser = $('textarea#teaserSubmit').val()
    site = $('input#siteSubmit').val()
    origin = $('input#originSubmit').val()

    event.preventDefault()
    if (!title)
      throw alert('Il faut un titre !')
    if (!author)
      throw alert('Il faut un auteur !')

    Books.insert({
      title: title,
      author: author,
      teaser: teaser,
      site: site,
      origin: origin,
      type: 'book',
      // createdAt: new Date(),
      statut: 'proposed'
    })

    $('#modalBook').modal('hide')
  }
})
