import { Component, Prop, Vue } from "vue-property-decorator";
import { HeroTable } from "@/data";
import _ from "lodash";
import pinyin from "@/utils/pinyin";

@Component
export default class HeroSelect extends Vue {
  @Prop({ default: "" }) placeholder!: string;

  protected render() {
    return (
      <el-cascader
        placeholder={this.placeholder}
        options={this.$data.options}
        filterable={true}
        filter-method={this.onFilter}
        onChange={this.handleChange}
        show-all-levels={false}
        size={"medium"}
      />
    );
  }

  data() {
    const mapper: { [key: string]: string } = {
      "2": "N",
      "3": "R",
      "4": "SR",
      "5": "SSR",
      "6": "SP"
    };

    const heroTable = HeroTable();
    let options: any[] = _.entries(
      _.groupBy(
        _.values(heroTable),
        ({ rarity }: { rarity: string }) => rarity || "_"
      ) // 将式神数据按位阶分组
    );
    options = _.filter(options, ([key]) => key !== "_"); // 不显示没有位阶的阴阳师

    options = _.map(options, ([key, values]) => {
      // 将式神数据处理成下拉选择器所需要的格式
      const children = _.map(values, (
        { id, name, icon }: { id: string; name: string; icon: string } // 只读取式神的id，名字和图标
      ) => ({
        label: name,
        value: id,
        icon
      }));

      return {
        label: mapper[key],
        value: key,
        children
      };
    });

    options = _.sortBy(options);
    options = _.reverse(options); // 降序排序

    return { options };
  }

  handleChange(values: any) {
    const value = Array.from(values).pop();
    this.$emit("change", value); // 向上抛出事件
  }

  onFilter(node: any, keyword: string) {
    return (
      node.label.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
      pinyin(node.label.toLowerCase()).indexOf(keyword.toLowerCase()) > -1
    );
  }
}
