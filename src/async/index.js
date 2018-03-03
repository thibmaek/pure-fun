import mapPromise from './mapPromise';
import sleep from './sleep';
import throttle from './throttle';

export default {
  map: mapPromise,
  sleep,
  takeAtLeast: throttle,
  throttle,
};
