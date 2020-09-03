# Node.js 第6天课堂笔记

## 知识点

- 多人社区案例

## 反馈

## 复习

- MongoDB 数据库
  + 灵活
  + 不用设计数据表
  + 业务的改动不需要关心数据表结构
  + DBA 架构师 级别的工程师都需要掌握这项技能
    * 设计
    * 维护
    * 分布式计算
- mongoose
  + mongodb 官方包也可以操作 MongoDB 数据库
  + 第三方包：WordPress 项目开发团队
  + 设计 Schema
  + 发布 Model（得到模型构造函数）
    * 查询
    * 增加
    * 修改
    * 删除
- Promise
  + http://es6.ruanyifeng.com/#docs/promise
  + callback hell 回调地狱
  + 回调函数中套了回调函数
  + Promise(EcmaScript 6 中新增了一个语法 API)
  + 容器
    * 异步任务（pending）
    * resolve
    * reject
  + then 方法获取容器的结果（成功的，失败的）
  + then 方法支持链式调用
  + 可以在 then 方法中返回一个 promise 对象，然后在后面的 then 方法中获取上一个 then 返回的 promise 对象的状态结果

## 上午总结

## 下午总结

## 总结

- path 模块
- __dirname 和 __filename
  + **动态的** 获取当前文件或者文件所处目录的绝对路径
  + 用来解决文件操作路劲的相对路径问题
  + 因为在文件操作中，相对路径相对于执行 `node` 命令所处的目录
  + 所以为了尽量避免这个问题，都建议文件操作的相对路劲都转为：**动态的绝对路径**
  + 方式：`path.join(__dirname, '文件名')`
- art-template 模板引擎(include、block、extend)
  + include
  + extend
  + block
- 表单同步提交和异步提交区别
  + 以前没有 ajax 都是这么干的，甚至有些直接就是渲染了提示信息出来了
  + 异步提交页面不会刷新，交互方式更灵活
- Express 中配置使用 express-session 插件
- 概述案例中注册-登陆-退出的前后端交互实现流程

## 目标
