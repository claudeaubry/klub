booksFixtures = [
  {
    _id: "qKbPu7fwzQSkkrmog",
    title: "Kanban pour l'IT",
    author: "Laurent Morisseau",
    img: "kit.png",
  },
  {
    _id: "L6BSZXeTHqGxAbfns",
    title: "Impact Mapping",
    author: "Gojko Adzic",
    img: "impact.png",
    site : "http://www.impactmapping.com/",
  },
  {
    _id: "qS4YRw5hQNaAGnCgW",
    title: "Running Lean",
    author: "Ash Maurya",
    site :"http://practicetrumpstheory.com/"
  },
  {
    _id: "L6BSZfgTHqGxAbfns",
    title: "Story Mapping",
    author: "Jeff Patton",
    img: "usm.png",
  },
  {
    _id: "aFLPmnWhveM9H5pot",
    title: "La procrastination",
    author: "John Perry",
    img: "procras.png",
    site : "http://www.structuredprocrastination.com/",
  },

];


sessionsFixtures = [
  {
    date: "9 septembre 2014",
    place: "Maison des Associations",
    book_id: "L6BSZfgTHqGxAbfns",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vero iste non voluptatem commodi molestiae eligendi, voluptatibus blanditiis rerum, quia esse nostrum soluta magni sit eveniet magnam dolores aperiam modi.",
    statut: "next"
  },
  {
    date: "21 septembre 2013",
    place: "Maison des Associations",
    book_id: "qS4YRw5hQNaAGnCgW",
    attendees: ["clodio", "jean-pascal"],
    statut: "past"
  },

  {
    date: "21 mars 2013",
    place: "Maison des Associations",
    book_id: "qKbPu7fwzQSkkrmog",
    attendees: ["clodio"],
    statut: "past"
  },
  {
    date: "30 janvier 2013",
    place: "Maison des Associations",
    book_id: "aFLPmnWhveM9H5pot",
    attendees: ["clodio", "jeff", "jean-pascal"],
    statut: "past"
  },
  {
    date: "5 décembre 2012",
    place: "La chunga",
    book_id: "L6BSZXeTHqGxAbfns",
    attendees: ["clodio", "jeff"],
    statut: "past"
  },
];


usersFixtures = [
  {
    email : "claude.aubry@gmail.com", password : "azert", username : "clodio"
  },
  {
    email : "claude.dsd@gmail.com", password : "azert", username : "stef"
  },
  {
    email : "claude.agtrg@gmail.com", password : "azert", username : "jeff"
  },

]
