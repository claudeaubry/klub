Template.detailedNextKlub.helpers({
  klub: function () {
    return NextKlub.findOne({_id: this.toString()})
  }
})

Template.detailedNextKlub.events({
  'click .suggestItem': () => {
    Modal.show('modalBook', this)
  // },
  // 'click .plusProp': () => {
  //   $('#modalProposition').modal('show')
  }
})

Template.addKlubDate.onRendered( () => {
  this.$( '.datetimepicker' ).datetimepicker({
    format: 'dddd D MMMM YYYY',
    locale: 'fr'})
})
