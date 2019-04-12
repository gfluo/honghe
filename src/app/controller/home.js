'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let jsonObj = await this.ctx.service.readjson.rj();   ///读取json文件

    await this.ctx.render('index',{
      title: jsonObj.title
    });

  }
}

module.exports = HomeController;
