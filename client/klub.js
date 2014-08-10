Template.klub.club = function(){
  return Klubs.findOne({id: this.klub_id});
};

Template.loc.loc = function(){
  return Klubs.findOne({id: this.klub_id});
};
