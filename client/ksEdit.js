Template.ksEdit.helpers({
  ks: function () {
    return this;
  }
});

Template.ksEdit.events({
  'submit form': function (elt) {
    var _id = $('input.id').val();
    var ks = {};

    elt.preventDefault();

    if (_id) {
      ks = KSessions.findOne(_id);
      ks.i = +$("input.i").val();
      ks.klubMaster = $("input.klubMaster").val();
      KSessions.update(_id, ks);
    }

  }
})
