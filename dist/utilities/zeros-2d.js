'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zeros2d;

var _zeros = require('./zeros');

var _zeros2 = _interopRequireDefault(_zeros);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function zeros2d(width, height) {
  var result = new Array(height);
  for (var y = 0; y < height; y++) {
    result[y] = (0, _zeros2.default)(width);
  }
  return result;
}
//# sourceMappingURL=zeros-2d.js.map