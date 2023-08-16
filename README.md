## 前言
### 🍊缘由
#### 博友有问，狗哥必答
前段时间，博友加本狗微信，询问**uniapp的学习方法**。本狗资历浅薄，没有专门学过uniapp，只能将自己日常开发**uniapp的基本流程和步骤**进行分享，希望可以略尽绵薄之力。**感谢**如下图所示的**博友朋友**的**询问支持**，大家的支持才是我进步的动力。

![](https://img.javadog.net/blog/example-uniapp/aa0c6842e2624db1b2176e319f1cfc43_tplv-k3u1fbpfcp-zoom-1.png)

*******
### 🎯主要目标
#### 实现4大重点
1. uniapp项目**搭建流程**
2. uniapp项目常用**组件引入方式**
3. uniapp项目**接口封装策略**
4. uniapp项目**常用配置整理**
******

## 🎁快速链接
### 公众号：JavaDog程序狗
**关注公众号，发送 【uniapp】，无任何套路即可获得**
![](https://img.javadog.net/blog/example-uniapp/1280c0e5221442e0b80e46075262d0bc_tplv-k3u1fbpfcp-zoom-1.png)

******
###  🍯猜你喜欢
####  文章推荐
[【项目实战】SpringBoot+vue+iview打造一个极简个人博客系统](https://mp.weixin.qq.com/s/fbpVBQVe-4nHdjt5PBdwSw)

[【项目实战】SpringBoot+uniapp+uview2打造H5+小程序+APP入门学习的聊天小项目](https://mp.weixin.qq.com/s/g7AZOWLgW5vcCahyJDEPKA)

[【项目实战】SpringBoot+uniapp+uview2打造一个企业黑红名单吐槽小程序](https://mp.weixin.qq.com/s/t_qwF_HvkdW-6TI3sYUHrA)

[【模块分层】还不会SpringBoot项目模块分层？来这手把手教你！](https://mp.weixin.qq.com/s/fpkiNR2tj832a6VxZozwDg)

[【ChatGPT】手摸手，带你玩转ChatGPT](https://mp.weixin.qq.com/s/9wEelbTN6kaChkCQHmgJMQ)

[【ChatGPT】SpringBoot+uniapp+uview2对接OpenAI，带你开发玩转ChatGPT](https://mp.weixin.qq.com/s/b19J36Eo3-ba7bHbWzoZYQ)
******

### 🍈猜你想问
####  如何与狗哥联系进行探讨
关注公众号【**JavaDog程序狗**】，里面包含**狗哥联系方式**，**有问必答**

![](https://img.javadog.net/blog/example-uniapp/38f4dad4a0974b6e9bae399dd11597b4_tplv-k3u1fbpfcp-zoom-1.png)
##  正文
### 🏀前置条件
#### 1.HBuilderX
>[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html) https://www.dcloud.io/hbuilderx.html
#### 2.npm Node.js 包管理工具
> 安装Node等相关百度即可，简单易懂

### 🍄开始
#### 1.打开工具
双击打开HBuilder X
![](https://img.javadog.net/blog/example-uniapp/db198d87dedd4ed1b1dedca201ee343f_tplv-k3u1fbpfcp-zoom-1.png)
******
#### 2.创建新项目
- 点击HBuilder X工具左上角【文件】=》【新建】=》【项目】

![](https://img.javadog.net/blog/example-uniapp/6086e7c805e3478ea0a3cba0f95a710f_tplv-k3u1fbpfcp-zoom-1.png)

- 按照项目业务起名，如聊天系统就叫**chat-uniapp**，博客系统就叫**blog-uniapp**，这个地方不强制，个人习惯，**本次实例以example-unipp**作为项目名，选择默认模板，示例以**vue2版本**做基础，点击【创建】

![](https://img.javadog.net/blog/example-uniapp/5fa3e4336db54b549d9b41054930fd92_tplv-k3u1fbpfcp-zoom-1.png)
- 初始化项目结构如下
![](https://img.javadog.net/blog/example-uniapp/4c2861dfadc7407da20ff18af316fa4b_tplv-k3u1fbpfcp-zoom-1.png)
******
#### 3.引入组件
- 本狗在uniapp项目中，常用UI库及常用工具引入，小项目基本够用，大家可**按需加载**

| 插件 | 版本 | 用途 |
| --- | ----- |  ----- |
| uview-ui|  ^2.0.31 |多平台快速开发的UI框架 |
| moment | ^2.29.4 |js工具库 |

> [uView UI](https://www.uviewui.com/)，是全面兼容nvue的**uni-app生态框架**，其中还包含**API相关JS函数**，方便封装易用。

![](https://img.javadog.net/blog/example-uniapp/78d02b2d152a4807bf3f859247dfc367_tplv-k3u1fbpfcp-zoom-1.png)

> [moment](http://momentjs.cn/)是**时间js工具库**，常用时间转化格式化等

![](https://img.javadog.net/blog/example-uniapp/0ebb35176bb44be0a2fe72f478140645_tplv-k3u1fbpfcp-zoom-1.png)


- 项目根路径新建package.json，配置上述依赖组件
```json
{
  "dependencies": {
    "moment": "^2.29.4",
    "uview-ui": "^2.0.31"
  }
}
```
![](https://img.javadog.net/blog/example-uniapp/d1df312304484a11baf95edcddc99474_tplv-k3u1fbpfcp-zoom-1.png)
- 项目根路径下拉取依赖
>右击项目根目录，点击【使用命令行窗口打开所在目录】，或者通过命令行进入项目路径都可

![](https://img.javadog.net/blog/example-uniapp/d64395fb08f94abba9ac98b69611a8f1_tplv-k3u1fbpfcp-zoom-1.png)

> npm i

![](https://img.javadog.net/blog/example-uniapp/57a04fbe60d545b2a9d50f50f9c15976_tplv-k3u1fbpfcp-zoom-1.png)

> 查看成功拉取依赖

![](https://img.javadog.net/blog/example-uniapp/5d5076c84972449f806348074448fc11_tplv-k3u1fbpfcp-zoom-1.png)
******
#### 4.组件配置
- 配置uview
1. 在**App.vue**中引入uview的scss
![](https://img.javadog.net/blog/example-uniapp/d5419b3eebeb4ecaa4f50b5393ef2968_tplv-k3u1fbpfcp-zoom-1.png)
2. 在**main.js**中引入uview
```js
import uView from 'uview-ui'
Vue.use(uView)
```
![](https://img.javadog.net/blog/example-uniapp/a00d0618edf24a35a247eb8e8d3aad84_tplv-k3u1fbpfcp-zoom-1.png)

3. 将根路径下**uni.scss**中，将uview的theme.scss 覆盖uniapp默认内置样式
```css
/* uni.scss */
@import 'uview-ui/theme.scss';
```
![](https://img.javadog.net/blog/example-uniapp/4bf6afd940014b2a9f483e80fa42d91b_tplv-k3u1fbpfcp-zoom-1.png)

4. 在pages.json中加入easycom
```json
"easycom": {
			"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
```
![](https://img.javadog.net/blog/example-uniapp/6bd166eaa8d74dafb7878d7e05ebea92_tplv-k3u1fbpfcp-zoom-1.png)

5. 加入uview组件，在/pages/index/index.vue加入简单button组件
```html
<u-button type="primary" text="测试"></u-button>
```
![](https://img.javadog.net/blog/example-uniapp/17ab753e5a9045d992d2e80acc1e94c2_tplv-k3u1fbpfcp-zoom-1.png)

6. 启动项目，测试是否引入成功
点击【运行】=》【运行到浏览器】=》【chrome】，打开显示button即为成功

![](https://img.javadog.net/blog/example-uniapp/7fb2b78b2a2a4ec0a78a0acc24ec8812_tplv-k3u1fbpfcp-zoom-1.png)

![](https://img.javadog.net/blog/example-uniapp/8e56a7c79e3f47f3830db989a6699118_tplv-k3u1fbpfcp-zoom-1.png)
******
- 配置moment

1. 在**main.js**中引入moment

```js
// 引入moment
import moment from 'moment';
// 挂载到vue原型上，全局注册
Vue.prototype.$moment = moment;
```
![](https://img.javadog.net/blog/example-uniapp/329fa3812b234c14adb81126cf4e7027_tplv-k3u1fbpfcp-zoom-1.png)

2. /pages/index/index.vue中引入moment，调试组件

```html
<h3>{{$moment(new Date()).format('yyyy-MM-DD HH:mm:ss')}}</h3>
```

![](https://img.javadog.net/blog/example-uniapp/cf41728ea34044ec9bf7176fae323c99_tplv-k3u1fbpfcp-zoom-1.png)

3. 查看页面是否引入moment成功

![](https://img.javadog.net/blog/example-uniapp/510ff1ffa4a54c038c06c2fcfa6d2bde_tplv-k3u1fbpfcp-zoom-1.png)
******
 #### 5.函数封装
- 环境变量
> 实际项目会分很多环境，如dev开发环境、local本地环境、prod生产环境等，针对不同环境，其中配置也有不同

在根路径下新建common/config文件包，在包中新建env.js

```js
// prod-生产 dev-开发 local-本地
const env = "local"
// contextPath路径
const contextPath = "example/v1"

const prod = {
	baseUrl: `https://localhost:9001/${contextPath}`, // 线上环境'
}
const dev = {
	baseUrl: `http://localhost:7001/${contextPath}`, // 开发环境'
}
const local = {
	baseUrl: `http://localhost:8001/${contextPath}`, // 测试环境'
}

const config = {
	dev,
	prod,
	local,
}
export default config[env]

```
![](https://img.javadog.net/blog/example-uniapp/4fb543d4425d4bbd872092a7b93712fd_tplv-k3u1fbpfcp-zoom-1.png)
挂载vue原型，全局注册config
```js
import config from '@/common/config/env.js'
Vue.prototype.$config = config;
```


- Http请求
> 通常将项目中与后台交互中Http请求做封装

因本项目采用**uview**为UI组件库，内置很多API函数，直接摘取成熟框架中函数封装即可，如Http请求
[https://www.uviewui.com/js/http.html](https://www.uviewui.com/js/http.html)

![](https://img.javadog.net/blog/example-uniapp/26aecdd1cc064e7c8a747d75dfe9b5a3_tplv-k3u1fbpfcp-zoom-1.png)

 新建\common\http包，在包中新建request.js
```js
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
import env from '@/common/config/env.js'
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = env.baseUrl; /* 根域名 */
        config.custom = { catch: true, auth: true }
        return config
    })

    // 请求拦截
    uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
        uni.showLoading({
            title: '加载中'
        });
        // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
        config.data = config.data || {}
        // 根据custom参数中配置的是否需要token，添加对应的请求头
        if(config?.custom?.auth) {
            // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
            //config.header['Access-Token'] = vm.$store.state.token
            config.header['Access-Token'] = uni.getStorageSync("access_token")
        }
        return config
    }, config => { // 可使用async await 做异步操作
        return Promise.reject(config)
    })

    // 响应拦截
    uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
        const data = response.data
        // 自定义参数
        const custom = response.config?.custom
        if (data.code !== 200) {
            // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
            if (custom.toast !== false) {
                uni.$u.toast(data.message)
            }
            // 如果是401授权异常则跳转登录
            if(401 == data.code){
                uni.removeStorageSync("Access-Token")
                uni.removeStorageSync("userInfo")
                setTimeout(()=>{
                    uni.navigateTo({
                        url: '/pages/login/index'
                    });
                },1000)
            }
            // 如果需要catch返回，则进行reject
            if (custom?.catch) {
                return Promise.reject(data)
            } else {
                // 否则返回一个pending中的promise，请求不会进入catch中
                return new Promise(() => { })
            }
        }
        uni.hideLoading();
        return data === undefined ? {} : data
    }, (response) => {
        // 对响应错误做点什么 （statusCode !== 200）
        uni.$u.toast("工程师被UFO带走了-_-!");
        return Promise.reject(response)
    })
}

```
![](https://img.javadog.net/blog/example-uniapp/0311ea40bcd6462284eb61026c90014a_tplv-k3u1fbpfcp-zoom-1.png)

> 引入请求封装，将app参数传递到配置中
```js
// 引入请求封装，将app参数传递到配置中
require('@/common/http/request.js')(app)
```
![](https://img.javadog.net/blog/example-uniapp/fe49721a22634cb49e1f4209e374d53c_tplv-k3u1fbpfcp-zoom-1.png)
******
- API接口
> 通常将项目中与后台交互的api接口统一管理

新建\common\api包，在包中新建index.js，其中举例login接口

```js
const http = uni.$u.http
const api = {
    /**
     * 登录
     */
    login(params) {
        return http.get('/login', {params})
    },
}

export default api;

```
![](https://img.javadog.net/blog/example-uniapp/12206fcc9fa045dbacc0033aa67cb0d8_tplv-k3u1fbpfcp-zoom-1.png)


> 挂载vue原型，全局注册api
```js
import api from "@/common/api"
Vue.prototype.$api = api;
```
![](https://img.javadog.net/blog/example-uniapp/0c9941f51f69466d9efc9c7e2276ddb9_tplv-k3u1fbpfcp-zoom-1.png)


- 最终调试

在/pages/index/index.vue加入简单交互，点击按钮调用接口

![](https://img.javadog.net/blog/example-uniapp/0fdb5b9e77ab473eaf654959b00e7260_tplv-k3u1fbpfcp-zoom-1.png)

接口调用成功，返回值打印

![](https://img.javadog.net/blog/example-uniapp/35a46d7cff1848349d6ca55b2122ee52_tplv-k3u1fbpfcp-zoom-1.png)

调试成功后，即可根据业务需求填充内容，丰富页面，迭代开发
******

### 😋补充
以上流程均是**本狗常用流程**，**不代表标准**，大家可以根据习惯自行调整，UI或工具选择，挑选完全**依赖于功能**，**适合自己的才是最好的**。再啰嗦一句，本狗还是喜欢采用**webstorm**进行开发，然后用HBuilderX进行编译，个人喜好，只是推荐。

## 总结
本文旨在通过本狗平时项目**开发习惯**，总结出一套搭建uniapp的常用流程。其实重点在于对**官网文档**的理解，不管什么项目，什么框架，只要**吃透文档**，任何常见的疑难问题都会迎刃而解。希望广大博友们在奋笔疾书的搬砖的同时，一定注重**官网文档**的**翻阅和总结**。

![](https://img.javadog.net/blog/example-uniapp/483fac50bf5c4161bed707bf60ced530_tplv-k3u1fbpfcp-zoom-1.jpg)


| JavaDog| 狗屋地址 |
| :----:| :----: | 
| 个人博客 | [https://www.javadog.net](https://www.javadog.net) | 
| 公众号 | [https://mp.weixin.qq.com/s/_vgnXoQ8FSobD3OfRAf5gw](https://mp.weixin.qq.com/s/_vgnXoQ8FSobD3OfRAf5gw) | 
| CSDN  | [https://blog.csdn.net/baidu_25986059](https://blog.csdn.net/baidu_25986059) | 
| 掘金 | [https://juejin.cn/user/2172290706716775](https://juejin.cn/user/2172290706716775)| 
| 知乎 | [https://www.zhihu.com/people/JavaDog](https://www.zhihu.com/people/JavaDog) | 
| 简书| [https://www.jianshu.com/u/1ff9c6bdb916](https://www.jianshu.com/u/1ff9c6bdb916) | 
| gitee|[https://gitee.com/javadog-net](https://gitee.com/javadog-net)  | 
| GitHub|[https://github.com/javadog-net](https://github.com/javadog-net)| 
