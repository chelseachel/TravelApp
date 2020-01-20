# travelapp
Vue3.0 开发去哪儿网单页面应用 (SPA)<br>
（去哪儿网景点门票核心页面）<br>

* 引用到的第三方文件：
   * reset.css
  * border.css
  * fastclick
  * vue-awesome-swiper

## 前期准备：
* 配置router路由
* 项目代码初始化：
  * reset.css
  * border.css
  * fastclick

## Commit header
完成header区域<br>
使用iconfont<br>
* 采用stylus写css
  * variables.styl
  * mixins.styl  // CSS封装

## Commit swiper
实现首页轮播图<br>
使用vue-awesome-swiper<br>
‘>>>’ 在<style scoped>下实现CSS样式穿透<br>

## Commit icons
实现图标区域的布局<br>
数据分页逻辑：通过计算把每8个图标分配到一个页面<br>
分页通过swiper展示<br>

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
