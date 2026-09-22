---
layout: home

hero:
  name: 云族记
  text: 一个属于自家人的家族管理应用
  tagline: 人际关系 + 家族事务两大模块 —— 记录真实的家族网络、自动推算称呼、隐私分层，数据掌握在自己手里
  actions:
    - theme: brand
      text: 了解更多
      link: /guide/introduction
    - theme: alt
      text: 部署指南
      link: /guide/deployment

features:
  - icon: 🌳
    title: 网状关系，不只是树
    details: 人际关系模块以父系谱系为骨架，挂接配偶、外亲与多段婚姻 —— 现实中一个人身处多个家族，族谱不该只画一棵父系树
    link: /guide/canvas
    linkText: 画布导览
  - icon: 👥
    title: 分身体系，一人多位
    details: 一个真人在不同家族有不同身份节点，资料只存一份、处处同步，还能单独匿名某个家族里的自己
    link: /guide/architecture
    linkText: 数据模型
  - icon: 🗣️
    title: 自动推算亲属称呼
    details: 任意两个节点之间自动算出堂哥、表姐、姑父、二嫂……200 多条规则覆盖血亲、姻亲与双向称呼
    link: /guide/kinship-engine
    linkText: 称呼引擎
  - icon: 🔀
    title: 视图与布局自由切换
    details: 完整模式 / 仅本家男性的父系族谱模式一键切换；纵向、横向布局随家族形态选择，关系网再大也看得清
    link: /guide/canvas#两种数据视图
    linkText: 了解视图
  - icon: 🤝
    title: 关系任意匹配
    details: 任选画布上两个人（可切换其分身），即时显示双向称呼并高亮两人之间的关系路径，几代几段婚姻都算得清
    link: /guide/canvas#关系任意匹配
    linkText: 怎么用
  - icon: 🔒
    title: 多层权限与隐私
    details: 家族开放三档 + 逐人特批 + 分身匿名 + 出口数据净化，同一棵树不同人看到不同版本，抓包也反推不出匿名者
    link: /guide/permission
    linkText: 权限模型
  - icon: ↩️
    title: 归档可逆，误删可恢复
    details: 添加、修改、删除、认领、批量导入全部留快照，撤销即恢复；删除成员以虚影暂存，族谱数据不再怕误操作
  - icon: 📥
    title: 导入导出 · 多端 · 私有部署
    details: CSV/GEDCOM 导入与全族导出；一套代码交付微信小程序、H5、App；数据只存在家族自己的云空间
    link: /guide/deployment
    linkText: 如何部署
  - icon: 📔
    title: 家族事务模块
    details: 与人际关系并列的第二模块：一本公开的家族活动记录册——信纸纪事、活动照片、收支台账与已读反馈，记录"发生了什么"
    link: /guide/family-affairs
    linkText: 了解模块
---

<StatBadges />

<div class="home-preview">
  <h2 class="home-section-title">产品形态预览</h2>
  <p class="home-section-sub">界面仍在打磨，以下为各模块位置示意，正式截图随后替换</p>
  <div class="home-phones">
    <PhoneMockup variant="tree" label="族谱画布" topbar="人际关系" caption="族谱关系网络 · 长按节点操作" />
    <PhoneMockup variant="relation" label="关系匹配" topbar="人际关系" caption="任选两人 · 双向称呼" />
    <PhoneMockup variant="list" label="家族事务" topbar="记录" caption="活动记录册 · 图文照片 · 收支台账" />
  </div>
</div>
