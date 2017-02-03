Template.modalInfoKlub.helpers({
  k: function () {
    // this provides from url parameter
    return NextKlub.findOne({_id: this.toString()})
  }
})

Template.modalInfoKlub.events({
  'submit form': event => {
    // let picker   = $( '.datetimepicker' )
    // const dateK = picker.data( 'DateTimePicker' ).date()
    const _id = $('input.kid').val()
    const ktarget = NextKlub.findOne(_id)
    const target = event.target

    event.preventDefault()
    // ktarget.date = dateK.format()
    ktarget.date = target.date.value
    ktarget.hour = target.hour.value
    ktarget.place = target.place.value
    ktarget.site = target.site.value
    ktarget.dateprop = target.dateprop.value
    NextKlub.update(_id, ktarget)
    $('.modal-backdrop').hide() // for black background
    $('body').removeClass('modal-open') // For scroll run
    $('#modalInfos').modal('hide')
  }
})

Template.modalChoix.helpers({
  k: function () {
    return NextKlub.findOne({_id: this.toString()})
  },
  typeLecture: function(name) {return name === 'lecture'},
  typeJeu: function(name) {return name === 'jeu'},
  typeScribing: function(name) {return name === 'scribing'},
  nomineesBooks: () => new Library().nominees('book'),
  nomineesGames: () => new Library().nominees('game'),
  nomineesVideos: () => new Library().nominees('video')
})
Template.modalChoix.events({
  'submit form': event => {
    const _id = $('input.cid').val()
    const ktarget = NextKlub.findOne(_id)
    event.preventDefault()
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
    ktarget.voteer = $('input.vote').val()
    NextKlub.update(_id, ktarget)
    $('.modal-backdrop').hide() // for black background
    $('body').removeClass('modal-open') // For scroll run
    $('#modalChoix').modal('hide')
  }
})
Template.modalVote.helpers({
  k: function () {
    return NextKlub.findOne({_id: this.toString()})
  }
})

Template.modalVote.events({
  'submit form': event =>  {
    const _id = $('input.vid').val()
    const ktarget = NextKlub.findOne(_id)
    const target = event.target
    event.preventDefault()
    ktarget.state = 'voteEnCours'
    ktarget.voteer = target.voteer.value
    NextKlub.update(_id, ktarget)
    $('.modal-backdrop').hide() // for black background
    $('body').removeClass('modal-open') // For scroll run
    $('#modalVote').modal('hide')
  }
})
