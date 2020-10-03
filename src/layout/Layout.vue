<template>
  <el-container>
    <el-header>
      <div class="logo"/>
      <el-menu
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
      >
        <el-menu-item
            v-for="(value, name, index) in routes"
            :key="'/' + name"
            :index="`${index}`"
        >
          <router-link :to="'/' + name">
            {{ value.name }}
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-row>
        <el-col>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <router-view/>
        </el-col>
      </el-row>
      <UpdateTips/>
    </el-main>
    <!--      <el-aside>-->
    <!--        aside-->
    <!--      </el-aside>-->
    <el-footer>
      foot
    </el-footer>
  </el-container>
</template>

<script>
import config from "@/config";
import UpdateTips from "@/components/UpdateTips";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import ElementUI from "element-ui";

Vue.use(ElementUI);

export default {
  name: "Layout",
  components: {UpdateTips},
  watch: {
    $route() {
      this.refreshTitle();
    }
  },
  methods: {
    refreshTitle() {
      const {title, subTitle} = this.$route.meta;
      if (title !== undefined) {
        this.title = title;
      }
      if (subTitle !== undefined) {
        this.subTitle = subTitle;
      }
      this.activeRoute = this.$route.fullPath;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  data() {
    return {
      collapsed: false,
      title: "",
      activeRoute: "",
      subTitle: "",
      routes: {...config.routes}
    };
  }
};
</script>

<style scoped>
.logo {
  /*width: 120px;*/
  width: 200px;
  height: 64px;
  /*height: 31px;*/
  /*background: rgba(255, 255, 255, 0.2);*/
  /*margin: 16px 28px 16px 0;*/
  float: left;
}
</style>
