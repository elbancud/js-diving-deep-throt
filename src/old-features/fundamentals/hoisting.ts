/** ============== Hoisting
 * | This means that using a variable before definition will return undefined
 * | The variable will be hoisted but not the definition
 */

// Context
console.log(pi); // Will return undefined
const PI = 3.14;
// How javascript interpreted this shit. This is hoisting
const PI;
console.log(PI);
PI = 3.14;

// This method causes the interpreter to be undefined
// Work around is use a let
var x = 100;
function hoist() {
  console.log(x);
}
hoist();
