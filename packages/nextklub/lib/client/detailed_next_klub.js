Template.detailedNextKlub.helpers({
  klub: function () {
    return NextKlub.findOne({_id: this.toString()})
  }
})

Template.detailedNextKlub.events({
  'click .suggestItem': () => {
    // $('input#titleSubmit').val('')
    // $('input#authorSubmit').val('')
    // $('textarea#teaserSubmit').val('')
    // $('input#siteSubmit').val('')
    // $('input#imgSubmit').val('')
    // $('input#originSubmit').val('')
    Modal.show('modalBook', this)
  }
})

Template.addKlubDate.onRendered( () => {
  this.$( '.datetimepicker' ).datetimepicker({
    format: 'dddd DD MMMM YYYY',
    locale: 'fr'})
})
