Template.formKM.helpers({
  klub: function () {
    // this provides from url parameter
    return PastKlub.findOne({i: +this})
  }
})

Template.formKM.events({
  'submit form': event => {
    const _id = $('input.id').val()
    const klubTarget = PastKlub.findOne(_id)
    const target = event.target

    event.preventDefault()
    klubTarget.url = target.link.value
    klubTarget.pic = target.pic.value
    klubTarget.news = target.news.value
    klubTarget.summary = target.summary.value
    klubTarget.klubMaster = target.klubMaster.value
    klubTarget.attendees = target.attendees.value.split(',')
    PastKlub.update(klubTarget._id, klubTarget)
    $('#modalKlubMaster').modal('hide')
  }
})
