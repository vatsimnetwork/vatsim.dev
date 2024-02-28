// @ts-check

/*
 * This file generates the configuration for the OpenAPI plugin and the sidebars.
 * Each API is defined in the `apis` object. Each API has a slug, title, and a list of versions.
 * Each version has a version number, a label, and an OpenAPI spec (URL or relative path).
 * The first version in the list is the default version.
 */
const apis = {
  aip: {
    slug: 'aip-api',
    title: 'AIP API',
    versions: [
      {
        version: '1.0.0',
        label: 'v1',
        spec: 'openapi/aip.yaml',
      },
    ],
  },
  connect: {
    slug: 'connect-api',
    title: 'Connect API',
    versions: [
      {
        version: '1.0.0',
        label: 'v1',
        spec: 'openapi/connect.yaml',
      },
    ],
  },
  core: {
    slug: 'core-api',
    title: 'Core API',
    versions: [
      {
        version: '2.0.0',
        label: 'v2',
        spec: 'https://api.vatsim.net/v2/openapi.json',
      },
      {
        version: '1.0.0',
        label: 'v1',
        spec: 'https://api.vatsim.net/api/?format=openapi',
      },
    ],
  },
  data: {
    slug: 'data-api',
    title: 'Data API',
    versions: [
      {
        version: '3.0.0',
        label: 'v3',
        spec: 'openapi/data.yaml',
      },
    ],
  },
  events: {
    slug: 'events-api',
    title: 'Events API',
    versions: [
      {
        version: '2.0.0',
        label: 'v2',
        spec: 'openapi/events-v2.yaml',
      },
      {
        version: '1.0.0',
        label: 'v1',
        spec: 'openapi/events-v1.yaml',
      },
    ],
  },
  metar: {
    slug: 'metar-api',
    title: 'METAR API',
    versions: [
      {
        version: '2.0.0',
        label: 'v2',
        spec: 'openapi/metar.yaml',
      },
    ],
  },
  slurper: {
    slug: 'slurper-api',
    title: 'Slurper API',
    versions: [
      {
        version: '1.0.0',
        label: 'v1',
        spec: 'openapi/slurper.yaml',
      },
    ],
  }
};


/*
 * Aaaaaand here's the magic.
 */

const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

const toPluginConfig = () => {
  const config = {};

  for (const [apiName, api] of Object.entries(apis)) {
    const versions = {};
    for (const version of api.versions.slice(1)) {
      versions[version.version] = {
        specPath: version.spec,
        outputDir: `docs/api/${api.slug}/${version.version}`,
        label: version.label,
        baseUrl: `/api/${api.slug}/${version.version}`,
      };
    }

    config[apiName] = {
      specPath: api.versions[0].spec,
      outputDir: `docs/api/${api.slug}`,
      sidebarOptions: {
        groupPathsBy: 'tag',
        categoryLinkSource: 'tag',
      },
      version: api.versions[0].version,
      label: api.versions[0].label,
      baseUrl: `/api/${api.slug}`,
      versions,
    };
  }

  return config;
}

const toSidebarsConfig = () => {
  const config = {};

  for (const [apiName, api] of Object.entries(apis)) {
    const hasMultipleVersions = api.versions.length > 1;

    for (const [versionIdx, version] of api.versions.entries()) {
      let sidebar = [];

      let categoryTitle = api.title;
      let categorySlug = api.slug;
      if (versionIdx > 0) {
        categoryTitle += ` (${version.label})`;
        categorySlug += `/${version.version}`;
      }

      let categoryItems = [];
      try {
        categoryItems = require(`./docs/api/${categorySlug}/sidebar.js`);
      } catch (err) {}

      let versions = [];
      try {
        versions = require(`./docs/api/${api.slug}/versions.json`);
      } catch (err) {}

      if (hasMultipleVersions) {
        sidebar.push([
          {
            type: 'html',
            defaultStyle: true,
            value: versionSelector(versions),
            className: 'version-button',
          },
          {
            type: 'html',
            defaultStyle: true,
            value: versionCrumb(version.label),
          },
        ]);
      }

      sidebar.push({
        type: 'category',
        label: api.title,
        link: {
          type: 'generated-index',
          title: categoryTitle,
          slug: '/api/' + categorySlug,
        },
        items: categoryItems,
      });

      config[`${apiName}-${version.version}`] = sidebar;
    }
  }

  return config;
}

const navbarDropdown = Object.values(apis).map((api) => ({
  to: `/api/${api.slug}`,
  label: api.title,
}));

module.exports = {
  openApiPluginConfig: toPluginConfig(),
  sidebarsConfig: toSidebarsConfig(),
  navbarDropdown: navbarDropdown,
}
