/* eslint-disable @typescript-eslint/member-delimiter-style */
interface Config {
    update: string,
    range: string,
    routes: {
        [key: string]: {}
    },
}

const config: Config = {
    update: '09/28/2020',
    range: '09/21-09/27',
    routes: {
        'win-rate': {
            name: '阵容胜率排行',
        },
        'rank': {
            name: '排行榜',
        },
        'recommend': {
            name: '模拟翻牌',
        },
        'more-tools': {
            name: '攻略&工具导航',
        },
        'tutorial': {
            name: '食用指南',
        },
    },
}
export default config;
