import capitalize from './capitalize';
import ellipsize from './ellipsize';
import isEmpty from './isEmpty';

export default {
  capitalize,
  ellipsize,
  empty: isEmpty,
  isEmpty,
  trunc: ellipsize,
  truncate: ellipsize,
};