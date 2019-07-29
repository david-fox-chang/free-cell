import config from './config';


const cascade = {
  group: {
    name: 'cards',
    pull: 'cards',
    // put: true|fn(),
  },
  easing: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  filter: ':not(.movable), :not(.chain)', // onFilter = filterCascadeFn
};

const triggers = {};


export default {
  config: Object.assign({}, config, cascade),
  triggers,
};
