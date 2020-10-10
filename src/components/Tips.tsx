import { Component, Vue } from "vue-property-decorator";
import config from "@/config";
import moment from "moment";
import { HeroBattleTable } from "@/data";

@Component
class Tips extends Vue {
  protected render() {
    // const modalOptions: ModalOptions = {};
    this.updateTips();
    return;
  }

  handleDone() {
    this.$cookies.set(
      "last_updated",
      config.update,
      moment()
        .add(1000, "days")
        .toDate()
    );
  }

  updateTips() {
    if (this.$cookies.get("last_updated") !== config.update) {
      const h = this.$createElement;
      const length = HeroBattleTable().data.length;
      this.$info({
        width: "36%",
        maskClosable: true,
        title: "Update",
        content: h("div", {}, [
          h("h3", config.update),
          h("ul", {}, [
            h(
              "li",
              `数据更新：更新了${config.range}式神排行榜及${length}场斗技数据。`
            )
          ])
        ]),
        onOk: this.handleDone,
        onCancel: this.handleDone
      });
    }
  }
}

export default Tips;
