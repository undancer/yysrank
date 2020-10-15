import { Component, Vue, Watch } from "vue-property-decorator";
import Footer from "@/layout/Footer";
import config from "@/config";
import Tips from "@/components/Tips";

import _ from "lodash";
import "./Layout.scss";
import { Route } from "vue-router";

@Component({
  components: {
    Tips,
    Footer
  }
})
class Layout extends Vue {
  title!: string;
  subTitle!: string;
  activatedRoute!: string;

  @Watch("$route")
  onRoute(route: Route) {
    const { fullPath, meta } = route;
    this.title = meta.title;
    this.subTitle = meta.subTitle;
    this.activatedRoute = fullPath;
  }

  render() {
    return (
      <el-container>
        <el-header id="app-header" height="64">
          {this.renderHeader()}
        </el-header>
        <el-container>
          <el-main>{this.renderMain()}</el-main>
        </el-container>
        <el-footer>{this.renderFooter()}</el-footer>
      </el-container>
    );
  }

  renderHeader() {
    const routes = _.map(config.routes, ({ name }: { name: string }, key) => (
      <el-menu-item key={`/${key}`} index={`/${key}`}>
        {name}
      </el-menu-item>
    ));

    return (
      <div>
        <div id="logo" />
        <el-menu
          mode="horizontal"
          background-color="#001529"
          text-color="hsla(0,0%,100%,.65)"
          active-text-color="#1890ff"
          default-active={this.activatedRoute}
          router={true}
        >
          {routes}
        </el-menu>
      </div>
    );
  }

  renderMain() {
    return (
      <div>
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <h3>{this.title}</h3>
            <span>{this.subTitle}</span>
          </div>
          <router-view />
        </el-card>
        <Tips />
      </div>
    );
  }

  renderFooter() {
    return <Footer />;
  }
}

export default Layout;
