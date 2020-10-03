import { Component, Prop, Vue } from "vue-property-decorator";

interface MDInterface {
  attributes: {
    title: string;
  };
  html: string;
}

@Component
class Page extends Vue {
  @Prop({ required: true }) contents: Array<MDInterface> | undefined;
  @Prop({ default: 1 }) activeKey: number | undefined;

  protected render() {
    const list = this.contents
      ? this.contents.map(({ attributes: { title }, html }, index) => (
          <el-collapse-item title={title} name={index + 1}>
            <div domPropsInnerHTML={html} />
          </el-collapse-item>
        ))
      : [];
    return <el-collapse value={this.activeKey}>{list}</el-collapse>;
  }
}

export default Page;
