# 1. 简介

和JavaScript相关的名词较多，列举如下：

- ECMAScript：为JavaScript指定规则的标准化组织
  - ES5
  - ES6：既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等
  - ECMAScript2015：是正式名称，特指该年发布的正式版本的语言标准
- JavaScript
- TypeScript
- JSX

Babel转码器

- 定义：广泛使用的ES6转码器，可以将ES6代码转换为ES5代码，从而在现有环境执行。

- 配置文件.babelrc

  ```c
  {
      'presets':[], //设定转码规则，eg['latest', 'react', 'stage-2']
      'plugins':[]
  }
  ```

- 命令：

  - babel：根据.babelrc配置，将对应的ES6代码转换为ES5代码
  - babel-node：提供一个支持 ES6 的 REPL 环境
  - babel-register：改写require命令，每当使用使用`require`加载`.js`、`.jsx`、`.es`和`.es6`后缀名的文件，就会先用 Babel 进行转码。
  - babel-core：如果某些代码需要调用 Babel 的 API 进行转码，就要使用`babel-core`模块。
  - Babel-polyfill

# 2. let和const

## 2.1 let

- 定义：用来声明变量。它的用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效。

```javascript
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```

- 不存在变量提升：`var`命令会发生”变量提升“现象，即变量可以在声明之前使用，值为`undefined`。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。`let`命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。
- 暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

```javascript
// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
```

- 不允许重复声明

```javascript
//报错
function func() {
    let a = 10;
    var a = 1;
}
function func(arg) {
    let arg; //报错
    {
        let arg; //不报错
    }
}
```

- 块级作用域

## 2.2 const

- `const`声明一个只读的常量。一旦声明，常量的值就不能改变。
- `const`一旦声明变量，就必须立即初始化，不能留到以后赋值。
- `const`的作用域与`let`命令相同：只在声明所在的块级作用域内有效。
- `const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。

## 2.3 global对象

获取顶层对象的方法：

```javascript
//方法一
(typeof window !== 'undefined' ? window 
: (typeof process === 'object' &&
  typeof require === 'function' && 
  typeof global === 'object') ? global : this)

//方法二
var getGlobal = function() {
    if(typeof self !== 'undefined') {return self;}
    if(typeof window !== 'undefined') {return window;}
    if(typeof global != 'undefined') {return global}
    throw new Error('unable to locate global object');
}
```

# 3. 变量的解构赋值

- 数组的解构赋值

```javascript
//demo1
let [a, b, c] = [1, 2, 3]
let [foo, [[bar], baz]] = [1, [[2], 3]]

//demo2
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
```

- 对象的解构赋值

```javascript
//demo1
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined

//demo2
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
line // 1
loc  // Object {start: Object}
start // Object {line: 1, column: 5}
//上面代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。

//demo3
let obj = {};
let arr = [];

({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

obj // {prop:123} 嵌套赋值
arr // [true]

//demo4
// 报错
let {foo: {bar}} = {baz: 'baz'};

//demo5
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error
// JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
// 正确的写法
let x;
({x} = {x: 1});
```

- 字符串的解构赋值

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
let {length : len} = 'hello';
len // 5
```

- 数值与布尔值的解构赋值

```javascript
let {toString: s} = 123;
s // [Function: toString]
s === Number.prototype.toString // true
```

- 函数参数的解构赋值

```javascript
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3
```

- 用途

```javascript
//返回一个数组
function example() {
    return [1, 2, 3]
}
let [a, b, c] = example()
a // 1
b // 2
c // 3

//返回一个对象
function example() {
    return {
        foo: 1,
        bar: 2
    };
}

// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});

//提取 JSON 数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

//输入模块的指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");
//...
```

# 4. 字符串的扩展

- 字符串的Unicode表示

```javascript
'\u{20BB7}' //𠮷
"\uD842\uDFB7" //𠮷
```

- CodePointAt：返回字符串某一个位置的码点

```javascript
let s = '𠮷a';

s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"

//测试一个字符由两个字节还是由四个字节组成的最简单方法
function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷") // true
is32Bit("a") // false
```

- fromCharCode：返回码点对应的字符

```javascript
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
```

- at：返回字符串对应位置的字符

```javascript
'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"
```

- normalize：用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

```javascript
//Ǒ（\u01D1 和 Ǒ（\u004F\u030C）
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true
```

- includes：判断一个字符串是否在另一个字符串
- startsWith：字符串是否在原字符串的头部。
- endsWith：字符串是否在原字符串的尾部。
- repeat：将原字符串重复`n`次。
- padStart：字符串补全长度的功能，头部补全
- padEnd：字符串补全长度的功能，尾部补全

```javascript
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

'x'.repeat(3) // "xxx"

'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```

- 模板字符串：增强版的字符串，用反引号（`）标识

```javascript
// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

# 5. 正则的扩展

