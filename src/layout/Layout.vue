<template>
  <el-container>
    <el-header height="64px" style="padding: 0px;">
      <div class="logo"/>
      <el-menu
          mode="horizontal"
          background-color="#001529"
          text-color="hsla(0,0%,100%,.65)"
          active-text-color="#1890ff"
          :default-active="activeRoute"
          :router="true"
      >
        <el-menu-item
            v-for="(value, name) in routes"
            :key="`/${name}`"
            :index="`/${name}`"
        >
          {{ value.name }}
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <!--      <el-aside width="200px">-->
      <!--        <el-main>-->
      <!--          aside-->
      <!--        </el-main>-->
      <!--      </el-aside>-->
      <el-main>
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <h3>{{ title }}</h3>
            <span>{{ subTitle }}</span>
          </div>
          <router-view/>
        </el-card>
        <UpdateTips/>
      </el-main>
    </el-container>
    <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
import config from "@/config";
import UpdateTips from "@/components/UpdateTips";
import Footer from "@/layout/Footer";

export default {
  name: "Layout",
  components: {
    UpdateTips,
    Footer
  },
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

.el-main {
  min-height: calc(100vh - 120px);
  /*120px是header+footer的高度之和（按实际情况改）*/
}
</style>
