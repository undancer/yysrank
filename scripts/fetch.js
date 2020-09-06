'use strict';

const get = (url, callback) => {
    const https = require('https');
    let content = '';
    https.get(url, function (res) {
        res.on('data', function (data) {
            content += data;
        });
        res.on('end', function () {
            callback(JSON.parse(content));
        });
    })
};

get('https://s.166.net/config/bbs_yys/shishen.json', function (data) {
    let json = {
        "10": {
            "id": 10,
            "name": "晴明",
            "icon": "https://g.166.net/assets/img/yys/yys/10.jpg"
        },
        "11": {
            "id": 11,
            "name": "神乐",
            "icon": "https://g.166.net/assets/img/yys/yys/11.jpg"
        },
        "12": {
            "id": 12,
            "name": "八百比丘尼",
            "icon": "https://g.166.net/assets/img/yys/yys/12.jpg"
        },
        "13": {
            "id": 13,
            "name": "源博雅",
            "icon": "https://g.166.net/assets/img/yys/yys/13.jpg"
        },
    };
    Object.assign(json, data);
    const fs = require('fs')
    let path = "./data/shishen.json";
    fs.writeFileSync(path, JSON.stringify(json), {flag: 'w'})
});
