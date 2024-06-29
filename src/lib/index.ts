// import { derived, readable, writable } from 'svelte/store';

// export const article = writable('');
export const content = {
  cover: { title: 'Mike Royko', pages: ['cover'] },
  'millions-in-his-firing-squad': {
    title: 'Millions in His Firing Squad',
    pages: ['pg_027', 'pg_028', 'pg_029']
  },
  'lets-all-drink-to-billy-goat': {
    title: 'Lets All Drink to Billy Goat',
    pages: ['pg_057', 'pg_058', 'pg_059']
  },
  'daley-always-a-quota-man': {
    title: 'Daley Always a Quota Man',
    pages: ['pg_093', 'pg_094', 'pg_095']
  },
  'daley-embodied-chicago': {
    title: 'Daley Embodied Chicago',
    pages: ['pg_102', 'pg_103', 'pg_104', 'pg_105']
  },
  'give-washington-a-break': {
    title: 'Give Washington a Break',
    pages: ['pg_166', 'pg_167', 'pg_168', 'pg_169']
  },
  'system-a-big-0': { title: 'System a Big 0', pages: ['pg_182', 'pg_183', 'pg_184'] },
  'it-was-wrigley': { title: 'It Was Wrigley', pages: ['pg_273', 'pg_274', 'pg_275'] }
};
// export const slugs = derived(content, ($content) => Object.keys($content));
// export const layouts = derived(slugs, ($slugs) => {
//   const slugIterator = [...$slugs, 'none'];
//
//   return slugIterator.map((n) => {
//     const layoutArray = [];
//     for (let l in slugIterator) {
//       if (n !== slugIterator[l]) {
//         layoutArray.push(`"${slugIterator[l]} ${n}"`);
//       }
//     }
//     // console.log(layoutArray.join(' '))
//     return layoutArray.join(' ');
//   });
// });
