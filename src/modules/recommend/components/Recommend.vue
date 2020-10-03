<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <vue-tags-input
            v-model="tag"
            :tags="tags"
            :autocomplete-items="filteredItems"
            @tags-changed="newTags => (tags = newTags)"
            :avoid-adding-duplicates="false"
            :is-duplicate="() => false"
            placeholder="请选择式神..."
            :separators="[';', ',']"
        />
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6" style="margin: 20px">
        <el-row>
          <el-col :span="4" style="padding: 8px;">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="fetchHero(thisBan).image" class="image"/>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col
              :span="4"
              v-for="(o, index) in thisTeam"
              :key="index"
              style="background-color: cornflowerblue;padding: 8px;"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="fetchHero(o).image" class="image"/>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <ul
                class="infinite-list"
                v-infinite-scroll="load"
                style="overflow:auto"
            >
              <li v-for="i in count" :key="i" class="infinite-list-item">
                {{ i }}
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" style="margin: 20px">
        <el-row>
          <el-col :span="4" style="padding: 8px;">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="fetchHero(thatBan).image" class="image"/>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col
              :span="4"
              v-for="(o, index) in thatTeam"
              :key="index"
              style="background-color: #dc3545;padding: 8px;"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img :src="fetchHero(o).image" class="image"/>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <ul
                class="infinite-list"
                v-infinite-scroll="load"
                style="overflow:auto"
            >
              <li v-for="i in count" :key="i" class="infinite-list-item">
                {{ i }}
              </li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import ElementUI from "element-ui";
import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import {HeroTable} from "@/data";

Vue.use(ElementUI);

export default {
  name: "Recommend",
  components: {
    VueTagsInput
  },
  data() {
    return {
      tag: "",
      tags: [
        {text: "ban:鬼王酒吞童子", style: "background-color: #ccc"},
        {text: "ban:星熊童子", style: "background-color: #ccc"},
        {text: "不知火"},
        {text: "化鲸"},
        {text: "化鲸"},
        {text: "八岐大蛇"},
        {text: "大岳丸"},
      ],
      count: 0,
      thisBan: 341,
      thatBan: 342,
      thisTeam: [11, 330, 324, 324, 325, 333],
      thatTeam: [12, 316, 297, 304, 326, 346],
      autocompleteItems: [
        {
          text: "Spain"
        },
        {
          text: "France"
        },
        {
          text: "USA"
        },
        {
          text: "Germany"
        },
        {
          text: "China"
        }
      ]
    };
  },
  methods: {
    fetchHero(id) {
      const hero = HeroTable()[id];
      // return {image: hero.icon_with_name || hero.icon};
      return {image: hero.icon};
    },
    load() {
      if (this.count < 20) {
        this.count += 2;
      }
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    }
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

/*!* style the background and the text color of the input ... *!*/
/*.vue-tags-input {*/
/*  background: #324652;*/
/*}*/

/*.vue-tags-input .ti-new-tag-input {*/
/*  background: transparent;*/
/*  color: #b7c4c9;*/
/*}*/

/*.vue-tags-input .ti-input {*/
/*  padding: 4px 10px;*/
/*  transition: border-bottom 200ms ease;*/
/*}*/

/*!* we cange the border color if the user focuses the input *!*/
/*.vue-tags-input.ti-focus .ti-input {*/
/*  border: 1px solid #ebde6e;*/
/*}*/

/*!* some stylings for the autocomplete layer *!*/
/*.vue-tags-input .ti-autocomplete {*/
/*  background: #283944;*/
/*  border: 1px solid #8b9396;*/
/*  border-top: none;*/
/*}*/

/*!* the selected item in the autocomplete layer, should be highlighted *!*/
/*.vue-tags-input .ti-item.ti-selected-item {*/
/*  background: #ebde6e;*/
/*  color: #283944;*/
/*}*/

/*!* style the placeholders color across all browser *!*/
/*.vue-tags-input ::-webkit-input-placeholder {*/
/*  color: #a4b1b6;*/
/*}*/

/*.vue-tags-input ::-moz-placeholder {*/
/*  color: #a4b1b6;*/
/*}*/

/*.vue-tags-input :-ms-input-placeholder {*/
/*  color: #a4b1b6;*/
/*}*/

/*.vue-tags-input :-moz-placeholder {*/
/*  color: #a4b1b6;*/
/*}*/

/*!* default styles for all the tags *!*/
/*.vue-tags-input .ti-tag {*/
/*  position: relative;*/
/*  background: #ebde6e;*/
/*  color: #283944;*/
/*}*/

/*!* we defined a custom css class in the data model, now we are using it to style the tag *!*/
/*.vue-tags-input .ti-tag.custom-class {*/
/*  background: transparent;*/
/*  border: 1px solid #ebde6e;*/
/*  color: #ebde6e;*/
/*  margin-right: 4px;*/
/*  border-radius: 0px;*/
/*  font-size: 13px;*/
/*}*/

/*!* the styles if a tag is invalid *!*/
/*.vue-tags-input .ti-tag.ti-invalid {*/
/*  background-color: #e88a74;*/
/*}*/

/*!* if the user input is invalid, the input color should be red *!*/
/*.vue-tags-input .ti-new-tag-input.ti-invalid {*/
/*  color: #e88a74;*/
/*}*/

/*!* if a tag or the user input is a duplicate, it should be crossed out *!*/
/*.vue-tags-input .ti-duplicate span,*/
/*.vue-tags-input .ti-new-tag-input.ti-duplicate {*/
/*  text-decoration: line-through;*/
/*}*/

/*!* if the user presses backspace, the complete tag should be crossed out, to mark it for deletion *!*/
/*.vue-tags-input .ti-tag:after {*/
/*  transition: transform 0.2s;*/
/*  position: absolute;*/
/*  content: "";*/
/*  height: 2px;*/
/*  width: 108%;*/
/*  left: -4%;*/
/*  top: calc(50% - 1px);*/
/*  background-color: #000;*/
/*  transform: scaleX(0);*/
/*}*/

/*.vue-tags-input .ti-deletion-mark:after {*/
/*  transform: scaleX(1);*/
/*}*/
</style>
