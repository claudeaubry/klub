Template.pastKlubEdit.helpers({
  pastKlub: function () {
    // this provides from url parameter
    return PastKlub.findOne({i: +this})
  }
})

Template.pastKlubEdit.events({
  'submit form': elt => {
    const _id = $('input.id').val()
    const klub = PastKlub.findOne(_id)

    elt.preventDefault()
    klub.type = $('input.type').val()
    klub.i = +$('input.i').val()
    klub.date = $('input.date').val()
    PastKlub.update(_id, klub)
    Router.go('adminPastKlubList')
  },
  'click .delete': elt => {
    const _id = $('input.id').val()

    elt.preventDefault()
    PastKlub.remove(_id)
    Router.go('adminPastKlubList')
  }
})
