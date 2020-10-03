/* eslint-disable */
// @ts-ignore
import tools from "@/modules/more-tools";
import Page from "@/modules/page/components/Page";
import { Component, Vue } from "vue-property-decorator";

@Component
class MoreTools extends Vue {
  protected render() {
    // @ts-ignore
    return <Page contents={tools} />;
  }
}

export default MoreTools;
