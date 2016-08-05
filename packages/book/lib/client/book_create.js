Template.bookCreate.events({

  'submit form': (event) => {
    type = $('input[name="optionsItem"]:checked').val()
    title = $('input#titleSubmit').val()
    author = $('input#authorSubmit').val()
    teaser = $('textarea#teaserSubmit').val()
    site = $('input#siteSubmit').val()
    img = $('input#imgSubmit').val()
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
      img: img,
      origin: origin,
      proposedAt: moment().format('D/M/YYYY'),
      statut: 'proposed'
    })

    $('#modalBook').modal('hide')
  }
})
