# 部署指南

云族纪是**私有部署**的应用——每个家族自己部署一套，数据只属于自己。

## 前置要求

- HBuilderX（开发工具）
- uniCloud 阿里云空间（免费额度足够）
- Node.js（本地开发用）

## 部署步骤

### 1. 获取代码

从 Gitee 或 GitHub 克隆项目：

```bash
git clone https://gitee.com/hy_ATfield/YunZuJi.git
```

### 2. 导入 HBuilderX

用 HBuilderX 打开项目文件夹。

### 3. 创建 uniCloud 空间

在 HBuilderX 里：
1. 右键 `uniCloud-aliyun` 目录
2. 选择"关联云服务空间或项目"
3. 创建新的阿里云空间（免费额度即可）

### 4. 上传云函数

右键每个云函数目录，选择"上传部署"：
- `api-family`
- `api-tree`
- `api-identity`
- `api-transfer`
- `api-record`
- `api-user`
- `yz-family-core`

> 首次上传时需要安装云端依赖，按提示确认即可。

### 5. 初始化数据库

云函数上传后，schema 会自动初始化。首次访问应用时，系统会引导你完成：
1. 注册账号
2. 创建家族
3. 录入始祖
4. 开始添加成员

### 6. 编译运行

在 HBuilderX 里选择运行平台：
- **H5**：浏览器里直接看
- **微信小程序**：微信开发者工具里看
- **App**：打包成手机 App

---

## 注意事项

- 部署完成后，第一个注册的人自动成为家族管理员
- 家族数据存在你自己的 uniCloud 空间里，不在我们的服务器上
- 建议定期导出 CSV 备份家族数据
