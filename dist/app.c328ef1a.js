// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/model/currentDataActivity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentDataActivites = void 0;

var _variables = require("../variables");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CurrentDataActivites = /*#__PURE__*/function () {
  function CurrentDataActivites(name, price, volume, removeName) {
    _classCallCheck(this, CurrentDataActivites);

    this.name = name;
    this.price = price;
    this.volume = volume;
    this.removeName = removeName;
  }

  _createClass(CurrentDataActivites, [{
    key: "newObj",
    value: function newObj() {
      var newObject = {
        name: this.name,
        price: this.price,
        totalPrice: this.price,
        totalVolume: this.volume,
        quantity: 1
      };
      return newObject;
    }
  }, {
    key: "removeItem",
    value: function removeItem() {
      var _this = this;

      _variables.selectedData.splice(_variables.selectedData.findIndex(function (v) {
        return v.name === _this.removeName;
      }), 1);
    }
  }, {
    key: "newItem",
    value: function newItem() {
      _variables.selectedData.push(this.newObj());
    }
  }, {
    key: "updateItem",
    value: function updateItem() {
      var _this2 = this;

      var foundProduct = _variables.selectedData.filter(function (item) {
        return item.name === _this2.newObj().name;
      })[0];

      foundProduct.quantity += 1;
      foundProduct.totalPrice += this.price;
      foundProduct.totalVolume += this.volume;
    }
  }]);

  return CurrentDataActivites;
}();

exports.CurrentDataActivites = CurrentDataActivites;
},{"../variables":"src/variables.js"}],"src/model/totalAmountOfAddedProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateBasket = void 0;

var _variables = require("../variables");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var packagePriceBox = document.querySelector(".package-price");
var payTotalBox = document.querySelector(".pay-total");
var packageImgBox = document.querySelector(".package-img-box");
var totalAmountElement = document.querySelector(".total-amount");
var shoppingListContainer = document.querySelector(".shopping-list-box");
var cartTemplate = "<li class=\"list-item px-1 mb-1 d-flex align-items-center justify-content-between p-3 bg-white rounded shadow-sm\">\n        <button class=\"remove-btn\" data-name=\"__item_name__\"></button>\n        <div class=\"flex-1\">__item_name__</div>\n        <div class=\"d-flex flex-1 align-items-center text-center\">\n            <span class=\"mr-3\">__item_quantity__</span>\n            <span class=\"col-form-label mr-1\">adet</span>\n        </div>\n        <div class=\"flex-1 text-right\">__item_totalPrice__ TL</div>\n    </li>";
var packageTemplate = " \n    <img class=\"package-img mb-2\" src=\"/img/__PACKAGENAME__-package.svg\">\n    <small>paket</small>";

var UpdateBasket = /*#__PURE__*/function () {
  function UpdateBasket() {
    _classCallCheck(this, UpdateBasket);
  }

  _createClass(UpdateBasket, [{
    key: "totalAmountForProduct",
    value: function totalAmountForProduct() {
      var selectedShoppingItems = _variables.selectedData.reduce(function (carry, item) {
        carry.html += cartTemplate.replace(/__item_totalPrice__/g, item.totalPrice).replace(/__item_quantity__/g, item.quantity).replace(/__item_name__/g, item.name);
        carry.totalPrice += item.totalPrice;
        return carry;
      }, {
        html: '',
        totalPrice: 0
      });

      shoppingListContainer.innerHTML = selectedShoppingItems.html;
      totalAmountElement.innerHTML = selectedShoppingItems.totalPrice;
      packagePriceBox.innerHTML = _variables.currentPackageData.price;
      payTotalBox.innerHTML = selectedShoppingItems.totalPrice + _variables.currentPackageData.price;
      var packageView = packageTemplate.replace(/__PACKAGENAME__/, _variables.currentPackageData.name);
      packageImgBox.innerHTML = packageView;
    }
  }]);

  return UpdateBasket;
}();

exports.UpdateBasket = UpdateBasket;
},{"../variables":"src/variables.js"}],"src/model/productChangeProductActivity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductChangeViewActivity = void 0;

var _currentDataActivity = require("./currentDataActivity");

var _totalAmountOfAddedProduct = require("./totalAmountOfAddedProduct");

var _variables = require("../variables");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ProductChangeViewActivity = /*#__PURE__*/function () {
  function ProductChangeViewActivity(name, price, volume, removeName) {
    _classCallCheck(this, ProductChangeViewActivity);

    this.name = name;
    this.price = price;
    this.removeName = removeName;
    this.product = new _currentDataActivity.CurrentDataActivites(name, price, volume, removeName);
    this.totalAmount = new _totalAmountOfAddedProduct.UpdateBasket();
  }

  _createClass(ProductChangeViewActivity, [{
    key: "controller",
    value: function controller() {
      var _this = this;

      // remove product
      if (typeof this.removeName !== "undefined") {
        this.product.removeItem();
        return;
      } // new product


      if (_variables.selectedData.filter(function (item) {
        return item.name === _this.name;
      }).length === 0) {
        this.product.newItem();
        return;
      } // update product


      this.product.updateItem();
    }
  }]);

  return ProductChangeViewActivity;
}();

exports.ProductChangeViewActivity = ProductChangeViewActivity;
},{"./currentDataActivity":"src/model/currentDataActivity.js","./totalAmountOfAddedProduct":"src/model/totalAmountOfAddedProduct.js","../variables":"src/variables.js"}],"src/model/total-volume.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TotalVolume = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TotalVolume = /*#__PURE__*/function () {
  function TotalVolume() {
    _classCallCheck(this, TotalVolume);
  }

  _createClass(TotalVolume, [{
    key: "result",
    value: function result(data) {
      var totalVolumeResult = data.reduce(function (cum, allTotalProductVolume) {
        return cum + allTotalProductVolume.totalVolume;
      }, 0);
      return totalVolumeResult;
    }
  }]);

  return TotalVolume;
}();

exports.TotalVolume = TotalVolume;
},{}],"src/variables.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentPackageData = exports.changeToCart = exports.selectedData = void 0;

var _productChangeProductActivity = require("./model/productChangeProductActivity");

var _totalVolume = require("./model/total-volume");

var selectedData = [];
exports.selectedData = selectedData;

var changeToCart = function changeToCart(name, price, pVolume, removeName) {
  var action = new _productChangeProductActivity.ProductChangeViewActivity(name, price, pVolume, removeName);
  action.controller();
  action.totalAmount.totalAmountForProduct();
  var volume = new _totalVolume.TotalVolume();
  var totalVolume = volume.result(selectedData);
  console.log(totalVolume);
};

exports.changeToCart = changeToCart;
var currentPackageData = {
  name: "Small",
  price: 0.20
};
exports.currentPackageData = currentPackageData;
},{"./model/productChangeProductActivity":"src/model/productChangeProductActivity.js","./model/total-volume":"src/model/total-volume.js"}],"src/model/candyMachine.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CandyMachine = void 0;

var _variables = require("../variables");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var shoppingListContainerBtn = null;
shoppingListContainerBtn = document.querySelector(".shopping-list-box");
var productLitContainer = null;
var productTemplate = "<button type=\"button\" class=\"fruit-item product-item btn btn-outline-dark d-flex flex-column align-items-center justify-content-between mb-3 col mx-3\" \ndata-name=\"__product_name__\"  data-price=\"__product_price__\" data-volume=\"__product_volume__\">\n        <div class=\"d-flex flex-column align-items-center\">\n          <img class=\"mr-2\" src=\"__product_icon__\" width=\"100\" height=\"100\" alt=\"Apple\"/>\n          <span>__product_name__</span>\n        </div>\n        <strong>__product_price__ TL</strong>\n    </button>";

var CandyMachine = /*#__PURE__*/function () {
  function CandyMachine(dataObj) {
    _classCallCheck(this, CandyMachine);

    this.dataObj = dataObj;
  }

  _createClass(CandyMachine, [{
    key: "init",
    value: function init() {
      productLitContainer = document.querySelector(".product-list-container");
      productLitContainer.innerHTML = this.dataObj.reduce(function (carry, product) {
        return carry + productTemplate.replace(/__product_name__/g, product.name).replace(/__product_price__/g, product.price).replace(/__product_icon__/g, product.icon).replace(/__product_volume__/g, product.volume);
      }, '');
      this.eventsRun();
    }
  }, {
    key: "eventsRun",
    value: function eventsRun() {
      document.querySelectorAll(".product-item").forEach(function (itemElement) {
        itemElement.addEventListener("click", function () {
          var data = this.dataset;
          (0, _variables.changeToCart)(data.name, parseFloat(data.price), parseFloat(data.volume));
        });
      });
      shoppingListContainerBtn.addEventListener('click', function (event) {
        var targetElement = event.target;

        if (targetElement.classList.contains('remove-btn')) {
          (0, _variables.changeToCart)('', '', '', targetElement.dataset.name);
        }
      });
    }
  }]);

  return CandyMachine;
}();

exports.CandyMachine = CandyMachine;
},{"../variables":"src/variables.js"}],"app.js":[function(require,module,exports) {
"use strict";

require("./style.scss");

var _candyMachine = require("./src/model/candyMachine");

var productData = [{
  name: "lokum",
  icon: "/img/lokum.png",
  price: 1.5,
  volume: 20
}, {
  name: "akide",
  icon: "/img/akide.png",
  price: 5,
  volume: 26
}, {
  name: "jelibon",
  icon: "/img/jelibon.png",
  price: 2.75,
  volume: 45
}, {
  name: "burgulu lolipop",
  icon: "/img/b-lolipop.svg",
  price: 2.5,
  volume: 20
}, {
  name: "yuvarlak lolipop",
  icon: "/img/y-lollipop.png",
  price: 3,
  volume: 50
}];
var packageData = [{
  name: "Small",
  price: 0.20,
  volume: 100
}, {
  name: "Medium",
  price: 0.35,
  volume: 300
}, {
  name: "Large",
  price: 0.70,
  volume: 500
}];
var runMachine = new _candyMachine.CandyMachine(productData);
runMachine.init();
},{"./style.scss":"style.scss","./src/model/candyMachine":"src/model/candyMachine.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58340" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map