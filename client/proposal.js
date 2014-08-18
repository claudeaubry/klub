Template.proposal.titles = function(){
  return Books.find({statut : "proposed"});
};

Template.proposal.events = {
  'click .deleteBook': function(){ return Books.remove(this._id)}
}
