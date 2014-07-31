Template.session.sessions = function(){
  return Sessions.find();
};

Template.book.oneBook = function(){
  return Books.findOne(this.book_id);
}
