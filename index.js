import BSEAPI from './bse/index';
import NSEAPI from './nse/index';

var API = {
  BSE: BSEAPI,
  NSE: NSEAPI,
};

module.exports = API;
