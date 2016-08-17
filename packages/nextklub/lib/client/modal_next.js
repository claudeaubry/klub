Template.modalProposition.helpers({
  k: function () {
    // this provides from url parameter
    return NextKlub.findOne({_id: this.toString()})
  }
})
Template.modalProposition.events({
  'submit form': event => {
    const picker   = $( '.datetimepicker' )
    const dateK = picker.data( 'DateTimePicker' ).date()
    const _id = $('input.kid').val()
    const ktarget = NextKlub.findOne(_id)

    event.preventDefault()
    ktarget.date = dateK.format()
    ktarget.hour = $('input.hour').val()
    ktarget.dateprop = $('input.dateprop').val()
    NextKlub.update(_id, ktarget)
    $('#modalProposition').modal('hide')
  }
})

Template.addKlubDate.onRendered( () => {
  this.$( '.datetimepicker' ).datetimepicker({
    format: 'dddd D MMMM YYYY',
    locale: 'fr'})
})
