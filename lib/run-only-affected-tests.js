/**
 * @description Run tests only affected by changes
 * const testsContext = require.context('../lib', true, /(test\/(?!e2e\/).*\.js$|.*\.test\.js$)/);
 * runOnlyAffectedTests(testsContext);
 * @param {__WebpackModuleApi.RequireContext} testsContext
 * @returns {void}
 */
export function runOnlyAffectedTests(testsContext) {
  const allTests = testsContext.keys();
  // @ts-ignore
  const karmaWebpackManifest = global.karmaWebpackManifest;
  const affectedTests = karmaWebpackManifest ?
    allTests.filter((path) => karmaWebpackManifest.indexOf(testsContext.resolve(path)) >= 0) :
    null;

  (affectedTests && affectedTests.length ?
    affectedTests :
    allTests).forEach(testsContext);
}
