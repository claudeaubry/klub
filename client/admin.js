Template.localDataEdit.helpers({
  local: () => LocalData.findOne()
})

Template.localDataEdit.events({

  'submit form': (elt) => {
    const localD = LocalData.findOne()
    elt.preventDefault()
    localD.region = $('input.region').val()
    localD.title = $('input.name').val()
    localD.place = $('input.place').val()
    localD.map = $('input.map').val()
    localD.hour = $('input.hour').val()
    localD.day = $('input.day').val()
    localD.frequency = $('input.frequency').val()
    LocalData.update(localD._id, localD)
    Router.go('adminBookList')
  }
})
