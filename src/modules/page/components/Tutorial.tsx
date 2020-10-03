/* eslint-disable */
// @ts-ignore
import tutorials from "@/modules/tutorials";
import Page from "@/modules/page/components/Page";
import { Component, Vue } from "vue-property-decorator";

@Component
class MoreTools extends Vue {
  protected render() {
    // @ts-ignore
    return <Page contents={tutorials} />;
  }
}

export default MoreTools;
