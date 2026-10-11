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

云族记为私有项目、源码暂未公开，通过私有交付获得项目源码。

然后用 HBuilderX「文件 → 打开目录」，选择项目根目录。

## 2. 创建并关联云服务空间

1. 登录 [uniCloud 控制台](https://unicloud.dcloud.net.cn/)
2. 创建一个**支付宝云**服务空间（免费额度即可，按量付费）
3. 回到 HBuilderX，右键项目里的 `uniCloud-alipay` 目录
4. 选择「关联云服务空间或项目」，选中刚创建的空间

::: warning 注意服务商
项目使用的是 **uniCloud 支付宝云版**（目录 `uniCloud-alipay`），不要选阿里云或腾讯云版，云函数与数据库不通用。
:::

## 3. 上传公共模块和云函数

这是最容易漏的一步。云函数依赖公共模块，**必须一起上传**，否则会报找不到模块的错误。

在 `uniCloud-alipay/cloudfunctions/` 下：

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
| `api-user` | 成员登记、账号 |
| `api-avatar` | 头像上传 / 下载中转 |
| `api-captcha` | 登录图形验证码下发与核销 |
| `api-sms` | 手机短信验证码下发（阿里云号码认证） |
| `api-version` | 下发最新版本信息，供 App 检查更新 |
| `api-ai` | 家谱 AI 助手问答 |
| `deleteCloudFile` | 删除云存储文件（带归属校验） |

::: warning 依赖关系
`api-family`、`api-tree`、`api-identity` 都依赖 `yz-family-core`。如果只上传云函数、没传公共模块，调用会直接 500。改动公共模块后，记得重新上传依赖它的所有云函数。
:::

首次上传时 HBuilderX 会提示「是否安装云端依赖」，选择确认。

## 4. 初始化数据库表结构

数据表结构由 DB Schema 文件定义，上传后会自动建表、自动生成校验规则。

- 右键 `uniCloud-alipay/database` 目录 →「上传 DB Schema」
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

- **运行到浏览器（H5）**：最快验证，浏览器里直接打开，首推手机短信验证码登录、账号密码为备选
- **运行到小程序模拟器（微信小程序）**：需安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)并开启服务端口，小程序端为免密登录
- **运行到手机 / App**：真机联调，或通过「发行」打包

首次进入应用会引导你：注册账号 → 创建/加入家族 → 录入始祖 → 开始添加成员。**第一个注册并建族的人自动成为该家族管理员。**

## 6.5 微信小程序：配置服务器域名白名单

**开发者工具里正常、真机上所有云调用报 `request:fail`**，几乎都是因为没在小程序后台配置服务器域名——「不校验合法域名」只对模拟器生效，真机一律强制校验。

在 [微信公众平台](https://mp.weixin.qq.com/) → 开发 → 开发管理 → 开发设置 → 服务器域名，**一次性加齐**（每自然月仅可修改 5 次）：

- **request**：`https://{你的空间id}.api-hz.cloudbasefunction.cn`
- **uploadFile**：`https://u.object.cloudrun.cloudbaseapp.cn`
- **downloadFile**：`https://{你的空间id}.normal.cloudstatic.cn` 与 `https://{你的空间id}-static.normal.cloudstatic.cn`

保存后重新预览即生效，无需改动代码。

## 6.6 手机短信验证码登录配置

H5 / App 首推手机短信验证码登录，短信走阿里云「**号码认证服务**」（dypnsapi）。⚠️ **不是「短信服务」dysms**——后者需企业资质与签名实名报备，个人账号用不了。

1. 在阿里云控制台开通「号码认证服务 → 短信认证」
2. 直接使用平台提供的**赠送签名**与**赠送模板**（登录 / 注册场景，内含验证码与时效变量），无需、也无法申请自定义签名
3. 创建一个 **RAM 用户**，只授予 `dypns:SendSmsVerifyCode` 这一条权限（切勿给管理员权限）
4. 把该 RAM 用户的 AccessKey 填入 `api-sms` 云函数的密钥文件 `secret.json`（参照同目录 `secret.example.json`，**不入库**）
5. 右键上传部署 `api-sms`；防刷用的图形验证码由 `api-captcha` 提供，一并上传

::: danger 密钥不入库
`api-sms/secret.json` 含 AccessKey，已在 `.gitignore` 忽略，切勿提交，也不会下发到前端。
:::

## 6.7 Android App 云打包（自装、不上架）

云族记 Android 端采用 DCloud 云打包、自装分发，不上架应用市场：

1. HBuilderX 顶部「发行 → 原生 App-云打包」，选 Android、使用**云端证书**（免自建签名证书）
2. 打包前确认 `manifest.json` 已勾选所需模块：**Camera 相机、Gallery 相册、OAuth（App 端微信登录）**
3. 应用图标、启动页在 `manifest.json` 配置（项目图标资源在 `static/app-icons/`）
4. 打出 APK 后发到家族群，长辈在手机上打开安装（首次需允许"安装未知来源应用"）

::: warning manifest 配置
`manifest.json` 若带注释（JSONC），命令行处理可能解析失败；云打包前确认语法正确、所需模块完整。
:::

## 6.8 App 检查更新与发版（整包更新）

App 启动时会静默调用 `api-version` 比对版本，发现新版本弹窗提示，用户确认后下载整包 APK 覆盖安装（**整包更新**，非热更新）。版本号按**多段式逐段比较**（`1.0.10 > 1.0.9`，不是字符串比较）。

**每次发版三步**：

1. 云打包出新 APK，上传到本服务空间的**云存储**（文件夹设为公开、建议路径 `app/`）
2. 把该 APK 的下载直链填到 `api-version/index.js` 的 `LATEST.url`
3. 改 `LATEST.version`（与 `manifest.json` 的 versionName 逐字一致）与 `LATEST.note`（更新说明），右键上传部署 `api-version`

::: tip 版本号必须来自云端
最新版本号不能写在 App 里——它随包发布，旧包永远读到旧值、会误判"已是最新"；只能由 `api-version` 实时下发。
:::

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
- **看不到数据 / 表不存在**：DB Schema 没上传，或关联的不是支付宝云空间。
- **小程序端空白**：确认用的是「全功能主画布」页面，旧的只读版画布已不维护。

更多使用层面的问题见 [常见问题](../about/faq)。
