const imagemin = require('imagemin');
const walk = require('walk');
const path = require('path');


module.exports = function (input, plugins) {
  let options = {
    listeners: {
      file: async(root, fileStats, next) => {
        if (fileStats.name.endsWith('png')) {
          let ouptutPath = path.join(input, path.dirname(fileStats.name));
          await imagemin([fileStats.name],ouptutPath, plugins);
        }
        next();
      }
    }
  };
  walk.walkSync(input, options);
}