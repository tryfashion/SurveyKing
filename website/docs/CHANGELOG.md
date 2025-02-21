---
id: changelog
title: 更新日志
---

## v1.3.0(2022-11-08)

🆕 **新增功能**

- 添加禁止复制设置和考试切屏强制提交设置
- nps题和打分题可以参与逻辑计算

⛑ **问题修复**

- 修复报表数据不能显示
- 修复上传题说明文字手机端显示错位


## v1.3.0(2022-11-07)

🆕 **新增功能**

- 添加问卷关联，允许问卷引用其他问卷的答案
- 登录添加滑动验证码，并支持在系统设置里面切换打开 / 关闭状态
- 问卷设置添加问题校验时机开关，支持输入时校验、离开时校验、提交问卷时校验
- 答题白名单添加 excel 导入
- 优化矩阵自增题样式，允许自定义宽度，添加最少和最多输入行数限制

⛑ **问题修复**

- 升级 jackson 到 2.14.0
- 修复用户注册默认角色 bug
- 修复共享题库 bug

## v1.2.2(2022-10-20)

⛑ **问题修复**

- 用户管理报错
- 导出选中数据数量异常

⚡️ **体验优化**

- 随机问题=固定问题(编辑器内添加)+随机问题(题库抽题)

## v1.0.2(2022-09-23)

⛑ **问题修复**

- 题库不能删除
- 用户不能删除
- 数字填空不能输入0

⚡️ **体验优化**

- 单选、多选填空打开开关默认填空类型为不限

## v1.0.0(2022-09-19)

🆕 **新增功能**

- 添加 token 认证登录系统和答卷
- 添加考试成绩单和排名
- 矩阵题适配手机端
- 重构权限设置
- 添加富文本题
- 横向填空题同时支持级联、下拉、普通文本
- 单行文本题支持唯一答案设置
- 支持题干说明
- 考试添加随机问题
- 考试结束允许查看成绩单和排名
- 白名单添加导出
- 数据表格支持打印，图片和文件在线预览，表格支持选中数据求和、平均值
- 数据导出支持时间段
- 题库拆分为问卷题库和考试题库
- 全新的 UI 界面，支持设置皮肤
- 编辑器支持快捷键
- 其他 bug 修复和功能优化


## v0.4.1(2022-08-10)

⛑ **问题修复**

- 答题卡不显示了 [I5DCZO](https://gitee.com/surveyking/surveyking/issues/I5LOI3)
- 白名单显示有问题 [I5DCZO](https://gitee.com/surveyking/surveyking/issues/I5LM0Q)
- 非必填问题校验出错
- 移动到文件夹不显示

## v0.4.0(2022-08-09)

🆕 **新增功能**

- 字典功能，如可以通过字典快速实现省市县乡村五级级联字典
- 编辑器快键键，支持跨快键键跨问卷复制问题和选项
- 问卷编辑时允许文本导入
- 添加表单模式
- 添加考试后显示排行榜、考试结构二维码分享、考试分数显示
- 新的 H5 首页
- 问卷跳转逻辑，支持复杂的问卷跳转设置
- 问卷结束逻辑，支持复杂的问卷结束逻辑设置
- 问卷回收站
- 问卷模板下载
- 问卷复制
- 全新的横向填空设计，允许直接在标题上添加横向填空
- 单选、多选填空，选项允许设置为横向填空，支持多个填空
- 矩阵题支持公式，支持矩阵填空、矩阵自增汇总运算
- 允许设置矩阵左上角显示的标题
- 支持各种日期格式设置以及校验，如年、年月、年月日、年月日时分、年月日时分秒等、时分秒、时分
- 矩阵单选、多选添加自由填空列
- 首页添加我的待办、我的已办

⛑ **问题修复**

- 判分异常

⚡️ **体验优化**

- 支持各种复杂的逻辑组合，显示隐藏逻辑、跳转逻辑和问卷结束逻辑任意组合

## v0.3.2(2022-06-29)

🆕 **新增功能**

- 答题完成后跳转自定义页面允许插入分数(考试)
- 答题完成后跳转自定义页面支持动态计算提示语
- 富文本编辑器添加 Tooltip

⛑ **问题修复**

- 题组导致答题卡和校验失败 [I5DCZO](https://gitee.com/surveyking/surveyking/issues/I5DCZO)

⚡️ **体验优化**

- 优化编辑器性能，百道题的渲染时间由6s优化到1s
