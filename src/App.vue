<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <Layout />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/app.scss";
import Layout from "@/layout/Layout";

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {
  data() {
    return {
      metaInfo: {
        title: "My Example App",
        titleTemplate: "%s - Yay!",
        htmlAttrs: {
          lang: "en",
          amp: true
        }
      }
    };
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

body {
  background-color: #f0f2f5;
}
</style>
