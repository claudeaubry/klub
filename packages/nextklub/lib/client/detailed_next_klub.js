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
    // let self = {}
    // self.modalMode = 'C'
    Modal.show('modalBook')
  },
  'click .plusklub': function () {
    // let a = this
    // a.modalMode = 'C'
    // Session.set('moddata', this)
    Modal.show('modalProposition', this)
  }
})

Template.addKlubDate.onRendered( () => {
  this.$( '.datetimepicker' ).datetimepicker({
    format: 'dddd D MMMM YYYY',
    locale: 'fr'})
})
Template.modalProposition.helpers({
  // modinfo: function() {
  //   return Session.get('moddata')
  // },
  // klub: function () {
  //   return this
  // }
})
  // typeIs: function(type) {
  //   return this.type === type
  // },
  // stateIs: function(state) {
  //   return this.state === state
  // },
  // nomineesBooks: () => new Library().nominees(),
  // nomineesGames: () => new Library().jnominees(),
  // nomineesVideos: () => new Library().vnominees()

Template.modalProposition.events({
  'click .submitProp': function(elt) {
    let picker   = $( '.datetimepicker' )
    let dateK = picker.data( 'DateTimePicker' ).date()
    elt.preventDefault()
    this.date = dateK.format()
    this.hour = $('input.hour').val()
    this.dateprop = $('input.dateprop').val()
    NextKlub.update(this._id, this)
    $('#modalProposition').modal('hide')
  }
})
