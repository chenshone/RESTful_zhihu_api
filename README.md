# RESTful 知乎 API

**注意:**

1. 数据库采用了 mongoDB Cloud，需要大家自行创建，(方法很简单，谷歌即可),然后将主文件中的`connectionStr`替换成自己的数据库 URL 即可。
2. config.js 文件未上传，里面的变量大家自己修改即可

## 功能点

1. 用户：/users
   1. 获取用户信息: get, /
   2. 获取指定用户信息: get, /:id
      - query:
        - fields?: 过滤字段
   3. 创建新用户: post, /
      - body:
         - name: string
         - password: string
   4. 更新用户信息: patch, /:id
      - body:
        - name?: string
        - password?: string
        - avatar_url?: string
        - gender?:string
        - headline?:string
        - locations?: array, itemType: string
        - business?: string
        - employments?: array, itemType: object
        - educations?: array, itemType: object
    5. 删除用户: delete, /:id
    6. 登录: post, /login
      - body:
        - name: string
        - password: string
    7. 我的关注: get, /:id/following
    8. 我的粉丝: get, /:id/followers
    9. 关注: put, /following/:id
    10. 取消关注: delete, /following/:id
2. 上传文件: /upload
