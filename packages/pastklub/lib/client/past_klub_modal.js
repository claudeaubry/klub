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

    event.preventDefault()
    klubTarget.url = $('input#linkSubmit').val()
    klubTarget.pic = $('input#picSubmit').val()
    klubTarget.summary = $('textarea#summarySubmit').val()
    klubTarget.klubMaster = $('input#klubMasterSubmit').val()
    klubTarget.attendees = $('input#attendeesSubmit').val().split(',')
    PastKlub.update(klubTarget._id, klubTarget)
    $('#modalKlubMaster').modal('hide')
  }
})
