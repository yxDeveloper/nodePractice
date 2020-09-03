# Node.js 第5天课堂笔记

## 知识点

- Express
- MongoDB
- 项目
  + 一天半的时间

## 反馈

-  新版sublime 怎么格式化 怎么一起选中长度不等的内容 怎么改颜色 有的写对了也没颜色 仍然是白色
  +  HTML-CSS-JS Prettify
-  代码量好多
  +  真正的开发是咱们这个小案例的无数倍
-  callback是不是相当于函数自调用?
  +  很简单，函数也是一种数据类型，既可以当作参数进行传递，也可以当作方法的返回值
- 我们现在用的模块化是CMD吧 老师能不能给我们扩展一下AMD
  + PHP 中为什么就可以直接 `require`、`include` 因为 PHP 当初在设计的时候就加入了这个功能
  + PHP 这门语言天生就支持
  + 模块作用域
  + 可以使用 API 来进行文件与文件之间的依赖加载
  + 在 Node 这个环境中对 JavaScript 进行了特殊的模块化支持 CommonJS
  + JavaScript 天生不支持模块化
    * require
    * exports
    * Node.js 才有的
  + 在浏览器中也可以像在 Node 中的模块一样来进行编程
    * `<script>` 标签来引用加载，而且你还必须考虑加载的顺序问题
    * require.js 第三方库 AMD
    * sea.js     第三方库 CMD
  + 无论是 CommonJS、AMD、CMD、UMD、EcmaScript 6 Modules 官方规范
    * 都是为了解决 JavaScript 的模块化问题
    * CommonJS、AMD、CMD 都是民间搞出来的
    * EcmaScript 是官方规范定义
    * 官方看民间都在乱搞，开发人员为了在不同的环境使用不同的 JavaScript 模块化解决方案
    * 所以 EcmaScript 在 2015 年发布了 EcmaScript 2016 官方标准
    * 其中就包含了官方对 JavaScript 模块化的支持
    * 也就是说语言天生就支持了
    * 但是虽然标准已经发布了，但是很多 JavaScript 运行换将还不支持
    * Node 也是只在 8.5 版本之后才对 EcmaScript 6 module 进行了支持
    * 后面学 Vue 的时候会去学习
    * less 编译器 > css
    * EcmaScript 6 -> 编译器 -> EcmaScript 5
    * 目前的前端情况都是使用很多新技术，然后利用编译器工具打包可以在低版本浏览器运行。
    * 使用新技术的目的就是为了提高效率，增加可维护性
-  内心极度脆弱。。。有心杀敌 无力回天，总感觉时间不够用。
  +  不要猥琐发育，就得浪
- 虽然比较多 但是因为老师讲的很清晰 还是愿意去写的 对于 node.js 的奥义 封装异步的API 就是需要多练
- 老师讲的很清晰 讲课也很洒脱 老师是不是被夸的已经习惯了 后面讲的回掉函数有点懵了
- 老师讲的很好，思路清晰，项目跟着老师的笔记一步一步敲，so easy
-  觉得老师讲课真的超级棒啊 传智的实力担当 双击没毛病 老铁666
- 都坐下 基本操作 哇,老师,一般敢说这句话的都是大神,我还是个菜鸟,学的那是一脸懵逼
-  有点懵，看着老师的思路做，可是还是不知道从何入手，唉。。。
  +  本着达芬奇画鸡蛋的精神
  +  《使徒行者》三哥
  +  《反黑》陈小春
    *  卧底 8年卧底
    *  文职工作
    *  报了电脑版
    *  吃饭都在看书
    *  学习 -》吃饭也是看书
    *  边角余料
- var router = require('./router') 这一步不是加载router.js并执行该文件吗 为什么还要执行app.use(router) app.use 不是开放静态资源吗 app.use(router)在这里是什么意思，挂载到 app 服务中的意思是？ module.exports = app 也不懂
  + 这里涉及到一个中间件的概念
  + app.use 不仅仅是用来处理静态资源的
  + 还可以做很多工作
  + 配置 body-parse 也是通过 app.use 来配置的
  + 这叫中间件，其中有一套规则
- npm init --yes 生成一个package.json 文件 npm --save 文件名 又生成一个package-lock.json文件,又生成的文件和初始化生成的文件有区别吗?
  + 当你安装包的时候，新版的 npm 还会自动生成一个文件：package-lock.json
-  早上听的还可以，下午感觉一头蒙，还好老师讲了晚上自己做案例的具体步骤，不然感觉无从下手，还是反馈多一点好，还可以回顾回顾，不然感觉老师一天讲的知识太多了，消化不了，嘤嘤嘤~~~
- 其实拖堂的效率也不高啊。。可能是我天资愚笨
  + 对自己有信息
  + 撸起袖子加油干、一张蓝图绘到底
-  老师你好，每节课的事件有点长，上课时间长注意力就容易模糊。听课效率确实有问题，有时候同桌都快憋不住了，为了不丢下知识点，依旧在憋着，好担心...
- 为什么模板引擎在app.js中引入之后在router.js中不引入可以直接使用，而express还需要在router.js中再引入一次 app.js中路由器挂载不是很懂 router.js中为什么要创建一个路由器容器，不知道作用是干什么的 es6中的find方法不是很懂
  + 中间件
  + EcmaScript 6 的 find 方法
- 老师，你后来讲的回调函数那里，关于增删改查案例一个已经够呛了，你竟然在最后都讲完了； 虽然增删改查文件的操作在php之前讲过，但是真的忘了，而且php学的也不好； 还有：对于php是世界上最好的语言，我持怀疑态度，觉得它是世界上最难理解的语言； 诶！苦恼！又来了一个node，知道后边的boss都很难应付，比如什么angular、react和vue，现在其实也做好了心理准备！ 来者不拒吧！看来这一个月注定是一个煎熬的日子！
  + PHP 是世界上最好的语言（贬义）
  + 一切我抗
- 在express框架中怎么判断访问页面不存在的情况？

## 复习

- 文件路径中的 `/` 和模块标识中的 `/`
- Express 中配置使用 art-template 模板引擎
- Express 中配置使用 body-parser
- Express 中配置处理静态资源
- CRUD 案例中单独提取路由模块

## 上午总结

- 回调函数
  + 异步编程
  + 如果需要得到一个函数内部异步操作的结果，这是时候必须通过回调函数来获取
  + 在调用的位置传递一个函数进来
  + 在封装的函数内部调用传递进来的函数
- find、findIndex、forEach
  + 数组的遍历方法，都是对函数作为参数一种运用
    + every
  + some
  + includes
  + map
  + reduce
- package-lock.json 文件的作用
  + 下载速度快了
  + 锁定版本
- JavaScript 模块化
  + Node 中的 CommonJS
  + 浏览器中的
    * AMD require.js
    * CMD sea.js
  + EcmaScript 官方在 EcmaScript 6 中增加了官方支持
  + EcmaScript 6
  + 后面我们会学，编译工具
- MongoDB 数据库
  + MongoDB 的数据存储结构
    * 数据库
    * 集合（表）
    * 文档（表记录）
- MongoDB 官方有一个 mongodb 的包可以用来操作 MongoDB 数据库
  + 这个确实和强大，但是比较原始，麻烦，所以咱们不使用它
- mongoose
  + 真正在公司进行开发，使用的是 mongoose 这个第三方包
  + 它是基于 MongoDB 官方的 mongodb 包进一步做了封装
  + 可以提高开发效率
  + 让你操作 MongoDB 数据库更方便
- 掌握使用 mongoose 对数据集合进行基本的 CRUD
- 把之前的 crud 案例改为了 MongoDB 数据库版本
- 使用 Node 操作 mysql 数据库

## 下午总结

## 目标
