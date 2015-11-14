import  { deparam } from 'deparam/utils/deparam';
import { module, test } from 'qunit';

module('Unit | Utility | deparam');

const TEST_CASES = [
  ['trivial', {a: '1'}],
  ['simple', {user: {email: "tester", password: "tester123"}}],
  ['complex', { a: { b: '1', c: '2' }, d: [ '3', '4', { e: '5' } ] }]
];


test('it works', function(assert) {
  TEST_CASES.forEach(((testCase) => {
    deparamTest(assert, testCase[0], testCase[1]);
  }));
});


function deparamTest(assert, testLabel, paramsObject){
  const paramString = $.param(paramsObject);
  let deparamedObject = deparam(paramString);
  assert.deepEqual(paramsObject, deparamedObject, `Test deparams: ${testLabel}` );
}
