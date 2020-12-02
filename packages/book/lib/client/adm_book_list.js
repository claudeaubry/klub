import { ReactiveDict } from 'meteor/reactive-dict';

Template.bookList.onCreated(function bodyOnCreated() {
  this.stateBook = new ReactiveDict();
});

Template.bookList.helpers({
  books() {
  const instance = Template.instance()
  
  var selfroz = false;
  if (instance.stateBook.get('selfroz'))
    selfroz = true;
  
  var selprop = false;
  if (instance.stateBook.get('selprop')) 
    selprop = true;
  
  console.log("sel", selprop, selfroz);
  
  if (selfroz || selprop)
    return new Library().propsel(selprop, selfroz);
  else
    return new Library().books
}
})

Template.bookList.events({
  'change .sel-froz input'(event, instance) {
    instance.stateBook.set('selfroz', event.target.checked);
  },
  'change .sel-prop input'(event, instance) {
    instance.stateBook.set('selprop', event.target.checked);
} 
  
}
)
