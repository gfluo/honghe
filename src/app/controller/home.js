'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let jsonObj = await this.ctx.service.readjson.pullFromServer();   ///读取json文件
    jsonObj = JSON.parse(jsonObj);
    await this.ctx.render('index',{
      title: jsonObj.message
    });

  }
}

module.exports = HomeController;
