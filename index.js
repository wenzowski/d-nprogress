var path = require('path');
var nprogress = require('nprogress');

module.exports = function(app, options) {
  app.loadStyles(path.resolve(__dirname, 'node_modules/nprogress/nprogress.css'));
  app.on('ready', ready);

  function ready() {
    nprogress.configure(options);
    app.on('route', route);
    app.on('render', render);
  }

  function route() {
    nprogress.start();
  }

  function render() {
    nprogress.done();
  }
};

