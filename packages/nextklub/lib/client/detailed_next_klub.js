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
    format: 'dddd D MMMM YYYY',
    locale: 'fr'})
})

Template.addKlubDate.events
$('#datetimepicker').on('dp.hide', function(elt) {
  let picker = $( '.datetimepicker' )
  let dateK = picker.data( 'DateTimePicker' ).date()

  elt.preventDefault()
  console.log(dateK)
  this === parent.this
  this.date = dateK.format()
  NextKlub.update(this._id, this)
})
