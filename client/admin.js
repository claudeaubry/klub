Template.localDataEdit.helpers({
  local: () => LocalData.findOne()
})

Template.localDataEdit.events({

  'click .launchlocal': elt => {
    elt.preventDefault()
    LocalData.insert({title: 'Klub Agile'})
  },

  'submit form': (elt) => {
    const localD = LocalData.findOne()
    elt.preventDefault()
    localD.region = $('input.region').val()
    localD.title = $('input.name').val()
    localD.place = $('input.place').val()
    localD.map = $('input.map').val()
    localD.site = $('input.site').val()
    LocalData.update(localD._id, localD)
    Router.go('admin')
  }
})
