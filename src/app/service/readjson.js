const { Service } = require('egg')
const util = require('util');
const fs = require('fs');
const readfile = util.promisify(fs.readFile);
const path = require('path');
const rp = require('request-promise')

class RjService extends Service {
    constructor(ctx) {
        super(ctx);
    }

    async rj() {
        ///读取json文件，获取json字符串
        let fileStr = await readfile(path.resolve(__dirname, "./test.json"));
        return JSON.parse(fileStr);     ///将json字符串转化为json对象并返回
    }

    async pullFromServer(){
        const options = {
            method: 'GET',
            url: `https://c.shaobaogu.com.cn/api/haohuasun/getdata.php?id=4`,
          }
        
          return rp(options).catch((err) => {
            throw new VError({
              name: 'server pull error',
              cause: err
            }, `api服务器错误`)
          })
    }
}

module.exports = RjService;