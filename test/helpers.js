const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Zhenpeng Wu',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Zhenpeng Wu',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Zhenpeng Wu',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Zhenpeng Wu',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Zhenpeng Wu',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
