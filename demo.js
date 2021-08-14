exports.foo = 'hello'; //{foo: 'hello'}
module.exports.a = 'a'; //{foo: 'hello',a: 'a'}
exports = {
  //断开引用关系
  a: 'b'
};

module.exports.foo = 'world'; // {foo: 'world', a: 'a'}

exports.c = 'c'; // 干扰:断开引用关系没用

exports = module.exports; //重新建立引用关系

exports.a = 123; // {foo: 'world', a: 123}

module.exports = function test() {}; // function test(){}
