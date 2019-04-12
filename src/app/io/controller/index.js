'use strict';
const Controller = require('egg').Controller;

class indexController extends Controller {
    async pushMsg() {
        const { ctx, app } = this;
        const message = ctx.args[0] || {};
        const socket = ctx.socket;
        socket.nsp.to('oo').emit('publish', message);
    }
}

module.exports = indexController