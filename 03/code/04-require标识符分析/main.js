// 如果是非路径形式的模块标识
// 路径形式的模块：
//  ./ 当前目录，不可省略
//  ../ 上一级目录，不可省略
//  /xxx 几乎不用
//  d:/a/foo.js 几乎不用
//  首位的 / 在这里表示的是当前文件模块所属磁盘根路径
//  .js 后缀名可以省略
// require('./foo.js')

// 核心模块的本质也是文件
// 核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过 npm 来下载
// 使用的时候就可以通过 require('包名') 的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块、也不是路径形式的模块
//    先找到当前文件所处目录中的 node_modules 目录
//    node_modules/art-template
//    node_modules/art-template/package.json 文件
//    node_modules/art-template/package.json 文件中的 main 属性
//    main 属性中就记录了 art-template 的入口模块
//    然后加载使用这个第三方包
//    实际上最终加载的还是文件

//    如果 package.json 文件不存在或者 main 指定的入口模块是也没有
//    则 node 会自动找该目录下的 index.js
//    也就是说 index.js 会作为一个默认备选项
//    
//    如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_modules 目录查找
//    如果上一级还没有，则继续往上上一级查找
//    。。。
//    如果直到当前磁盘根目录还找不到，最后报错：
//      can not find module xxx
// var template = require('art-template')
// 
// 注意：我们一个项目有且只有一个 node_modules，放在项目根目录中，这样的话项目中所有的子目录中的代码都可以加载到第三方包
// 不会出现有多个 node_modules
// 模块查找机制
//    优先从缓存加载
//    核心模块
//    路径形式的文件模块
//    第三方模块
//      node_modules/art-template/
//      node_modules/art-template/package.json
//      node_modules/art-template/package.json main
//      index.js 备选项
//      进入上一级目录找 node_modules
//      按照这个规则依次往上找，直到磁盘根目录还找不到，最后报错：Can not find moudle xxx
//    一个项目有且仅有一个 node_modules 而且是存放到项目的根目录

require('a')
