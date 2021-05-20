const { text } = require("express");

module.exports = [
  {id: 'starter',
   img: '/img/starter.svg',
   title: 'Starter',
   modulesQuantity: '10 Modules',
   price:'Free',
   txt: '<span>Become a desired programmer</span> in the market with these free courses',
  },
  {id: 'launchbase',
   img: '/img/lb.svg',
   title: 'Launchbase',
   modulesQuantity: '20 Modules',
   price:'Paid',
   txt: '<span>Master programming from scratch</span> and have access to the best opportunities on the market',
  },
  {id: 'gostack',
   img: '/img/gs.svg',
   title: 'Go Stack',
   modulesQuantity: '30 Modules',
   price:'Paid',
   txt: '<span>Immersive training</span> in the most modern web and mobile development technologies',
  }
]