//input.map(item => item + 1);

//demo1
{
    let a = 10;
    var b = 1;
}

//console.log(a); // ReferenceError: a is not defined.
console.log(b);  // 1
console.log('');

//demo2
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}

a[6](); // 10
console.log('');

//demo3
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}

a[6](); // 6
console.log('');

//demo4
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc
// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
console.log('');

//demo5
console.log(foo); // output undefined
var foo = 2;

console.log(typeof foo + ' ' + bar); //error
let bar = 2;
console.log('');

//demo6
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
console.log('');

function t(x = y, y = 2) {
  return [x, y];
}

t(); // 报错

//demo7
function func() {
  let a = 10;
  //var a = 1; //报错
}

//demo8
function f() {console.log('i am outside')}
(function (){
    //var f = undefined;
    if(false) {
        function f() {console.log('i am inside')}
    }
    f();
}())

//demo9
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};
let {loc: {start: {line}}} = node
console.log(line)

//demo10
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + ' is ' + value);
}

console.log('\u0061' + '\u{20BB7}');
console.log(`this is in line 1
and this is in line 2`);
let name = 'Bob', day = 'today';
console.log(`Hello ${name}, how are you ${day}`);
console.log('end');
