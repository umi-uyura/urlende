(function() {
  'use strict';

  var commander = require('commander'),
      app = require('../package.json');

  commander
    .version(app.version)
    .usage('[-e|-d] url')
    .option('-e, --encode', 'URL encode')
    .option('-d, --decode', 'URL decode')
    .option('-c, --component', 'use encodeURIComponent or decodeURIComponent')
    .parse(process.argv);

  if ((commander.encode && commander.decode) || (!commander.encode && !commander.decode)) {
    console.log('please select either "-e" or "-d"');
    process.exit(1);
  }

  var url = commander.args[0];

  if (commander.encode) {
    if (commander.component) {
      console.log(encodeURIComponent(url));
    } else {
      console.log(encodeURI(url));
    }
  }

  if (commander.decode) {
    if (commander.component) {
      console.log(decodeURIComponent(url));
    } else {
      console.log(decodeURI(url));
    }
  }
})();
