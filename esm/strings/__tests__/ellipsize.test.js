/* eslint-disable max-len */
import trunc from '../ellipsize';

const str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const truncDefault = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore`;
const trunc30 = `Lorem ipsum dolor sit amet, co`;

describe(`[Strings]: ellipsize`, ()=>{
  it(`should ellipsize the string if it reaches more than 100 chars`, ()=>{
    expect(trunc(str)).toEqual(`${truncDefault}…`);
  });

  it(`should ellepsize the string if it reaches the given max chars`, ()=>{
    expect(trunc(str, 30)).toEqual(`${trunc30}…`);
  });
});
