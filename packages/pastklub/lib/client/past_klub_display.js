import { ReactiveDict } from 'meteor/reactive-dict';

Template.pastKlubDisplay.onCreated(function bodyOnCreated() {
  this.klubVisible = new ReactiveDict();
});

Template.pastKlubDisplay.helpers({
  pastKlubAll() {
  const instance = Template.instance()
  if (instance.klubVisible.get('kvisible') === 'lecture') {
    return PastKlub.find({type : 'lecture'}, {sort: {i: -1}})
  }
  if (instance.klubVisible.get('kvisible') === 'jeu') {
    return PastKlub.find({type : 'jeu'}, {sort: {i: -1}})
  }
  if (instance.klubVisible.get('kvisible') === 'scribing') {
    return PastKlub.find({type : 'scribing'}, {sort: {i: -1}})
  }
  return PastKlub.find({}, {sort: {i: -1}})
  }
})

Template.pastKlubDisplay.events({
  'change .klubs input'(event, instance) {
    instance.klubVisible.set('kvisible', event.target.value);
}
})
