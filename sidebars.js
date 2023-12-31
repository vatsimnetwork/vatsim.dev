// @ts-check

const { sidebarsConfig } = require('./apis');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    'intro',
    {
      type: 'category',
      label: 'Services',
      items: [
        {
          type: 'autogenerated',
          dirName: 'services',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'autogenerated',
          dirName: 'resources',
        },
      ],
    },
  ],

  ...sidebarsConfig,
};

module.exports = sidebars;
