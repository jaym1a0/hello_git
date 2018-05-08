react-router v4后对history模块做了修改，不支持history，改为Router的方式



在[github](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating)学习react-router的使用，其中有一个章节讲述`Navigating Programatically`，由于使用的是通过`React.Component`的方式创建模块，运行代码的时候一直报错：` TypeError: Cannot read property 'props' of undefined`，经搜索发现`React.Component`和`React.CreateClass`使用上是不一样的。

参考：https://stackoverflow.com/questions/35303490/uncaught-typeerror-cannot-read-property-props-of-null?answertab=active#tab-top

