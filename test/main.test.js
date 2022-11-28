import { runOnlyAffectedTests } from '../lib/run-only-affected-tests';
const testsContext = require.context('./', true, /(.*\.test\.js$)/);
runOnlyAffectedTests(testsContext);