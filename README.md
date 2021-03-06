# TravelApp
## Vue开发去哪儿网单页面应用 (SPA)<br>
去哪儿网景点门票核心页面

### 初始化：
* 配置router路由
* 项目代码初始化：
  * reset.css
  * border.css
  * fastclick

### Home header
* 完成首页header区域<br>
* 使用iconfont<br>
* 采用stylus写css
  * variables.styl
  * mixins.styl  // CSS封装
* 在 vue.config.js 中配置了路径名的简写替换

### Home swiper
* 实现首页轮播图<br>
* 使用vue-awesome-swiper<br>
* ‘>>>’ 在<style scoped>下实现CSS样式穿透<br>

### Home icons
* 实现首页图标区域的布局<br>
* 数据分页逻辑：通过计算把每8个图标分配到一个页面<br>
* 分页通过swiper展示<br>

### Home featured
* 实现首页猜你喜欢组件开发<br>
* 实现首页周末去哪儿组件开发<br>

### Ajax获取首页数据
* axios实现数据（模拟数据）请求：<br>
  * 在 vue.config.js 中配置:<br>
  利用vue中webpack-dev-server提供的proxy代理功能，转发数据请求（把对/api下面json文件的请求路径替换至本地的模拟数据文件夹下）<br>
  * 记得在 .gitignore 文件中添加模拟数据的文件夹路径
* 将home组件所获取的json数据分发到每个子组件，实现首页父子组件传值

### City header
* 完成City页面header与搜索框的布局

### City list
* 城市列表布局
* 结合BetterScroll插件实现列表滚动效果
  * 通过 $refs 获取用ref属性注册的DOM对象
* axios获取页面动态数据
* 字母表定位
  * 兄弟组件间联动
  * watch属性里侦听字母点击的变化
* 监听字母表滑动事件
  * 函数节流，设定timer控制函数执行频率

### 搜索逻辑
* 匹配输入文字 v-model=“keyword”
* 没有匹配数据的时候显示提示

### Vuex
* 数据存储在 this.$store.state 里
* 点击列表会把数据传给Vuex的store，通过commit方法调用mutations去改变数据
* 点击列表城市时页面跳转回到首页
  * this.$router.push('/')
* localStorage本地存储（html5提供的api，实现类似cookie的功能）
* js内容拆分
* 使用mapState和mapMutations辅助函数映射store里的数据

### 使用\<keep-alive>缓存内容，避免页面反复渲染
* 组件被激活时，会触发activated生命周期钩子函数
* 判断城市是否改变，若改变则重新发送ajax请求

### Detail banner & header
* 画廊组件拆分
  * CSS样式穿透修改swiper元素的属性
  * 另创建过渡动画组件，内部slot，为画廊组件添加opacity过渡效果
* Header随滚动改变opacity，实现渐隐渐显效果
* 在beforeDestroy钩子中对全局对象事件进行解绑

### Detail list
* 使用递归组件实现列表

### Detail comments
* 评论组件拆分
  * 组件收起/展开状态切换：根据条件切换元素class的绑定对象（三元表达式）
  * 绑定父组件中的动态数据

### 实现部分页面滚动历史
通过为路由定义的meta字段，实现在hash模式下返回到上次滚动位置<br>




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

