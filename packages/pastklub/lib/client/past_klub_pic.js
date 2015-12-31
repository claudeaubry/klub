Template.picsKlub.helpers({
  'klub': () => PastKlub.findOne(Session.get('formLinkIdKlub'))
});
