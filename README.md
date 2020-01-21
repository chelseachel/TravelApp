# TravelApp
## Vue3.0 开发去哪儿网单页面应用 (SPA)<br>
去哪儿网景点门票核心页面

### 前期准备：
* 配置router路由
  * Vue-cli 3.0自行创建一个router.js
* 项目代码初始化：
  * reset.css
  * border.css
  * fastclick

### Commit header
* 完成首页header区域<br>
* 使用iconfont<br>
* 采用stylus写css
  * variables.styl
  * mixins.styl  // CSS封装
* 在 vue.config.js 中配置了路径名的简写替换

### Commit swiper
* 实现首页轮播图<br>
* 使用vue-awesome-swiper<br>
* ‘>>>’ 在<style scoped>下实现CSS样式穿透<br>

### Commit icons
* 实现首页图标区域的布局<br>
* 数据分页逻辑：通过计算把每8个图标分配到一个页面<br>
* 分页通过swiper展示<br>

### Commit featured
* 实现首页猜你喜欢组件开发<br>
* 实现首页周末去哪儿组件开发<br>

### Ajax获取首页数据
* axios实现数据（模拟数据）请求：<br>
  * 利用vue中 webpack-dev-server 提供的proxy代理功能，在 vue.config.js 中配置，转发数据请求（把对 /api 下面json文件的请求路径替换至本地的模拟数据文件夹下）<br>
记得在 .gitignore 文件中添加模拟数据的文件夹路径
* 将home组件所获取的json数据分发到每个子组件，实现首页父子组件传值

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
