// const demo = require('./demo');
// console.log(`demo:`, demo)
// console.log(`Object.prototype.toString.call(demo):`, Object.prototype.toString.call(demo))

// foo();
// fooo();
// import * as demo from './demo.mjs';
// import { a as aa, foo as fooo } from './demo.mjs';
// console.log(`demo:`, demo);
// console.log(`aa:`, aa);
// console.log(`fooo:`, fooo);
// import './module.js';

// import foo2, { foo, foo1 } from './demo.mjs';
// console.log(`foo 000:`, foo);
// console.log(`foo1 000:`, foo1);
// console.log(`foo2 000:`, foo2);

// import foo2, { foo, foo1 } from './demo.mjs';
// export default { foo, foo1, foo2 };

export { foo, foo1, foo2 as default } from './demo.mjs';
