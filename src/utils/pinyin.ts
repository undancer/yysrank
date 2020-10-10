/* eslint-disable */
// @ts-ignore
import py from "pinyin";
/* eslint-enable */

const pinyin = (input: string) =>
  py(input, { style: 0 })
    .flat()
    .join("");

export default pinyin;
