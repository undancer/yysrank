/* eslint-disable */
import Hero from "@/components/Hero";
import { Component, Vue } from "vue-property-decorator";
import { HeroRankTable } from "@/data";

@Component({
  components: {
    Hero
  }
})
export default class Rank extends Vue {
  // @Prop({ default: 1 }) currentPage!: number;

  render() {
    // console.log(this.currentPage);

    const tables = Object.entries(HeroRankTable()).map(([, values]) => {
      const row = {};
      const columns = ["index", "point", "id", "win_rate", "use_rate", "count"];
      values.forEach((value, index) => {
        Object.assign(row, { [columns[index]]: value });
        if (columns[index] === "index") {
          Object.assign(row, { key: value });
        }
      });
      return row;
    });

    return (
      <div>
        <el-table data={tables} align={"center"}>
          <el-table-column label="#" prop="index" width="100" />
          <el-table-column
            prop="point"
            width="64"
            formatter={this.renderPoint}
          />
          <el-table-column
            label="式神"
            prop="id"
            min-width="240"
            formatter={this.renderHero}
          />
          <el-table-column
            label="外战胜率"
            prop="win_rate"
            width="200px"
            formatter={this.renderWinRate}
          />
          <el-table-column
            label="选用率"
            prop="use_rate"
            width="200px"
            formatter={this.renderUseRate}
          />
          <el-table-column label="外战次数" prop="count" width="100px" />
        </el-table>
        {/*<el-pagination*/}
        {/*  layout="prev, pager, next"*/}
        {/*  total={50}*/}
        {/*  style={{ float: "right" }}*/}
        {/*  background*/}
        {/*  on-current-change={this.handleCurrentChange}*/}
        {/*/>*/}
      </div>
    );
  }

  renderPoint(row: any, column: any, point: number) {
    if (typeof point === "string") {
      return <p style={{ color: "#007bff" }}>{point}</p>;
    } else if (typeof point === "number") {
      if (point > 0) {
        return (
          <p>
            <a-icon style={{ color: "#28a745" }} type="arrow-up" />
            {point}
          </p>
        );
      } else if (point < 0) {
        return (
          <p>
            <a-icon style={{ color: "#dc3545" }} type="arrow-down" />
            {Math.abs(point)}
          </p>
        );
      } else if (point == 0) {
        return (
          <p>
            <a-icon rotate={90} style={{ color: "#6c757d" }} type="pause" />
            {point}
          </p>
        );
      }
    }
  }

  renderHero(row: any, column: any, id: number) {
    return (
      <div>
        <Hero id={`${id}`} />
      </div>
    );
  }

  renderWinRate(row: any, column: any, rate: number) {
    return (
      <el-progress
        text-inside={true}
        stroke-width={16}
        percentage={this.toFixed(rate)}
      />
    );
  }

  renderUseRate(row: any, column: any, rate: number) {
    return (
      <el-progress
        text-inside={true}
        stroke-width={16}
        percentage={this.toFixed(rate * 100)}
      />
    );
  }

  // handleCurrentChange(currentPage: number, ...args: any) {
  //   console.log(args);
  //   this.currentPage = currentPage;
  // }

  toFixed(input: number) {
    return Number.parseFloat(input.toFixed(2));
  }
}
