# 部署指南

云族记是**私有部署**应用：每个家族部署自己的一套，数据只存在自己的云空间里。本文按顺序讲清楚从零跑起来的完整步骤。

::: tip 你需要准备
- 一台电脑（Windows / macOS 均可）
- [HBuilderX](https://www.dcloud.io/hbuilderx.html)（uni-app 官方 IDE，**必须用它编译和上传云函数**）
- 一个 [DCloud](https://www.dcloud.io/) 账号（用于开通 uniCloud）
- Node.js（仅在想跑本地回归测试时需要）
:::

## 整体流程

```
获取源码 → HBuilderX 打开 → 创建并关联云空间
   → 上传公共模块和云函数 → 上传数据库表结构
   → 填写密钥配置 → 编译运行（H5 / 小程序 / App）
```

## 1. 获取源码

从代码仓库克隆或下载：

```bash
# Gitee
git clone https://gitee.com/hy_ATfield/YunZuJi.git

# GitHub
git clone https://github.com/hy_ATfield/YunZuJi.git
```

然后用 HBuilderX「文件 → 打开目录」，选择项目根目录。

## 2. 创建并关联云服务空间

1. 登录 [uniCloud 控制台](https://unicloud.dcloud.net.cn/)
2. 创建一个**阿里云**服务空间（免费额度即可，按量付费）
3. 回到 HBuilderX，右键项目里的 `uniCloud-aliyun` 目录
4. 选择「关联云服务空间或项目」，选中刚创建的空间

::: warning 注意服务商
项目使用的是 **uniCloud 阿里云版**，不要选腾讯云版，两者的云函数和数据库不通用。
:::

## 3. 上传公共模块和云函数

这是最容易漏的一步。云函数依赖公共模块，**必须一起上传**，否则会报找不到模块的错误。

在 `uniCloud-aliyun/cloudfunctions/` 下：

**先上传公共模块**（右键 → 上传部署）：

- `common/yz-family-core`（家族业务核心，多个云函数共用）
- 以及 uni 插件自带的 `uni-id-common`、`uni-config-center`（一般随插件提示上传）

**再上传业务云函数**：

| 云函数 | 作用 |
| --- | --- |
| `api-family` | 家族、成员、治理、搜索 |
| `api-tree` | 族谱树读取、外族访问裁剪 |
| `api-identity` | 真人认领、身份合并、分身管理 |
| `api-transfer` | CSV / GEDCOM 导入导出 |
| `api-record` | 家族图文记录与收支 |
| `api-user` | 成员登记、头像、账号 |
| `deleteCloudFile` | 删除云存储文件（带归属校验） |

::: warning 依赖关系
`api-family`、`api-tree`、`api-identity` 都依赖 `yz-family-core`。如果只上传云函数、没传公共模块，调用会直接 500。改动公共模块后，记得重新上传依赖它的所有云函数。
:::

首次上传时 HBuilderX 会提示「是否安装云端依赖」，选择确认。

## 4. 初始化数据库表结构

数据表结构由 DB Schema 文件定义，上传后会自动建表、自动生成校验规则。

- 右键 `uniCloud-aliyun/database` 目录 →「上传 DB Schema」
- 其中**用户表**（`uni-id-users`，同时也是家族成员表）的 schema 位于插件目录：
  `uni_modules/uni-id-pages/uniCloud/database/`，随 uni-id-pages 插件一起上传

::: tip 表里没有数据是正常的
上传 Schema 只创建**表结构和字段规则**，不会、也不需要预置成员数据。成员由你后续在应用里添加，或通过 CSV 导入。
:::

## 5. 填写密钥配置

uni-id 需要各端的密钥配置：

1. 在 `uni_modules/uni-config-center/` 下找到 uni-id 的配置目录
2. 把 `config.example.json` 复制为 `config.json`
3. 按注释填入各端（H5 / 小程序 / App）的 appid 与密钥，按需调整 token 有效期

::: danger 不要把 config.json 提交到仓库
`config.json` 含密钥，已在 `.gitignore` 中忽略。每个部署者都应该从 `config.example.json` 复制一份自己填写，切勿使用他人的密钥。
:::

## 6. 编译运行

在 HBuilderX 顶部「运行」菜单选择目标平台：

- **运行到浏览器（H5）**：最快验证，浏览器里直接打开，账号密码登录
- **运行到小程序模拟器（微信小程序）**：需安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)并开启服务端口，小程序端为免密登录
- **运行到手机 / App**：真机联调，或通过「发行」打包

首次进入应用会引导你：注册账号 → 创建/加入家族 → 录入始祖 → 开始添加成员。**第一个注册并建族的人自动成为该家族管理员。**

## 7.（可选）跑一遍回归测试

项目自带 Node 无头测试，覆盖称呼算法、匿名净化、权限裁剪、导入组装等核心逻辑。在项目根目录：

```bash
node tests/run-all.mjs
```

全部通过说明核心算法在当前代码下工作正常。改了称呼规则、权限或导入逻辑后，建议先跑测试再上传。

## 日常维护须知

- **改了云函数 / 公共模块** → 必须在 HBuilderX 里重新「上传部署」才生效
- **改了前端页面** → 重新编译运行即可
- **改了数据库 Schema** → 重新「上传 DB Schema」
- **定期备份** → 建议偶尔用「导出 CSV」备份一次家族数据，存到自己手里
- **免费额度** → 足够几十到上百人的家族日常使用；规模上千或图片很多时再考虑升级云空间套餐

## 常见部署问题

- **调用云函数报 500 / 找不到模块**：公共模块 `yz-family-core` 没上传，或上传后没重新上传依赖它的云函数。
- **登录没反应 / token 报错**：`config.json` 没填，或当前平台的 appid/密钥不匹配。
- **看不到数据 / 表不存在**：DB Schema 没上传，或关联的不是阿里云空间。
- **小程序端空白**：确认用的是「全功能主画布」页面，旧的只读版画布已不维护。

更多使用层面的问题见 [常见问题](../about/faq)。
