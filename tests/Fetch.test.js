import sinon from './node_modules/sinon/pkg/sinon-esm.js';
import Fetch from './../Fetch';

it('calls the original function', function() {
  let header = { test: 'test' };
  fetch.setHeader(header);

  assert.equals(fetch.getHeader(), header);
});
