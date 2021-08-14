// exports.foo = 'hello'; //{foo: 'hello'}
// module.exports.a = 'a'; //{foo: 'hello',a: 'a'}
// exports = {
//   //断开引用关系
//   a: 'b'
// };

// module.exports.foo = 'world'; // {foo: 'world', a: 'a'}

// exports.c = 'c'; // 干扰:断开引用关系没用

// exports = module.exports; //重新建立引用关系

// exports.a = 123; // {foo: 'world', a: 123}

// module.exports = function test() {}; // function test(){}

// const a = 123;

export function foo() {
  console.log('i am function, named foo!');
}

function foo1() {
  console.log('i am function, named foo1!');
}
export { foo1 };
// export { a as a1, foo as foo1};
// export default function foo2() {
//   console.log('i am function, named foo2!');
// }

export function foo2() {
  console.log('i am function, named foo2!');
}
// export default 123456;
