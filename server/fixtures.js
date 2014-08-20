Fixtures = {
  books: [
    {
      _id: "qKbPu7fwzQSkkrmog",
      title: "Kanban pour l'IT",
      author: "Laurent Morisseau",
      img: "kit.png",
      site: "http://www.morisseauconsulting.com/2014/02/28/kanban-pour-lit-bientot-la-seconde-edition/",
      teaser: "Le livre de référence sur Kanban",
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
      teaser: "Jeff Patton est à l'origine de la pratique Story Mapping, qu'il a popularisée il y a déjà quelques années, en écrivant un article. Il a enfin écrit son livre sur le sujet, qui va bien au-delà de la Story Map. Il aborde la définition de produits dans son ensemble. Le livre n'est pas encore publié, mais on peut se procurer une early release au format pdf.",
    },
    {
      _id: "aFLPmnWhveM9H5pot",
      title: "La procrastination",
      author: "John Perry",
      img: "procras.png",
      site : "http://www.structuredprocrastination.com/",
      teaser: "Attendez demain pour le lire"
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
      author: "Robert-Vincent Joule & Jean-Léon Beauvois",
      img: "manip.jpg",
      site : "http://fr.wikipedia.org/wiki/Petit_trait%C3%A9_de_manipulation_%C3%A0_l%27usage_des_honn%C3%AAtes_gens",
      teaser :"L'Agilité est-elle un nouveau moyen de manipulation ? Peut on être à la fois agile et manipulateur ? Comment se prémunir de manipulations malhonnêtes, sans tomber dans le côté obscur ?",
    },
    {
      _id: "XjGkzdWJzF6mwXB8L",
      title: "Rupture douce 2",
      author: "Collectif des grenouilles agiles",
      statut: "proposed",
      teaser: "des histoires de transformation agile d'organisations"
    },
    {
      _id: "6xJhA6Bj3tZ3N8BLL",
      title: "Coacher une équipe",
      author: "Véronique Messager",
      statut: "proposed",
      teaser: "des trucs intéressants pour les coachs agiles"
    },
  ],

  sessions: [

    {
      i: "10",
      date: "9 octobre 2014",
      meetup: "http://www.meetup.com/Agile-Toulouse/events/193870462/",
      statut: "next"
    },
    {
      i: "9",
      date: "9 septembre 2014",
      book_id: "L6BSZfgTHqGxAbfns",
      meetup: "http://www.meetup.com/Agile-Toulouse/events/193870462/",
      statut: "past"
    },
    {
      i: "8",
      date: "3 juillet 2014",
      book_id: "QNaAGnCgWHqGxAgfdg",
      attendees: ["jean-pascal", "philippe"],
      statut: "past"
    },
    {
      i: "7",
      date: "2 juin 2014",
      book_id: "QSkkrmogAbfnsta",
      attendees: ["jean-pascal", "anthony", "clodio", "ludo", "ryadh"],
      voteer: "http://www.voteer.com/polls/a03750d1-5828-44ca-8206-c8f220d3c8ce/result",
      statut: "past"
    },
    {
      i: "6",
      date: "24 mars 2014",
      book_id: "HqGxAbfnstaFLPmnW",
      attendees: ["jean-pascal", "jeff", "clodio", "nico", "ryadh"],
      voteer: "http://www.voteer.com/polls/cd51fb07-0c58-4236-b9ef-c2d3f13b337b/result",
      statut: "past",
    },
    {
      i: "5",
      date: "27 janvier 2014",
      book_id: "veM9H5potaFLPmnW",
      attendees: ["jean-pascal", "jeff", "jean"],
      statut: "past"
    },
    {
      i: "4",
      date: "2 décembre 2013",
      book_id: "qS4YRw5hQNaAGnCgW",
      attendees: ["clodio", "jean-pascal", "anthony", "jeff", "elvire", "jean"],
      statut: "past"
    },

    {
      i: "3",
      date: "21 mars 2013",
      book_id: "qKbPu7fwzQSkkrmog",
      attendees: ["clodio", "riadh", "mariejo", "anthony", "jean", "david", "marianne"],
      presence_author : true,
      statut: "past",
    },
    {
      i: "2",
      date: "30 janvier 2013",
      book_id: "aFLPmnWhveM9H5pot",
      attendees: ["clodio", "jeff", "pedro","antoine", "nath", "anthony"],
      statut: "past"
    },
    {
      i: "1",
      date: "23 novembre 2012",
      book_id: "L6BSZXeTHqGxAbfns",
      attendees: ["clodio", "jeff", "jean", "mariejo", "anthony", "pedro", "lolo", "bernard"],
      statut: "past"
    },
  ],

  users: [
    {
      email : "claude.aubry@gmail.com", password : "azert", username : "clodio"
    },
    {
      email : "claude.dsd@gmail.com", password : "azert", username : "stef"
    },
    {
      email : "claude.agtrg@gmail.com", password : "azert", username : "jeff"
    },

  ],

  klubs: [
    {
      _id : "TDjqHm6sg7Ezn9BpJ",
      region : "Toulouse",
      title : "Klub de lecture Agile Toulouse",
      principle : "Les participants lisent un livre défini à l'avance et viennent en discuter ensemble.",
      objective : "Ils mettent en commun leurs impressions, leurs opinions, leurs connaissances et leurs expériences sur le sujet du livre.",
      rule : "Avoir lu le livre au préalable",
      theme : "Des livres en rapport, directement ou indirectement, avec l'Agilité.",
      place: "Maison des Associations",
      map: "http://www.openstreetmap.org/way/63969787#map=16/43.5775/1.4442",
      hour : "18h30-20h"
    },
  ]
};
