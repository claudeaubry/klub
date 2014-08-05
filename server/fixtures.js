booksFixtures = [
  {
    _id: "qKbPu7fwzQSkkrmog",
    title: "Kanban pour l'IT",
    author: "Laurent Morisseau",
    img: "kit.png",
    site: "http://www.morisseauconsulting.com/2014/02/28/kanban-pour-lit-bientot-la-seconde-edition/",
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
    img: "rl.jpg",
    site : "http://practicetrumpstheory.com/"
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
  {
    _id: "veM9H5potaFLPmnW",
    title: "Specification by example",
    author: "Gojko Adzic",
    img: "sbe.jpg",
    site : "http://specificationbyexample.com/",
  },
  {
    _id: "HqGxAbfnstaFLPmnW",
    title: "Agile Transition",
    author: "Andrea Tomasini & Martin Kearns",
    img: "agiletransition.jpg",
    site : "http://www.infoq.com/minibooks/Agile-Transition",
  },
  {
    _id: "QSkkrmogAbfnsta",
    title: "Coaching Agile",
    author: "Rachel Davies & Liz Sedley, traduit par Fabrice Aimetti",
    img: "coachingagile.jpg",
    site : "http://www.fabrice-aimetti.fr/2014/03/11/coaching-agile-la-traduction/",
  },
  {
    _id: "QNaAGnCgWHqGxAgfdg",
    title: "Petit traité de manipulation",
    author: "Beauvois & Joule",
    img: "manip.jpg",
    site : "http://fr.wikipedia.org/wiki/Petit_trait%C3%A9_de_manipulation_%C3%A0_l%27usage_des_honn%C3%AAtes_gens",
  },
  {
    _id: "XjGkzdWJzF6mwXB8L",
    title: "Rupture douce 2",
    author: "Collectif des grenouilles agiles",
    statut: "proposed",
  },
  {
    _id: "6xJhA6Bj3tZ3N8BLL",
    title: "Coacher une équipe",
    author: "Véronique Messager",
    statut: "proposed",
    teaser: "trucs pour les caochs agiles"
  },

];


sessionsFixtures = [
  {
    i: "9",
    date: "9 septembre 2014",
    place: "Maison des Associations",
    map: "http://www.openstreetmap.org/way/63969787#map=16/43.5775/1.4442",
    book_id: "L6BSZfgTHqGxAbfns",
    text: "Jeff Patton est à l'origine de la pratique Story Mapping, qu'il a popularisée il y a déjà quelques années, en écrivant un article. Il a enfin écrit son livre sur le sujet, qui va bien au-delà de la Story Map. Il aborde la définition de produits dans son ensemble. Le livre n'est pas encore publié, mais on peut se procurer une early release au format pdf.",
    statut: "next"
  },
  {
    i: "8",
    date: "3 juillet 2014",
    place: "Maison des Associations",
    book_id: "QNaAGnCgWHqGxAgfdg",
    attendees: ["jean-pascal", "philippe"],
    statut: "past"
  },
  {
    i: "7",
    date: "2 juin 2014",
    place: "Maison des Associations",
    book_id: "QSkkrmogAbfnsta",
    attendees: ["jean-pascal", "anthony", "clodio", "ludo", "ryadh"],
    voteer: "http://www.voteer.com/polls/a03750d1-5828-44ca-8206-c8f220d3c8ce/result",
    statut: "past"
  },
  {
    i: "6",
    date: "24 mars 2014",
    place: "Maison des Associations",
    book_id: "HqGxAbfnstaFLPmnW",
    attendees: ["jean-pascal", "jeff", "clodio", "nico", "ryadh"],
    voteer: "http://www.voteer.com/polls/cd51fb07-0c58-4236-b9ef-c2d3f13b337b/result",
    statut: "past",
  },
  {
    i: "5",
    date: "27 janvier 2014",
    place: "Maison des Associations",
    book_id: "veM9H5potaFLPmnW",
    attendees: ["jean-pascal", "jeff", "jean"],
    statut: "past"
  },
  {
    i: "4",
    date: "2 décembre 2013",
    place: "Maison des Associations",
    book_id: "qS4YRw5hQNaAGnCgW",
    attendees: ["clodio", "jean-pascal", "anthony", "jeff", "elvire", "jean"],
    statut: "past"
  },

  {
    i: "3",
    date: "21 mars 2013",
    place: "Maison des Associations",
    book_id: "qKbPu7fwzQSkkrmog",
    attendees: ["clodio", "riadh", "mariejo", "anthony", "jean", "david", "marianne"],
    statut: "past"
  },
  {
    i: "2",
    date: "30 janvier 2013",
    place: "Maison des Associations",
    book_id: "aFLPmnWhveM9H5pot",
    attendees: ["clodio", "jeff", "pedro","antoine", "nath", "anthony"],
    statut: "past"
  },
  {
    i: "1",
    date: "23 novembre 2012",
    place: "Maison des Associations",
    book_id: "L6BSZXeTHqGxAbfns",
    attendees: ["clodio", "jeff", "jean", "mariejo", "anthony", "pedro", "lolo", "bernard"],
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
