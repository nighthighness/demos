
#### --> 用户自定义文档 以下为我写的demo的文档说明
使用： 
 安装 ： packagejson 文件所在路径下 npm i 
 查看 ： 安装后 查看packagejson 各项 依赖是否 齐备，否则执行一下 npm i
 

#### mockjs 安装 npm i mockjs -S
    mockjs 数据模拟
    mockjs 文档 https://github.com/nuysoft/Mock/wiki

#### iconfont 使用方式
iconfont 字体图标库 
iconfont 官方地址 https://www.iconfont.cn/
使用方法：
    三种方式：此处使用第三种：symobl 方式
    添加图标至我的项目
    1.下载文件至 本地
    保留 iconfont.js 放至 assets/iconfont 文件夹下
    
    2.iconfont 文件夹下 新建 iconfont.css
    复制 初始代码

    3.在组件中使用：
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#复制类名"></use>
     </svg>


#### Bscroll 使用 npm i better-scroll -S
    组件 Bscroll
    官方文档 https://github.com/ustbhuangyi/better-scroll

    better-scroll 列表在固定宽高的视图层内自由滚动
    注意：坑多

    在需要使用的组件内引入：
    BScroll 组件 滚动视图列表
    1. import 加载
    
    2. 注意 样式层书写方式！！！
    外层 wrapper 视图层需要 设置固定高度/或百分比，设置overflow:hidden 必须设置！否则内层拿不到外层高度，或与内层高度一致，无法滚动！
    
    3. 定义newScroll 函数，根据官方文档，生成 scroll
    当前滚动生成后，调用 刷新，否则视图层 列表 无法 滚动

    4. 异步请求拿到数据  this.$nextTick() 更新视图层

    5. 视图层 img 定义onload 事件(js原生)，vue 中调用 @load ，一旦 img 加载，更新 scroll ---> 此项在数据异步加载必须使用，否则 scroll 无法拿到 dom ，无法滚动！

    6. 如果不使用异步，可不监听，newScroll函数可在mounted 中进行挂载

#### vue-awesome-swiper 使用 安装 npm i vue-awesome-swiper -S
组件 carouse
#### npm i swiper -S --> 引用swiper 样式，不安装要报错
     vue-awesome-swiper 轮播图 https://github.com/surmon-china/vue-awesome-swiper
     swiper 文档 https://swiper.com.cn/


#### webStorage : sessiongStorage \ localStorage
组件： views/ SetStorage / GetStorage

sessionStorage 会话缓存： 窗口关闭，数据丢失
localStorage 永久缓存： 手动清除，数据才会 消失

设置数据：setItem('key',value)
获取数据：getItem('key') 

webStorage 只能使用 字符串 进行存储
所以必须使用 JSON.stringify()  JSON.parse() 进行数据格式转换

清空数据： clear()
清除某个键值对： removeItem()

#### vuex 
官方文档：https://vuex.vuejs.org/zh/guide/
vuex 四个属性
state  保存当前 初始状态
mutations 提交修改的数据
getters 获取当前 store 中的 数据
actions 可进行异步请求，对 mutation 进行 提交 修改
modules
mapState \ mapMutations \ mapGetters \ mapActions  语法糖，映射、解构，可使用 this.xxx 进行操作

组件 user/vxdemo

#### pages