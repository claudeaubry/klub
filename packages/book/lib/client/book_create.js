Template.bookCreate.events({

  'submit form': (event) => {
    type = $('input[name="optionsItem"]:checked').val()
    title = $('input#titleSubmit').val()
    author = $('input#authorSubmit').val()
    teaser = $('textarea#teaserSubmit').val()
    site = $('input#siteSubmit').val()
    origin = $('input#originSubmit').val()

    event.preventDefault()
    if (!title)
      throw alert('Il faut un titre !')

    Books.insert({
      type: type,
      title: title,
      author: author,
      teaser: teaser,
      site: site,
      origin: origin,
      proposedAt: new Date(),
      statut: 'proposed'
    })

    $('#modalBook').modal('hide')
  }
})
