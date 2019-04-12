`use strict`;
module.exports = () => {
    return async (ctx, next) => {   ///有新的连接进来
        const { app, socket } = ctx;
        socket.join('oo');  ///加入房间
        await next();
    }
}