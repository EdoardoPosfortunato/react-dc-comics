const navItems = [
  {
    id: 'characters',
    title: 'CHARACTERS',
    link: '/characters',
    description: 'Esplora i tuoi personaggi preferiti e scopri nuove storie.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'comics',
    title: 'COMICS',
    link: '/comics',
    description: 'Scopri il vasto universo dei fumetti.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'movies',
    title: 'MOVIES',
    link: '/movies',
    description: 'Tutti i film, dalle ultime uscite ai classici.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'tv',
    title: 'TV',
    link: '/tv',
    description: 'Serie TV e show animati per ogni età.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'games',
    title: 'GAMES',
    link: '/games',
    description: 'Immergiti nell\'azione con i nostri videogiochi.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'collectibles',
    title: 'COLLECTIBLES',
    link: '/collectibles',
    description: 'Trova action figure, statue e oggetti da collezione esclusivi.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'videos',
    title: 'VIDEOS',
    link: '/videos',
    description: 'Guarda trailer, interviste e contenuti esclusivi.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'fans',
    title: 'FANS',
    link: '/fans',
    description: 'Unisciti alla community, forum e eventi per i fan.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'news',
    title: 'NEWS',
    link: '/news',
    description: 'Rimani aggiornato sulle ultime notizie e annunci.',
    isExternal: false,
    requiresAuth: false,
  },
  {
    id: 'shop',
    title: 'SHOP',
    link: 'https://shop.example.com', // Esempio di link esterno
    description: 'Acquista merchandising ufficiale e prodotti esclusivi.',
    isExternal: true, // Indica che il link potrebbe portare a un dominio esterno
    requiresAuth: false,
  },
];

export default navItems;