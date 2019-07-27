// import styled from 'vue-styled-components';

// const cell = styled('div', {
//   suit: {
//     type: String,
//     default: 'Apoker-c01',
//   },
// })`
//   background: url(@/${({ suit }) => suit}.svg);
// `;

// export default cell;

import styled from 'vue-styled-components';

// Create a <StyledTitle> Vue component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> Vue component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const svgg = async () => {
  const m = await import('./Apoker-c01.svg').then((obj) => {
    console.log(obj);
    return obj.default;
  });
  console.log(m);
  return m;
};

console.log({ Wrapper, svgg });

export default {
  name: 'cell',
  // functional: true,
  render(createElement, t) {
    return createElement(
      StyledTitle,
      Array.apply(null, { length: 1 }).map(async () => {
        const svg = await svgg();
        console.log(svg);
        // createElement(Wrapper);
        return createElement(Wrapper);
      }),
      // Array.apply(null, { length: 20 }).map(async () => {
      //   const s = await svgg();
      //   const z = createElement(svgg);
      //   const r = createElement(s);
      //   console.log({
      //     svgg,
      //     z,
      //     s,
      //     r,
      //   });
      //   return s;
      // }),
    );
  },
};
// import('./Apoker-c01.svg').then(obj => createElement => createElement(obj)),
