import { ReactiveDict } from 'meteor/reactive-dict';

Template.bookList.onCreated(function bodyOnCreated() {
  this.stateBook = new ReactiveDict();
});

Template.bookList.helpers({
  books() {
  const instance = Template.instance()

  if (instance.stateBook.get('selprop')) {
    // If checked, filtrer statut
    return new Library().propsel()
  }

  return new Library().books
}
})

Template.bookList.events({
  'change .sel-prop input'(event, instance) {
    instance.stateBook.set('selprop', event.target.checked);
}
})
