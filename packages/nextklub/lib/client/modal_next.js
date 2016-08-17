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

Template.modalChoix.helpers({
  k: function () {
    // this provides from url parameter
    return NextKlub.findOne({_id: this.toString()})
  },
  typeLecture: function(name) {
    return name === 'lecture'
  },
  typeJeu: function(name) {
    return name === 'jeu'
  },
  typeScribing: function(name) {
    return name === 'scribing'
  },
  nomineesBooks: () => new Library().bnominees(),
  nomineesGames: () => new Library().jnominees(),
  nomineesVideos: () => new Library().vnominees()
})
Template.modalChoix.events({
  'submit form': function(elt) {
    const _id = $('input.cid').val()
    const ktarget = NextKlub.findOne(_id)
    elt.preventDefault()
    if (ktarget.type === 'lecture')
      ktarget.book_id = $('select[name=selBook]').val()
    if (ktarget.type === 'jeu')
      ktarget.book_id = $('select[name=selGame]').val()
    if (ktarget.type === 'scribing')
      ktarget.book_id = $('select[name=selVideo]').val()
    if (ktarget.book_id)
      associateBookToNextKlub(ktarget.book_id)
    else
      throw alert('Il faut associer un élément au préalable !')
    ktarget.state = 'choixAssocié'
    NextKlub.update(_id, ktarget)
    $('#modalChoix').modal('hide')
  }
})

Template.addKlubDate.onRendered( () => {
  this.$( '.datetimepicker' ).datetimepicker({
    format: 'dddd D MMMM YYYY',
    locale: 'fr'})
})
