
(function (modules) {
  // 创建一个require()函数: 它接受一个 模块ID 并在我们之前构建的模块对象查找它.
  function require(id) {
    const [fn, mapping] = modules[id];
    function localRequire(relativePath) {
      // 根据mapping的路径，找到对应的模块id
      return require(mapping[relativePath]);
    }
    const module = { exports: {} };
    // 执行每个模块的代码。
    fn(localRequire, module, module.exports);
    return module.exports;
  }
  // 执行入口文件，
  require(0);
})({
  0: [
    function (require, module, exports) {
      "use strict";

      var _message = _interopRequireDefault(require("./message.js"));

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      console.log(_message.default);
    },
    { "./message.js": 1 },
  ], 1: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _name = require("./name.js");

      var _default = "hello ".concat(_name.name, "!");

      exports.default = _default;
    },
    { "./name.js": 2 },
  ], 2: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.name = void 0;
      var name = 'world';
      exports.name = name;
    },
    {},
  ],
})
