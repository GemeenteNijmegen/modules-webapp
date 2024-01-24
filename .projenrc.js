const { GemeenteNijmegenCdkLib } = require('@gemeentenijmegen/projen-project-type');
const project = new GemeenteNijmegenCdkLib({
  author: 'Marnix Dessing',
  authorAddress: 'm.dessing@nijmegen.nl',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@gemeentenijmegen/projen-project-type'],
  name: 'modules-webapp',
  repositoryUrl: 'https://github.com/m.dessing/modules-webapp.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();