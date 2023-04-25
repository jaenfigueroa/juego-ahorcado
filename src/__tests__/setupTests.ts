import { JSDOM } from 'jsdom';

const dom = new JSDOM('', {
  localStorage: 'memory'
});

global.window = dom.window;
global.localStorage = dom.window.localStorage;
