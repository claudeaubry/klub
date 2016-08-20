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
    klub.voteer = $('input.vote').val()
    klub.meetup = $('input.meetup').val()
    PastKlub.update(_id, klub)
    Router.go('adminPastKlubList')
  // },
  // 'click .delete': elt => {
  //   const _id = $('input.id').val()
  //
  //   elt.preventDefault()
  //   PastKlub.remove(_id)
  //   Router.go('adminPastKlubList')
  }
})

// Template.pastKlubEdit.rendered = function () {
//   /*
//   Add this method because it works on refresh
//   but won't by clicking on previous list page.
//  */
//   this.$('select[name="selBook"]').val(this.$('input.book-id').val())
// }
