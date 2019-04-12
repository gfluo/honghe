const { Service } = require('egg')
const util = require('util');
const fs = require('fs');
const readfile = util.promisify(fs.readFile);
const path = require('path');

class RjService extends Service {
    constructor(ctx) {
        super(ctx);
    }

    async rj() {
        ///读取json文件，获取json字符串
        let fileStr = await readfile(path.resolve(__dirname, "./test.json"));
        return JSON.parse(fileStr);     ///将json字符串转化为json对象并返回
    }
}

module.exports = RjService;