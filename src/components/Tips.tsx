import {Component, Vue} from "vue-property-decorator";
import config from "@/config";
import moment from "moment";
import {HeroBattleTable} from "@/data";
import "./Tips.scss";

@Component
class Tips extends Vue {
  created() {
    this.updateTips();
  }

  protected render() {
    return <div/>;
  }

  renderUpdate() {
    const length = HeroBattleTable().data.length;
    return (
        <div>
          <h3>{config.update}</h3>
          <ul>
            <li>
              数据更新：更新了{config.range}式神排行榜及{length}场斗技数据。
            </li>
          </ul>
        </div>
    );
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
      this.$msgbox({
        title: "Update",
        type: "info",
        customClass: "app-message",
        message: this.renderUpdate(),
        callback: () => {
          this.handleDone();
        }
      });
    }
  }
}

export default Tips;
