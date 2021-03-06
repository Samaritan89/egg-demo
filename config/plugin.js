'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  handlebars: {
    enable: true,
    package: 'egg-view-handlebars',
  },
  mysql: {
    enable: false,
    package: 'egg-mysql',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
};
