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
    9. 关注用户: put, /following/:id
    10. 取消关注用户: delete, /following/:id
    11. 关注话题: put, /followingTopics/:id
    12. 取消关注话题: delete, /followingTopics/:id
    13. 我的关注话题: get, /:id/followingTopics
2. 上传文件: /upload
3. 话题: /topics
   1. 获取话题信息: get, /
      - query:
        - per_page?: 每页显示字段数
        - page?: 当前返回第几页
        - q?: 关键字
   2. 获取指定话题信息: get, /:id
      - query:
        - fields?: 过滤字段
   3. 创建新话题: post, /
      - body:
         - name: string
         - avatar_url?: string
         - introduction?: string
   4. 更新话题信息: patch, /:id
      - body:
        - name?: string
        - avatar_url?: string
        - introduction?: string
   5. 关注该话题的人: get, /:id/followers
