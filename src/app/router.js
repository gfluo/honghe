'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  app.io.of('/default').route('action', app.io.controller.index.pushMsg);
};
