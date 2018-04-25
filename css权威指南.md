css权威指南读书笔记

## 第一章 CSS和文档

元素：

1. 替换元素：用来替换元素内容的部分并非由文档内容直接表示，例如：`<img src='img.png'/>`
2. 非替换元素：元素内容由用户代理（一般指浏览器）在元素本身生成框中显示，大部分HTML标签都是非替换元素

元素显示角色：

1. 块级（block-level）
2. 行内（inline-level）

CSS引入的方式：

1. 外部样式表引用到文档：`<link rel="stylesheet" type="text/css" href="index.css" media="all">`
2. 内部样式表：`<style type="text/css">h1 {color: red} </style>`
3. import指令：`<style type="text/css">@import(sheet1.css) h1 {color: red} </style>`

## 第二章 选择器

规则结构：选择器和声明块，每个声明块由一个或多个声明组成，每个声明是一个属性--值对

声明的格式：一个属性后面跟一个冒号，再后面是一个值，然后是一个分号。属性值可以为一个列表，关键字通过空格隔开

- 元素选择器

```css
html {
    color: black;
}
h1 {
    color: gray;
}
```

- 选择器分组

```css
h2, p {
    color: gray;
}
body, table, p, h1, h2, h3 {
    color: gray;
}
/*等价于下面的写法*/
h2 {color: gray;}
p {color: gray;}
body {color: gray;}
table {color: gray;}
h2 {color: gray;}
h3 {color: gray;}
```

- 类选择器

```css
/*带有通配符，所有元素都可以使用*/
*.warning {
    font-weight: bold;
}
/*通配符可以被忽略*/
.warning {
    font-weight: bold;
}
/*
使用：
<p class="warning">warning</p>
*/

/*段落*/
p.warning {
    font-weight: bold;
}

/*class同时包含warning和urgent时*/
.warning.urgent {
    background: silver;
}
```

- ID选择器

```css
*#first-para {
    font-weight: bold;
}
#first-para {
    font-weight: bold;
}
```

- 属性选择器

```css
/*h1下所有带有class属性的颜色为silver*/
h1[class] {
    color: silver;
}

/*所有带有title属性的*/
*[title] {
    font-weight: bold;
}

/*同时带有href和title属性的链接元素*/
a[href][title] {
    font-weigth: bold;
}

/*带有href属性，并且值为www.test.com的链接元素*/
a[href='www.test.com'] {
    font-weight: bold;
}

/*class属性带有warning的元素*/
p[class~='warning'] {
    font-weight: bold;
}
p[class*="warning"] {} /*包含warning*/
p[class^="warning"] {} /*以warning开头*/
p[class$="warning"] {} /*以warning结尾*/
*[lang|=en]{} /*属性值等于en或以en-开头的*/
```

- 后代选择器

```css
/*只与h1元素中包含em的元素匹配*/
h1 em {
    color:gray;
}
```

- 选择子元素

```css
/*h1下第一个出现的strong元素变成红色*/
h1 > strong {
    color: red;
}
```

- 选择相邻兄弟元素

```css
/*紧接在h1元素后出现的所有段落，h1和p需要是同一个父元素*/
h1 + p {
    margin-top: 0;
}

/*选择紧接在一个table元素后的所有ul元素，该table元素包含在body元素中，body元素本身是html元素的子元素*/
html > body table + ul {
    margin-top: 1.5em;
}
```

- 伪类选择器

```css
/*静态伪类*/
/*尚未访问过的超链接元素*/
a:link {
    color: blue;
}

/*已访问过的超链接*/
a:visited {
    color: red;
}

/*选择第一个子元素p*/
p:first-child {
    font-weight: bold;
}

/*动态伪类*/
/*输入焦点的元素*/
input:focus {
    color: silver;
}
/*鼠标停留在a元素上*/
a:hover {
    color: red;
}
/*已激活的a元素*/
a:active {
    color: yellow;
}

/*伪类组合：鼠标停留在未访问链接上*/
a:link:hover {
    color: gray;
}

/*伪元素选择器（注意必须是块级元素，行级元素不生效）*/
/*设置一个块级元素首字母*/
p:first-letter {
    font-size: 200%;
}
/*设置第一行样式*/
p:first-line {
    color: purple;
}

/*设置之前和之后的元素样式*/
body:after {
    content: " The End.";
}
```

## 第三章 结构和层叠

特殊性：特殊性的表述为4个部分，如：0，0，0，0

1. 对于选择器是给定的各个ID属性值，加0，1，0，0
2. 对于选择器是给定的各个类属性值、属性选择或伪类，加0，0，1，0
3. 对于选择器是给定的各个元素或伪元素，加0，0，0，1
4. 结合法和通配符对特殊性没有贡献
5. 内联样式的特殊性最高：1，0，0，0

```css
h1 {color: red} /*0,0,0,1*/
p em {color: red} /*0,0,0,2*/
.grape {color: red} /*0,0,1,0*/
p.grape em.dark {color: red} /*0,0,2,2*/
#id {color: red} /*0,1,0,0*/
```

特殊性排序：1开头的大于0开头的，0，1开头的大于0，0开头的，依次类推

特殊性为0，0，0，0与没有特殊性有区别

重要性：在声明结束的分号之前插入!important标志

继承

## 第四章 值和单位

