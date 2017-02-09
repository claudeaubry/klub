import { ReactiveDict } from 'meteor/reactive-dict';

Template.pastKlubDisplay.onCreated(function bodyOnCreated() {
  this.stateLecture = new ReactiveDict();
});

Template.pastKlubDisplay.helpers({
  pastKlubAll() {
  const instance = Template.instance()
  if (instance.stateLecture.get('onlyLecture')) {
    return PastKlub.find({type : 'lecture'}, {sort: {i: -1}})
  }
  return PastKlub.find({}, {sort: {i: -1}})
  }
})

Template.pastKlubDisplay.events({
  'change .lecture input'(event, instance) {
    instance.stateLecture.set('onlyLecture', event.target.checked);
}
})
