import { Files } from './Files';
import footer from './footer';
import header from './header';

// TODO fix that we cannot use an import here because this does not recognize the exports in mustache
const mustache = require('mustache'); // eslint-disable-line @typescript-eslint/no-require-imports


// Load from lambda layer
const overwriteHeader = Files.loadTemplateOverwrite('/opt/header.mustache');
const overwriteFooter = Files.loadTemplateOverwrite('/opt/footer.mustache');

/**
 * Render data in a mustache template
 *
 * @param {object} data An object of data to use in the template
 * @param {string} template the main mustache template as a string
 * @param {{[key:string] : string} | undefined} partials name and template string
 * @returns string
 */
export async function render(data: any, template: string, partials?: { [key: string]: string }) {
  const fullPartials = {
    header: overwriteHeader ?? header,
    footer: overwriteFooter ?? footer,
    ...partials,
  };

  data = {
    logos: false,
    ...data,
  };

  return mustache.render(template, data, fullPartials);
};
