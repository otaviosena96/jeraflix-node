"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d2, b) {
  extendStatics(d2, b);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d2 = decorators[i]) r = (c < 3 ? d2(r) : c > 3 ? d2(target, key, r) : d2(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y2, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op2) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_2) try {
      if (f = 1, y2 && (t = op2[0] & 2 ? y2["return"] : op2[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op2[1])).done) return t;
      if (y2 = 0, t) op2 = [op2[0] & 2, t.value];
      switch (op2[0]) {
        case 0:
        case 1:
          t = op2;
          break;
        case 4:
          _2.label++;
          return { value: op2[1], done: false };
        case 5:
          _2.label++;
          y2 = op2[1];
          op2 = [0];
          continue;
        case 7:
          op2 = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op2[0] === 6 || op2[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op2[0] === 3 && (!t || op2[1] > t[0] && op2[1] < t[3])) {
            _2.label = op2[1];
            break;
          }
          if (op2[0] === 6 && _2.label < t[1]) {
            _2.label = t[1];
            t = op2;
            break;
          }
          if (t && _2.label < t[2]) {
            _2.label = t[2];
            _2.ops.push(op2);
            break;
          }
          if (t[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op2 = body.call(thisArg, _2);
    } catch (e) {
      op2 = [6, e];
      y2 = 0;
    } finally {
      f = t = 0;
    }
    if (op2[0] & 5) throw op2[1];
    return { value: op2[0] ? op2[1] : void 0, done: true };
  }
}
function __createBinding(o, m, k2, k22) {
  if (k22 === void 0) k22 = k2;
  o[k22] = m[k2];
}
function __exportStar(m, exports2) {
  for (var p in m) if (p !== "default" && !exports2.hasOwnProperty(p)) exports2[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar2 = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar2.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i = 0; i < arguments.length; i++)
    ar2 = ar2.concat(__read(arguments[i]));
  return ar2;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il2 = arguments.length; i < il2; i++) s += arguments[i].length;
  for (var r = Array(s), k2 = 0, i = 0; i < il2; i++)
    for (var a = arguments[i], j2 = 0, jl2 = a.length; j2 < jl2; j2++, k2++)
      r[k2] = a[j2];
  return r;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q2 = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q2.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q2[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q2[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d2, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw2) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw2 });
  } else {
    cooked.raw = raw2;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod) if (Object.hasOwnProperty.call(mod, k2)) result[k2] = mod[k2];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d2, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
        d3.__proto__ = b2;
      } || function(d3, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d3[p] = b2[p];
      };
      return extendStatics(d2, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/tsyringe/dist/cjs/types/lifecycle.js
var require_lifecycle = __commonJS({
  "node_modules/tsyringe/dist/cjs/types/lifecycle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var Lifecycle;
    (function(Lifecycle2) {
      Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
      Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
      Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
      Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
    })(Lifecycle || (Lifecycle = {}));
    exports2.default = Lifecycle;
  }
});

// node_modules/tsyringe/dist/cjs/types/index.js
var require_types = __commonJS({
  "node_modules/tsyringe/dist/cjs/types/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lifecycle_1 = require_lifecycle();
    Object.defineProperty(exports2, "Lifecycle", { enumerable: true, get: function() {
      return lifecycle_1.default;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/reflection-helpers.js
var require_reflection_helpers = __commonJS({
  "node_modules/tsyringe/dist/cjs/reflection-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defineInjectionTokenMetadata = exports2.getParamInfo = exports2.INJECTION_TOKEN_METADATA_KEY = void 0;
    exports2.INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
    function getParamInfo(target) {
      const params = Reflect.getMetadata("design:paramtypes", target) || [];
      const injectionTokens = Reflect.getOwnMetadata(exports2.INJECTION_TOKEN_METADATA_KEY, target) || {};
      Object.keys(injectionTokens).forEach((key) => {
        params[+key] = injectionTokens[key];
      });
      return params;
    }
    exports2.getParamInfo = getParamInfo;
    function defineInjectionTokenMetadata(data, transform) {
      return function(target, _propertyKey, parameterIndex) {
        const descriptors = Reflect.getOwnMetadata(exports2.INJECTION_TOKEN_METADATA_KEY, target) || {};
        descriptors[parameterIndex] = transform ? {
          token: data,
          transform: transform.transformToken,
          transformArgs: transform.args || []
        } : data;
        Reflect.defineMetadata(exports2.INJECTION_TOKEN_METADATA_KEY, descriptors, target);
      };
    }
    exports2.defineInjectionTokenMetadata = defineInjectionTokenMetadata;
  }
});

// node_modules/tsyringe/dist/cjs/providers/class-provider.js
var require_class_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/class-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isClassProvider = void 0;
    function isClassProvider(provider) {
      return !!provider.useClass;
    }
    exports2.isClassProvider = isClassProvider;
  }
});

// node_modules/tsyringe/dist/cjs/providers/factory-provider.js
var require_factory_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/factory-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isFactoryProvider = void 0;
    function isFactoryProvider(provider) {
      return !!provider.useFactory;
    }
    exports2.isFactoryProvider = isFactoryProvider;
  }
});

// node_modules/tsyringe/dist/cjs/lazy-helpers.js
var require_lazy_helpers = __commonJS({
  "node_modules/tsyringe/dist/cjs/lazy-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.delay = exports2.DelayedConstructor = void 0;
    var DelayedConstructor = class {
      constructor(wrap) {
        this.wrap = wrap;
        this.reflectMethods = [
          "get",
          "getPrototypeOf",
          "setPrototypeOf",
          "getOwnPropertyDescriptor",
          "defineProperty",
          "has",
          "set",
          "deleteProperty",
          "apply",
          "construct",
          "ownKeys"
        ];
      }
      createProxy(createObject) {
        const target = {};
        let init = false;
        let value;
        const delayedObject = () => {
          if (!init) {
            value = createObject(this.wrap());
            init = true;
          }
          return value;
        };
        return new Proxy(target, this.createHandler(delayedObject));
      }
      createHandler(delayedObject) {
        const handler = {};
        const install = (name) => {
          handler[name] = (...args) => {
            args[0] = delayedObject();
            const method = Reflect[name];
            return method(...args);
          };
        };
        this.reflectMethods.forEach(install);
        return handler;
      }
    };
    exports2.DelayedConstructor = DelayedConstructor;
    function delay(wrappedConstructor) {
      if (typeof wrappedConstructor === "undefined") {
        throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
      }
      return new DelayedConstructor(wrappedConstructor);
    }
    exports2.delay = delay;
  }
});

// node_modules/tsyringe/dist/cjs/providers/injection-token.js
var require_injection_token = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/injection-token.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isConstructorToken = exports2.isTransformDescriptor = exports2.isTokenDescriptor = exports2.isNormalToken = void 0;
    var lazy_helpers_1 = require_lazy_helpers();
    function isNormalToken(token) {
      return typeof token === "string" || typeof token === "symbol";
    }
    exports2.isNormalToken = isNormalToken;
    function isTokenDescriptor(descriptor) {
      return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
    }
    exports2.isTokenDescriptor = isTokenDescriptor;
    function isTransformDescriptor(descriptor) {
      return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
    }
    exports2.isTransformDescriptor = isTransformDescriptor;
    function isConstructorToken(token) {
      return typeof token === "function" || token instanceof lazy_helpers_1.DelayedConstructor;
    }
    exports2.isConstructorToken = isConstructorToken;
  }
});

// node_modules/tsyringe/dist/cjs/providers/token-provider.js
var require_token_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/token-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isTokenProvider = void 0;
    function isTokenProvider(provider) {
      return !!provider.useToken;
    }
    exports2.isTokenProvider = isTokenProvider;
  }
});

// node_modules/tsyringe/dist/cjs/providers/value-provider.js
var require_value_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/value-provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isValueProvider = void 0;
    function isValueProvider(provider) {
      return provider.useValue != void 0;
    }
    exports2.isValueProvider = isValueProvider;
  }
});

// node_modules/tsyringe/dist/cjs/providers/index.js
var require_providers = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var class_provider_1 = require_class_provider();
    Object.defineProperty(exports2, "isClassProvider", { enumerable: true, get: function() {
      return class_provider_1.isClassProvider;
    } });
    var factory_provider_1 = require_factory_provider();
    Object.defineProperty(exports2, "isFactoryProvider", { enumerable: true, get: function() {
      return factory_provider_1.isFactoryProvider;
    } });
    var injection_token_1 = require_injection_token();
    Object.defineProperty(exports2, "isNormalToken", { enumerable: true, get: function() {
      return injection_token_1.isNormalToken;
    } });
    var token_provider_1 = require_token_provider();
    Object.defineProperty(exports2, "isTokenProvider", { enumerable: true, get: function() {
      return token_provider_1.isTokenProvider;
    } });
    var value_provider_1 = require_value_provider();
    Object.defineProperty(exports2, "isValueProvider", { enumerable: true, get: function() {
      return value_provider_1.isValueProvider;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/providers/provider.js
var require_provider = __commonJS({
  "node_modules/tsyringe/dist/cjs/providers/provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isProvider = void 0;
    var class_provider_1 = require_class_provider();
    var value_provider_1 = require_value_provider();
    var token_provider_1 = require_token_provider();
    var factory_provider_1 = require_factory_provider();
    function isProvider(provider) {
      return class_provider_1.isClassProvider(provider) || value_provider_1.isValueProvider(provider) || token_provider_1.isTokenProvider(provider) || factory_provider_1.isFactoryProvider(provider);
    }
    exports2.isProvider = isProvider;
  }
});

// node_modules/tsyringe/dist/cjs/registry-base.js
var require_registry_base = __commonJS({
  "node_modules/tsyringe/dist/cjs/registry-base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var RegistryBase = class {
      constructor() {
        this._registryMap = /* @__PURE__ */ new Map();
      }
      entries() {
        return this._registryMap.entries();
      }
      getAll(key) {
        this.ensure(key);
        return this._registryMap.get(key);
      }
      get(key) {
        this.ensure(key);
        const value = this._registryMap.get(key);
        return value[value.length - 1] || null;
      }
      set(key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
      }
      setAll(key, value) {
        this._registryMap.set(key, value);
      }
      has(key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
      }
      clear() {
        this._registryMap.clear();
      }
      ensure(key) {
        if (!this._registryMap.has(key)) {
          this._registryMap.set(key, []);
        }
      }
    };
    exports2.default = RegistryBase;
  }
});

// node_modules/tsyringe/dist/cjs/registry.js
var require_registry = __commonJS({
  "node_modules/tsyringe/dist/cjs/registry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var registry_base_1 = require_registry_base();
    var Registry = class extends registry_base_1.default {
    };
    exports2.default = Registry;
  }
});

// node_modules/tsyringe/dist/cjs/resolution-context.js
var require_resolution_context = __commonJS({
  "node_modules/tsyringe/dist/cjs/resolution-context.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var ResolutionContext = class {
      constructor() {
        this.scopedResolutions = /* @__PURE__ */ new Map();
      }
    };
    exports2.default = ResolutionContext;
  }
});

// node_modules/tsyringe/dist/cjs/error-helpers.js
var require_error_helpers = __commonJS({
  "node_modules/tsyringe/dist/cjs/error-helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.formatErrorCtor = void 0;
    function formatDependency(params, idx) {
      if (params === null) {
        return `at position #${idx}`;
      }
      const argName = params.split(",")[idx].trim();
      return `"${argName}" at position #${idx}`;
    }
    function composeErrorMessage(msg, e, indent = "    ") {
      return [msg, ...e.message.split("\n").map((l) => indent + l)].join("\n");
    }
    function formatErrorCtor(ctor, paramIdx, error) {
      const [, params = null] = ctor.toString().match(/constructor\(([\w, ]+)\)/) || [];
      const dep = formatDependency(params, paramIdx);
      return composeErrorMessage(`Cannot inject the dependency ${dep} of "${ctor.name}" constructor. Reason:`, error);
    }
    exports2.formatErrorCtor = formatErrorCtor;
  }
});

// node_modules/tsyringe/dist/cjs/types/disposable.js
var require_disposable = __commonJS({
  "node_modules/tsyringe/dist/cjs/types/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isDisposable = void 0;
    function isDisposable(value) {
      if (typeof value.dispose !== "function")
        return false;
      const disposeFun = value.dispose;
      if (disposeFun.length > 0) {
        return false;
      }
      return true;
    }
    exports2.isDisposable = isDisposable;
  }
});

// node_modules/tsyringe/dist/cjs/interceptors.js
var require_interceptors = __commonJS({
  "node_modules/tsyringe/dist/cjs/interceptors.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PostResolutionInterceptors = exports2.PreResolutionInterceptors = void 0;
    var registry_base_1 = require_registry_base();
    var PreResolutionInterceptors = class extends registry_base_1.default {
    };
    exports2.PreResolutionInterceptors = PreResolutionInterceptors;
    var PostResolutionInterceptors = class extends registry_base_1.default {
    };
    exports2.PostResolutionInterceptors = PostResolutionInterceptors;
    var Interceptors = class {
      constructor() {
        this.preResolution = new PreResolutionInterceptors();
        this.postResolution = new PostResolutionInterceptors();
      }
    };
    exports2.default = Interceptors;
  }
});

// node_modules/tsyringe/dist/cjs/dependency-container.js
var require_dependency_container = __commonJS({
  "node_modules/tsyringe/dist/cjs/dependency-container.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.instance = exports2.typeInfo = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var providers_1 = require_providers();
    var provider_1 = require_provider();
    var injection_token_1 = require_injection_token();
    var registry_1 = require_registry();
    var lifecycle_1 = require_lifecycle();
    var resolution_context_1 = require_resolution_context();
    var error_helpers_1 = require_error_helpers();
    var lazy_helpers_1 = require_lazy_helpers();
    var disposable_1 = require_disposable();
    var interceptors_1 = require_interceptors();
    exports2.typeInfo = /* @__PURE__ */ new Map();
    var InternalDependencyContainer = class _InternalDependencyContainer {
      constructor(parent) {
        this.parent = parent;
        this._registry = new registry_1.default();
        this.interceptors = new interceptors_1.default();
        this.disposed = false;
        this.disposables = /* @__PURE__ */ new Set();
      }
      register(token, providerOrConstructor, options = { lifecycle: lifecycle_1.default.Transient }) {
        this.ensureNotDisposed();
        let provider;
        if (!provider_1.isProvider(providerOrConstructor)) {
          provider = { useClass: providerOrConstructor };
        } else {
          provider = providerOrConstructor;
        }
        if (providers_1.isTokenProvider(provider)) {
          const path = [token];
          let tokenProvider = provider;
          while (tokenProvider != null) {
            const currentToken = tokenProvider.useToken;
            if (path.includes(currentToken)) {
              throw new Error(`Token registration cycle detected! ${[...path, currentToken].join(" -> ")}`);
            }
            path.push(currentToken);
            const registration = this._registry.get(currentToken);
            if (registration && providers_1.isTokenProvider(registration.provider)) {
              tokenProvider = registration.provider;
            } else {
              tokenProvider = null;
            }
          }
        }
        if (options.lifecycle === lifecycle_1.default.Singleton || options.lifecycle == lifecycle_1.default.ContainerScoped || options.lifecycle == lifecycle_1.default.ResolutionScoped) {
          if (providers_1.isValueProvider(provider) || providers_1.isFactoryProvider(provider)) {
            throw new Error(`Cannot use lifecycle "${lifecycle_1.default[options.lifecycle]}" with ValueProviders or FactoryProviders`);
          }
        }
        this._registry.set(token, { provider, options });
        return this;
      }
      registerType(from, to2) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(to2)) {
          return this.register(from, {
            useToken: to2
          });
        }
        return this.register(from, {
          useClass: to2
        });
      }
      registerInstance(token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
          useValue: instance
        });
      }
      registerSingleton(from, to2) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(from)) {
          if (providers_1.isNormalToken(to2)) {
            return this.register(from, {
              useToken: to2
            }, { lifecycle: lifecycle_1.default.Singleton });
          } else if (to2) {
            return this.register(from, {
              useClass: to2
            }, { lifecycle: lifecycle_1.default.Singleton });
          }
          throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        let useClass = from;
        if (to2 && !providers_1.isNormalToken(to2)) {
          useClass = to2;
        }
        return this.register(from, {
          useClass
        }, { lifecycle: lifecycle_1.default.Singleton });
      }
      resolve(token, context = new resolution_context_1.default()) {
        this.ensureNotDisposed();
        const registration = this.getRegistration(token);
        if (!registration && providers_1.isNormalToken(token)) {
          throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "Single");
        if (registration) {
          const result = this.resolveRegistration(registration, context);
          this.executePostResolutionInterceptor(token, result, "Single");
          return result;
        }
        if (injection_token_1.isConstructorToken(token)) {
          const result = this.construct(token, context);
          this.executePostResolutionInterceptor(token, result, "Single");
          return result;
        }
        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
      }
      executePreResolutionInterceptor(token, resolutionType) {
        if (this.interceptors.preResolution.has(token)) {
          const remainingInterceptors = [];
          for (const interceptor of this.interceptors.preResolution.getAll(token)) {
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, resolutionType);
          }
          this.interceptors.preResolution.setAll(token, remainingInterceptors);
        }
      }
      executePostResolutionInterceptor(token, result, resolutionType) {
        if (this.interceptors.postResolution.has(token)) {
          const remainingInterceptors = [];
          for (const interceptor of this.interceptors.postResolution.getAll(token)) {
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, result, resolutionType);
          }
          this.interceptors.postResolution.setAll(token, remainingInterceptors);
        }
      }
      resolveRegistration(registration, context) {
        this.ensureNotDisposed();
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped && context.scopedResolutions.has(registration)) {
          return context.scopedResolutions.get(registration);
        }
        const isSingleton = registration.options.lifecycle === lifecycle_1.default.Singleton;
        const isContainerScoped = registration.options.lifecycle === lifecycle_1.default.ContainerScoped;
        const returnInstance = isSingleton || isContainerScoped;
        let resolved;
        if (providers_1.isValueProvider(registration.provider)) {
          resolved = registration.provider.useValue;
        } else if (providers_1.isTokenProvider(registration.provider)) {
          resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
        } else if (providers_1.isClassProvider(registration.provider)) {
          resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
        } else if (providers_1.isFactoryProvider(registration.provider)) {
          resolved = registration.provider.useFactory(this);
        } else {
          resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === lifecycle_1.default.ResolutionScoped) {
          context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
      }
      resolveAll(token, context = new resolution_context_1.default()) {
        this.ensureNotDisposed();
        const registrations = this.getAllRegistrations(token);
        if (!registrations && providers_1.isNormalToken(token)) {
          throw new Error(`Attempted to resolve unregistered dependency token: "${token.toString()}"`);
        }
        this.executePreResolutionInterceptor(token, "All");
        if (registrations) {
          const result2 = registrations.map((item) => this.resolveRegistration(item, context));
          this.executePostResolutionInterceptor(token, result2, "All");
          return result2;
        }
        const result = [this.construct(token, context)];
        this.executePostResolutionInterceptor(token, result, "All");
        return result;
      }
      isRegistered(token, recursive = false) {
        this.ensureNotDisposed();
        return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
      }
      reset() {
        this.ensureNotDisposed();
        this._registry.clear();
        this.interceptors.preResolution.clear();
        this.interceptors.postResolution.clear();
      }
      clearInstances() {
        this.ensureNotDisposed();
        for (const [token, registrations] of this._registry.entries()) {
          this._registry.setAll(token, registrations.filter((registration) => !providers_1.isValueProvider(registration.provider)).map((registration) => {
            registration.instance = void 0;
            return registration;
          }));
        }
      }
      createChildContainer() {
        this.ensureNotDisposed();
        const childContainer = new _InternalDependencyContainer(this);
        for (const [token, registrations] of this._registry.entries()) {
          if (registrations.some(({ options }) => options.lifecycle === lifecycle_1.default.ContainerScoped)) {
            childContainer._registry.setAll(token, registrations.map((registration) => {
              if (registration.options.lifecycle === lifecycle_1.default.ContainerScoped) {
                return {
                  provider: registration.provider,
                  options: registration.options
                };
              }
              return registration;
            }));
          }
        }
        return childContainer;
      }
      beforeResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.preResolution.set(token, {
          callback,
          options
        });
      }
      afterResolution(token, callback, options = { frequency: "Always" }) {
        this.interceptors.postResolution.set(token, {
          callback,
          options
        });
      }
      dispose() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.disposed = true;
          const promises = [];
          this.disposables.forEach((disposable) => {
            const maybePromise = disposable.dispose();
            if (maybePromise) {
              promises.push(maybePromise);
            }
          });
          yield Promise.all(promises);
        });
      }
      getRegistration(token) {
        if (this.isRegistered(token)) {
          return this._registry.get(token);
        }
        if (this.parent) {
          return this.parent.getRegistration(token);
        }
        return null;
      }
      getAllRegistrations(token) {
        if (this.isRegistered(token)) {
          return this._registry.getAll(token);
        }
        if (this.parent) {
          return this.parent.getAllRegistrations(token);
        }
        return null;
      }
      construct(ctor, context) {
        if (ctor instanceof lazy_helpers_1.DelayedConstructor) {
          return ctor.createProxy((target) => this.resolve(target, context));
        }
        const instance = (() => {
          const paramInfo = exports2.typeInfo.get(ctor);
          if (!paramInfo || paramInfo.length === 0) {
            if (ctor.length === 0) {
              return new ctor();
            } else {
              throw new Error(`TypeInfo not known for "${ctor.name}"`);
            }
          }
          const params = paramInfo.map(this.resolveParams(context, ctor));
          return new ctor(...params);
        })();
        if (disposable_1.isDisposable(instance)) {
          this.disposables.add(instance);
        }
        return instance;
      }
      resolveParams(context, ctor) {
        return (param, idx) => {
          try {
            if (injection_token_1.isTokenDescriptor(param)) {
              if (injection_token_1.isTransformDescriptor(param)) {
                return param.multiple ? this.resolve(param.transform).transform(this.resolveAll(param.token), ...param.transformArgs) : this.resolve(param.transform).transform(this.resolve(param.token, context), ...param.transformArgs);
              } else {
                return param.multiple ? this.resolveAll(param.token) : this.resolve(param.token, context);
              }
            } else if (injection_token_1.isTransformDescriptor(param)) {
              return this.resolve(param.transform, context).transform(this.resolve(param.token, context), ...param.transformArgs);
            }
            return this.resolve(param, context);
          } catch (e) {
            throw new Error(error_helpers_1.formatErrorCtor(ctor, idx, e));
          }
        };
      }
      ensureNotDisposed() {
        if (this.disposed) {
          throw new Error("This container has been disposed, you cannot interact with a disposed container");
        }
      }
    };
    exports2.instance = new InternalDependencyContainer();
    exports2.default = exports2.instance;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/auto-injectable.js
var require_auto_injectable = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/auto-injectable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    var injection_token_1 = require_injection_token();
    var error_helpers_1 = require_error_helpers();
    function autoInjectable() {
      return function(target) {
        const paramInfo = reflection_helpers_1.getParamInfo(target);
        return class extends target {
          constructor(...args) {
            super(...args.concat(paramInfo.slice(args.length).map((type, index) => {
              try {
                if (injection_token_1.isTokenDescriptor(type)) {
                  if (injection_token_1.isTransformDescriptor(type)) {
                    return type.multiple ? dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolveAll(type.token), ...type.transformArgs) : dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                  } else {
                    return type.multiple ? dependency_container_1.instance.resolveAll(type.token) : dependency_container_1.instance.resolve(type.token);
                  }
                } else if (injection_token_1.isTransformDescriptor(type)) {
                  return dependency_container_1.instance.resolve(type.transform).transform(dependency_container_1.instance.resolve(type.token), ...type.transformArgs);
                }
                return dependency_container_1.instance.resolve(type);
              } catch (e) {
                const argIndex = index + args.length;
                throw new Error(error_helpers_1.formatErrorCtor(target, argIndex, e));
              }
            })));
          }
        };
      };
    }
    exports2.default = autoInjectable;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject.js
var require_inject = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function inject(token) {
      return reflection_helpers_1.defineInjectionTokenMetadata(token);
    }
    exports2.default = inject;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/injectable.js
var require_injectable = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/injectable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    function injectable() {
      return function(target) {
        dependency_container_1.typeInfo.set(target, reflection_helpers_1.getParamInfo(target));
      };
    }
    exports2.default = injectable;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/registry.js
var require_registry2 = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/registry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dependency_container_1 = require_dependency_container();
    function registry(registrations = []) {
      return function(target) {
        registrations.forEach((_a2) => {
          var { token, options } = _a2, provider = tslib_1.__rest(_a2, ["token", "options"]);
          return dependency_container_1.instance.register(token, provider, options);
        });
        return target;
      };
    }
    exports2.default = registry;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/singleton.js
var require_singleton = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/singleton.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var injectable_1 = require_injectable();
    var dependency_container_1 = require_dependency_container();
    function singleton() {
      return function(target) {
        injectable_1.default()(target);
        dependency_container_1.instance.registerSingleton(target);
      };
    }
    exports2.default = singleton;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject-all.js
var require_inject_all = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject-all.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectAll(token) {
      const data = { token, multiple: true };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports2.default = injectAll;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject-all-with-transform.js
var require_inject_all_with_transform = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject-all-with-transform.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectAllWithTransform(token, transformer, ...args) {
      const data = {
        token,
        multiple: true,
        transform: transformer,
        transformArgs: args
      };
      return reflection_helpers_1.defineInjectionTokenMetadata(data);
    }
    exports2.default = injectAllWithTransform;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/inject-with-transform.js
var require_inject_with_transform = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/inject-with-transform.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    function injectWithTransform(token, transformer, ...args) {
      return reflection_helpers_1.defineInjectionTokenMetadata(token, {
        transformToken: transformer,
        args
      });
    }
    exports2.default = injectWithTransform;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/scoped.js
var require_scoped = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/scoped.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var injectable_1 = require_injectable();
    var dependency_container_1 = require_dependency_container();
    function scoped(lifecycle, token) {
      return function(target) {
        injectable_1.default()(target);
        dependency_container_1.instance.register(token || target, target, {
          lifecycle
        });
      };
    }
    exports2.default = scoped;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/index.js
var require_decorators = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var auto_injectable_1 = require_auto_injectable();
    Object.defineProperty(exports2, "autoInjectable", { enumerable: true, get: function() {
      return auto_injectable_1.default;
    } });
    var inject_1 = require_inject();
    Object.defineProperty(exports2, "inject", { enumerable: true, get: function() {
      return inject_1.default;
    } });
    var injectable_1 = require_injectable();
    Object.defineProperty(exports2, "injectable", { enumerable: true, get: function() {
      return injectable_1.default;
    } });
    var registry_1 = require_registry2();
    Object.defineProperty(exports2, "registry", { enumerable: true, get: function() {
      return registry_1.default;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports2, "singleton", { enumerable: true, get: function() {
      return singleton_1.default;
    } });
    var inject_all_1 = require_inject_all();
    Object.defineProperty(exports2, "injectAll", { enumerable: true, get: function() {
      return inject_all_1.default;
    } });
    var inject_all_with_transform_1 = require_inject_all_with_transform();
    Object.defineProperty(exports2, "injectAllWithTransform", { enumerable: true, get: function() {
      return inject_all_with_transform_1.default;
    } });
    var inject_with_transform_1 = require_inject_with_transform();
    Object.defineProperty(exports2, "injectWithTransform", { enumerable: true, get: function() {
      return inject_with_transform_1.default;
    } });
    var scoped_1 = require_scoped();
    Object.defineProperty(exports2, "scoped", { enumerable: true, get: function() {
      return scoped_1.default;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/factories/instance-caching-factory.js
var require_instance_caching_factory = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/instance-caching-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function instanceCachingFactory(factoryFunc) {
      let instance;
      return (dependencyContainer) => {
        if (instance == void 0) {
          instance = factoryFunc(dependencyContainer);
        }
        return instance;
      };
    }
    exports2.default = instanceCachingFactory;
  }
});

// node_modules/tsyringe/dist/cjs/factories/instance-per-container-caching-factory.js
var require_instance_per_container_caching_factory = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/instance-per-container-caching-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function instancePerContainerCachingFactory(factoryFunc) {
      const cache = /* @__PURE__ */ new WeakMap();
      return (dependencyContainer) => {
        let instance = cache.get(dependencyContainer);
        if (instance == void 0) {
          instance = factoryFunc(dependencyContainer);
          cache.set(dependencyContainer, instance);
        }
        return instance;
      };
    }
    exports2.default = instancePerContainerCachingFactory;
  }
});

// node_modules/tsyringe/dist/cjs/factories/predicate-aware-class-factory.js
var require_predicate_aware_class_factory = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/predicate-aware-class-factory.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching = true) {
      let instance;
      let previousPredicate;
      return (dependencyContainer) => {
        const currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
          if (previousPredicate = currentPredicate) {
            instance = dependencyContainer.resolve(trueConstructor);
          } else {
            instance = dependencyContainer.resolve(falseConstructor);
          }
        }
        return instance;
      };
    }
    exports2.default = predicateAwareClassFactory;
  }
});

// node_modules/tsyringe/dist/cjs/factories/index.js
var require_factories = __commonJS({
  "node_modules/tsyringe/dist/cjs/factories/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var instance_caching_factory_1 = require_instance_caching_factory();
    Object.defineProperty(exports2, "instanceCachingFactory", { enumerable: true, get: function() {
      return instance_caching_factory_1.default;
    } });
    var instance_per_container_caching_factory_1 = require_instance_per_container_caching_factory();
    Object.defineProperty(exports2, "instancePerContainerCachingFactory", { enumerable: true, get: function() {
      return instance_per_container_caching_factory_1.default;
    } });
    var predicate_aware_class_factory_1 = require_predicate_aware_class_factory();
    Object.defineProperty(exports2, "predicateAwareClassFactory", { enumerable: true, get: function() {
      return predicate_aware_class_factory_1.default;
    } });
  }
});

// node_modules/tsyringe/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/tsyringe/dist/cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
      throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
    }
    var types_1 = require_types();
    Object.defineProperty(exports2, "Lifecycle", { enumerable: true, get: function() {
      return types_1.Lifecycle;
    } });
    tslib_1.__exportStar(require_decorators(), exports2);
    tslib_1.__exportStar(require_factories(), exports2);
    tslib_1.__exportStar(require_providers(), exports2);
    var lazy_helpers_1 = require_lazy_helpers();
    Object.defineProperty(exports2, "delay", { enumerable: true, get: function() {
      return lazy_helpers_1.delay;
    } });
    var dependency_container_1 = require_dependency_container();
    Object.defineProperty(exports2, "container", { enumerable: true, get: function() {
      return dependency_container_1.instance;
    } });
  }
});

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var Ml = Object.create;
    var Ct = Object.defineProperty;
    var $l = Object.getOwnPropertyDescriptor;
    var ql = Object.getOwnPropertyNames;
    var jl = Object.getPrototypeOf;
    var Vl = Object.prototype.hasOwnProperty;
    var Z = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    var Fr = (e, r) => {
      for (var t in r) Ct(e, t, { get: r[t], enumerable: true });
    };
    var no = (e, r, t, n) => {
      if (r && typeof r == "object" || typeof r == "function") for (let i of ql(r)) !Vl.call(e, i) && i !== t && Ct(e, i, { get: () => r[i], enumerable: !(n = $l(r, i)) || n.enumerable });
      return e;
    };
    var k = (e, r, t) => (t = e != null ? Ml(jl(e)) : {}, no(r || !e || !e.__esModule ? Ct(t, "default", { value: e, enumerable: true }) : t, e));
    var Bl = (e) => no(Ct({}, "__esModule", { value: true }), e);
    var Ao = Z((Bd, Un) => {
      "use strict";
      var v = Un.exports;
      Un.exports.default = v;
      var D = "\x1B[", jr = "\x1B]", mr = "\x07", Ft = ";", Ro = process.env.TERM_PROGRAM === "Apple_Terminal";
      v.cursorTo = (e, r) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        return typeof r != "number" ? D + (e + 1) + "G" : D + (r + 1) + ";" + (e + 1) + "H";
      };
      v.cursorMove = (e, r) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        let t = "";
        return e < 0 ? t += D + -e + "D" : e > 0 && (t += D + e + "C"), r < 0 ? t += D + -r + "A" : r > 0 && (t += D + r + "B"), t;
      };
      v.cursorUp = (e = 1) => D + e + "A";
      v.cursorDown = (e = 1) => D + e + "B";
      v.cursorForward = (e = 1) => D + e + "C";
      v.cursorBackward = (e = 1) => D + e + "D";
      v.cursorLeft = D + "G";
      v.cursorSavePosition = Ro ? "\x1B7" : D + "s";
      v.cursorRestorePosition = Ro ? "\x1B8" : D + "u";
      v.cursorGetPosition = D + "6n";
      v.cursorNextLine = D + "E";
      v.cursorPrevLine = D + "F";
      v.cursorHide = D + "?25l";
      v.cursorShow = D + "?25h";
      v.eraseLines = (e) => {
        let r = "";
        for (let t = 0; t < e; t++) r += v.eraseLine + (t < e - 1 ? v.cursorUp() : "");
        return e && (r += v.cursorLeft), r;
      };
      v.eraseEndLine = D + "K";
      v.eraseStartLine = D + "1K";
      v.eraseLine = D + "2K";
      v.eraseDown = D + "J";
      v.eraseUp = D + "1J";
      v.eraseScreen = D + "2J";
      v.scrollUp = D + "S";
      v.scrollDown = D + "T";
      v.clearScreen = "\x1Bc";
      v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${D}0f` : `${v.eraseScreen}${D}3J${D}H`;
      v.beep = mr;
      v.link = (e, r) => [jr, "8", Ft, Ft, r, mr, e, jr, "8", Ft, Ft, mr].join("");
      v.image = (e, r = {}) => {
        let t = `${jr}1337;File=inline=1`;
        return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === false && (t += ";preserveAspectRatio=0"), t + ":" + e.toString("base64") + mr;
      };
      v.iTerm = { setCwd: (e = process.cwd()) => `${jr}50;CurrentDir=${e}${mr}`, annotation: (e, r = {}) => {
        let t = `${jr}1337;`, n = typeof r.x < "u", i = typeof r.y < "u";
        if ((n || i) && !(n && i && typeof r.length < "u")) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [e, r.length, r.x, r.y] : [r.length, e]).join("|") : t += e, t + mr;
      } };
    });
    var Qn = Z((Ud, Io) => {
      "use strict";
      Io.exports = (e, r = process.argv) => {
        let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = r.indexOf(t + e), i = r.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var Do = Z((Qd, ko) => {
      "use strict";
      var Ru = require("os"), _o = require("tty"), pe = Qn(), { env: G } = process, Ve;
      pe("no-color") || pe("no-colors") || pe("color=false") || pe("color=never") ? Ve = 0 : (pe("color") || pe("colors") || pe("color=true") || pe("color=always")) && (Ve = 1);
      "FORCE_COLOR" in G && (G.FORCE_COLOR === "true" ? Ve = 1 : G.FORCE_COLOR === "false" ? Ve = 0 : Ve = G.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(G.FORCE_COLOR, 10), 3));
      function Gn(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function Jn(e, r) {
        if (Ve === 0) return 0;
        if (pe("color=16m") || pe("color=full") || pe("color=truecolor")) return 3;
        if (pe("color=256")) return 2;
        if (e && !r && Ve === void 0) return 0;
        let t = Ve || 0;
        if (G.TERM === "dumb") return t;
        if (process.platform === "win32") {
          let n = Ru.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in G) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in G) || G.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in G) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(G.TEAMCITY_VERSION) ? 1 : 0;
        if (G.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in G) {
          let n = parseInt((G.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (G.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(G.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(G.TERM) || "COLORTERM" in G ? 1 : t;
      }
      function Au(e) {
        let r = Jn(e, e && e.isTTY);
        return Gn(r);
      }
      ko.exports = { supportsColor: Au, stdout: Gn(Jn(true, _o.isatty(1))), stderr: Gn(Jn(true, _o.isatty(2))) };
    });
    var Fo = Z((Gd, Lo) => {
      "use strict";
      var Iu = Do(), dr = Qn();
      function Oo(e) {
        if (/^\d{3,4}$/.test(e)) {
          let t = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(t[1], 10), patch: parseInt(t[2], 10) };
        }
        let r = (e || "").split(".").map((t) => parseInt(t, 10));
        return { major: r[0], minor: r[1], patch: r[2] };
      }
      function Hn(e) {
        let { env: r } = process;
        if ("FORCE_HYPERLINK" in r) return !(r.FORCE_HYPERLINK.length > 0 && parseInt(r.FORCE_HYPERLINK, 10) === 0);
        if (dr("no-hyperlink") || dr("no-hyperlinks") || dr("hyperlink=false") || dr("hyperlink=never")) return false;
        if (dr("hyperlink=true") || dr("hyperlink=always") || "NETLIFY" in r) return true;
        if (!Iu.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in r || "TEAMCITY_VERSION" in r) return false;
        if ("TERM_PROGRAM" in r) {
          let t = Oo(r.TERM_PROGRAM_VERSION);
          switch (r.TERM_PROGRAM) {
            case "iTerm.app":
              return t.major === 3 ? t.minor >= 1 : t.major > 3;
            case "WezTerm":
              return t.major >= 20200620;
            case "vscode":
              return t.major > 1 || t.major === 1 && t.minor >= 72;
          }
        }
        if ("VTE_VERSION" in r) {
          if (r.VTE_VERSION === "0.50.0") return false;
          let t = Oo(r.VTE_VERSION);
          return t.major > 0 || t.minor >= 50;
        }
        return false;
      }
      Lo.exports = { supportsHyperlink: Hn, stdout: Hn(process.stdout), stderr: Hn(process.stderr) };
    });
    var Mo = Z((Jd, Vr) => {
      "use strict";
      var _u = Ao(), Wn = Fo(), No = (e, r, { target: t = "stdout", ...n } = {}) => Wn[t] ? _u.link(e, r) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, r) : `${e} (\u200B${r}\u200B)`;
      Vr.exports = (e, r, t = {}) => No(e, r, t);
      Vr.exports.stderr = (e, r, t = {}) => No(e, r, { target: "stderr", ...t });
      Vr.exports.isSupported = Wn.stdout;
      Vr.exports.stderr.isSupported = Wn.stderr;
    });
    var Yn = Z((tf, ku) => {
      ku.exports = { name: "@prisma/engines-version", version: "5.14.0-25.e9771e62de70f79a5e1c604a2d7c8e2a0a874b48", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.32", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var zn = Z((Nt) => {
      "use strict";
      Object.defineProperty(Nt, "__esModule", { value: true });
      Nt.enginesVersion = void 0;
      Nt.enginesVersion = Yn().prisma.enginesVersion;
    });
    var Vo = Z((Pf, Lu) => {
      Lu.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var Uo = Z((vf, $t) => {
      "use strict";
      var Fu = require("fs"), Bo = require("path"), Nu = require("os"), Mu = Vo(), $u = Mu.version, qu = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function ju(e) {
        let r = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = qu.exec(t)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
        }
        return r;
      }
      function ri(e) {
        console.log(`[dotenv@${$u}][DEBUG] ${e}`);
      }
      function Vu(e) {
        return e[0] === "~" ? Bo.join(Nu.homedir(), e.slice(1)) : e;
      }
      function Bu(e) {
        let r = Bo.resolve(process.cwd(), ".env"), t = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (r = Vu(e.path)), e.encoding != null && (t = e.encoding));
        try {
          let o = Mt.parse(Fu.readFileSync(r, { encoding: t }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && ri(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && ri(`Failed to load ${r} ${o.message}`), { error: o };
        }
      }
      var Mt = { config: Bu, parse: ju };
      $t.exports.config = Mt.config;
      $t.exports.parse = Mt.parse;
      $t.exports = Mt;
    });
    var Ko = Z((_f, Wo) => {
      "use strict";
      Wo.exports = (e) => {
        let r = e.match(/^[ \t]*(?=\S)/gm);
        return r ? r.reduce((t, n) => Math.min(t, n.length), 1 / 0) : 0;
      };
    });
    var zo = Z((kf, Yo) => {
      "use strict";
      var Ju = Ko();
      Yo.exports = (e) => {
        let r = Ju(e);
        if (r === 0) return e;
        let t = new RegExp(`^[ \\t]{${r}}`, "gm");
        return e.replace(t, "");
      };
    });
    var oi = Z((Mf, Zo) => {
      "use strict";
      Zo.exports = (e, r = 1, t) => {
        if (t = { indent: " ", includeEmptyLines: false, ...t }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
        if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
        if (r === 0) return e;
        let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, t.indent.repeat(r));
      };
    });
    var ts = Z((jf, rs) => {
      "use strict";
      rs.exports = ({ onlyFirst: e = false } = {}) => {
        let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      };
    });
    var ui = Z((Vf, ns) => {
      "use strict";
      var ec = ts();
      ns.exports = (e) => typeof e == "string" ? e.replace(ec(), "") : e;
    });
    var is = Z((Qf, Vt) => {
      "use strict";
      Vt.exports = (e = {}) => {
        let r;
        if (e.repoUrl) r = e.repoUrl;
        else if (e.user && e.repo) r = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let t = new URL(`${r}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            t.searchParams.set(i, o);
          }
        }
        return t.toString();
      };
      Vt.exports.default = Vt.exports;
    });
    var Wi = Z((DP, Ba) => {
      "use strict";
      Ba.exports = /* @__PURE__ */ function() {
        function e(r, t, n, i, o) {
          return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
        }
        return function(r, t) {
          if (r === t) return 0;
          if (r.length > t.length) {
            var n = r;
            r = t, t = n;
          }
          for (var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, m, f, g, h, I, T, S, C, b = [];
          for (l = 0; l < i; l++) b.push(l + 1), b.push(r.charCodeAt(s + l));
          for (var de = b.length - 1; a < o - 3; ) for (I = t.charCodeAt(s + (u = a)), T = t.charCodeAt(s + (c = a + 1)), S = t.charCodeAt(s + (p = a + 2)), C = t.charCodeAt(s + (m = a + 3)), f = a += 4, l = 0; l < de; l += 2) g = b[l], h = b[l + 1], u = e(g, u, c, I, h), c = e(u, c, p, T, h), p = e(c, p, m, S, h), f = e(p, m, f, C, h), b[l] = f, m = p, p = c, c = u, u = g;
          for (; a < o; ) for (I = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < de; l += 2) g = b[l], b[l] = f = e(g, u, f, I, b[l + 1]), u = g;
          return f;
        };
      }();
    });
    var fd = {};
    Fr(fd, { Debug: () => Fn, Decimal: () => Te, Extensions: () => kn, MetricsClient: () => hr, NotFoundError: () => Oe, PrismaClientInitializationError: () => R, PrismaClientKnownRequestError: () => V, PrismaClientRustPanicError: () => le, PrismaClientUnknownRequestError: () => B, PrismaClientValidationError: () => W, Public: () => Dn, Sql: () => ie, defineDmmfProperty: () => ss, empty: () => ls, getPrismaClient: () => Ll, getRuntime: () => fn, join: () => as, makeStrictEnum: () => Fl, objectEnumValues: () => Qt, raw: () => Ei, sqltag: () => bi, warnEnvConflicts: () => Nl, warnOnce: () => Hr });
    module.exports = Bl(fd);
    var kn = {};
    Fr(kn, { defineExtension: () => io, getExtensionContext: () => oo });
    function io(e) {
      return typeof e == "function" ? e : (r) => r.$extends(e);
    }
    function oo(e) {
      return e;
    }
    var Dn = {};
    Fr(Dn, { validator: () => so });
    function so(...e) {
      return (r) => r;
    }
    var St = {};
    Fr(St, { $: () => po, bgBlack: () => Zl, bgBlue: () => tu, bgCyan: () => iu, bgGreen: () => eu, bgMagenta: () => nu, bgRed: () => Xl, bgWhite: () => ou, bgYellow: () => ru, black: () => Wl, blue: () => ze, bold: () => H, cyan: () => _e, dim: () => Ie, gray: () => Nr, green: () => Me, grey: () => zl, hidden: () => Jl, inverse: () => Gl, italic: () => Ql, magenta: () => Kl, red: () => ue, reset: () => Ul, strikethrough: () => Hl, underline: () => X, white: () => Yl, yellow: () => fe });
    var On;
    var ao;
    var lo;
    var uo;
    var co = true;
    typeof process < "u" && ({ FORCE_COLOR: On, NODE_DISABLE_COLORS: ao, NO_COLOR: lo, TERM: uo } = process.env || {}, co = process.stdout && process.stdout.isTTY);
    var po = { enabled: !ao && lo == null && uo !== "dumb" && (On != null && On !== "0" || co) };
    function N(e, r) {
      let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${r}m`;
      return function(o) {
        return !po.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
      };
    }
    var Ul = N(0, 0);
    var H = N(1, 22);
    var Ie = N(2, 22);
    var Ql = N(3, 23);
    var X = N(4, 24);
    var Gl = N(7, 27);
    var Jl = N(8, 28);
    var Hl = N(9, 29);
    var Wl = N(30, 39);
    var ue = N(31, 39);
    var Me = N(32, 39);
    var fe = N(33, 39);
    var ze = N(34, 39);
    var Kl = N(35, 39);
    var _e = N(36, 39);
    var Yl = N(37, 39);
    var Nr = N(90, 39);
    var zl = N(90, 39);
    var Zl = N(40, 49);
    var Xl = N(41, 49);
    var eu = N(42, 49);
    var ru = N(43, 49);
    var tu = N(44, 49);
    var nu = N(45, 49);
    var iu = N(46, 49);
    var ou = N(47, 49);
    var su = 100;
    var mo = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Mr = [];
    var fo = Date.now();
    var au = 0;
    var Ln = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ?? (globalThis.DEBUG = Ln.DEBUG ?? "");
    globalThis.DEBUG_COLORS ?? (globalThis.DEBUG_COLORS = Ln.DEBUG_COLORS ? Ln.DEBUG_COLORS === "true" : true);
    var $r = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let r = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return t && !n;
    }, log: (...e) => {
      let [r, t, ...n] = e, i;
      typeof require == "function" && typeof process < "u" && typeof process.stderr < "u" && typeof process.stderr.write == "function" ? i = (...o) => {
        try {
          let s = require("util");
          process.stderr.write(s.format(...o) + `
`);
        } catch {
          i = console.warn ?? console.log;
        }
      } : i = console.warn ?? console.log, i(`${r} ${t}`, ...n);
    }, formatters: {} };
    function lu(e) {
      let r = { color: mo[au++ % mo.length], enabled: $r.enabled(e), namespace: e, log: $r.log, extend: () => {
      } }, t = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = r;
        if (n.length !== 0 && Mr.push([o, ...n]), Mr.length > su && Mr.shift(), $r.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : uu(c)), u = `+${Date.now() - fo}ms`;
          fo = Date.now(), globalThis.DEBUG_COLORS ? a(St[s](H(o)), ...l, St[s](u)) : a(o, ...l, u);
        }
      };
      return new Proxy(t, { get: (n, i) => r[i], set: (n, i, o) => r[i] = o });
    }
    var Fn = new Proxy(lu, { get: (e, r) => $r[r], set: (e, r, t) => $r[r] = t });
    function uu(e, r = 2) {
      let t = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (t.has(i)) return "[Circular *]";
          t.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, r);
    }
    function go(e = 7500) {
      let r = Mr.map(([t, ...n]) => `${t} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return r.length < e ? r : r.slice(-e);
    }
    function ho() {
      Mr.length = 0;
    }
    var L = Fn;
    var yo = k(require("fs"));
    function Nn() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && yo.default.existsSync(e)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Mn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    var Rt = "libquery_engine";
    function At(e, r) {
      let t = r === "url";
      return e.includes("windows") ? t ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? t ? `${Rt}.dylib.node` : `${Rt}-${e}.dylib.node` : t ? `${Rt}.so.node` : `${Rt}-${e}.so.node`;
    }
    var xo = k(require("child_process"));
    var Vn = k(require("fs/promises"));
    var Ot = k(require("os"));
    var ke = Symbol.for("@ts-pattern/matcher");
    var cu = Symbol.for("@ts-pattern/isVariadic");
    var _t = "@ts-pattern/anonymous-select-key";
    var $n = (e) => !!(e && typeof e == "object");
    var It = (e) => e && !!e[ke];
    var we = (e, r, t) => {
      if (It(e)) {
        let n = e[ke](), { matched: i, selections: o } = n.match(r);
        return i && o && Object.keys(o).forEach((s) => t(s, o[s])), i;
      }
      if ($n(e)) {
        if (!$n(r)) return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(r)) return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            It(a) && a[cu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (r.length < n.length + i.length) return false;
            let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => we(u, s[c], t)) && i.every((u, c) => we(u, a[c], t)) && (o.length === 0 || we(o[0], l, t));
          }
          return e.length === r.length && e.every((s, a) => we(s, r[a], t));
        }
        return Object.keys(e).every((n) => {
          let i = e[n];
          return (n in r || It(o = i) && o[ke]().matcherType === "optional") && we(i, r[n], t);
          var o;
        });
      }
      return Object.is(r, e);
    };
    var je = (e) => {
      var r, t, n;
      return $n(e) ? It(e) ? (r = (t = (n = e[ke]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e) ? qr(e, je) : qr(Object.values(e), je) : [];
    };
    var qr = (e, r) => e.reduce((t, n) => t.concat(r(n)), []);
    function ce(e) {
      return Object.assign(e, { optional: () => pu(e), and: (r) => j(e, r), or: (r) => mu(e, r), select: (r) => r === void 0 ? Eo(e) : Eo(r, e) });
    }
    function pu(e) {
      return ce({ [ke]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return r === void 0 ? (je(e).forEach((i) => n(i, void 0)), { matched: true, selections: t }) : { matched: we(e, r, n), selections: t };
      }, getSelectionKeys: () => je(e), matcherType: "optional" }) });
    }
    function j(...e) {
      return ce({ [ke]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return { matched: e.every((i) => we(i, r, n)), selections: t };
      }, getSelectionKeys: () => qr(e, je), matcherType: "and" }) });
    }
    function mu(...e) {
      return ce({ [ke]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return qr(e, je).forEach((i) => n(i, void 0)), { matched: e.some((i) => we(i, r, n)), selections: t };
      }, getSelectionKeys: () => qr(e, je), matcherType: "or" }) });
    }
    function _(e) {
      return { [ke]: () => ({ match: (r) => ({ matched: !!e(r) }) }) };
    }
    function Eo(...e) {
      let r = typeof e[0] == "string" ? e[0] : void 0, t = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return ce({ [ke]: () => ({ match: (n) => {
        let i = { [r ?? _t]: n };
        return { matched: t === void 0 || we(t, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, getSelectionKeys: () => [r ?? _t].concat(t === void 0 ? [] : je(t)) }) });
    }
    function Ee(e) {
      return typeof e == "number";
    }
    function Ze(e) {
      return typeof e == "string";
    }
    function $e(e) {
      return typeof e == "bigint";
    }
    var Rd = ce(_(function(e) {
      return true;
    }));
    var Xe = (e) => Object.assign(ce(e), { startsWith: (r) => {
      return Xe(j(e, (t = r, _((n) => Ze(n) && n.startsWith(t)))));
      var t;
    }, endsWith: (r) => {
      return Xe(j(e, (t = r, _((n) => Ze(n) && n.endsWith(t)))));
      var t;
    }, minLength: (r) => Xe(j(e, ((t) => _((n) => Ze(n) && n.length >= t))(r))), maxLength: (r) => Xe(j(e, ((t) => _((n) => Ze(n) && n.length <= t))(r))), includes: (r) => {
      return Xe(j(e, (t = r, _((n) => Ze(n) && n.includes(t)))));
      var t;
    }, regex: (r) => {
      return Xe(j(e, (t = r, _((n) => Ze(n) && !!n.match(t)))));
      var t;
    } });
    var Ad = Xe(_(Ze));
    var be = (e) => Object.assign(ce(e), { between: (r, t) => be(j(e, ((n, i) => _((o) => Ee(o) && n <= o && i >= o))(r, t))), lt: (r) => be(j(e, ((t) => _((n) => Ee(n) && n < t))(r))), gt: (r) => be(j(e, ((t) => _((n) => Ee(n) && n > t))(r))), lte: (r) => be(j(e, ((t) => _((n) => Ee(n) && n <= t))(r))), gte: (r) => be(j(e, ((t) => _((n) => Ee(n) && n >= t))(r))), int: () => be(j(e, _((r) => Ee(r) && Number.isInteger(r)))), finite: () => be(j(e, _((r) => Ee(r) && Number.isFinite(r)))), positive: () => be(j(e, _((r) => Ee(r) && r > 0))), negative: () => be(j(e, _((r) => Ee(r) && r < 0))) });
    var Id = be(_(Ee));
    var qe = (e) => Object.assign(ce(e), { between: (r, t) => qe(j(e, ((n, i) => _((o) => $e(o) && n <= o && i >= o))(r, t))), lt: (r) => qe(j(e, ((t) => _((n) => $e(n) && n < t))(r))), gt: (r) => qe(j(e, ((t) => _((n) => $e(n) && n > t))(r))), lte: (r) => qe(j(e, ((t) => _((n) => $e(n) && n <= t))(r))), gte: (r) => qe(j(e, ((t) => _((n) => $e(n) && n >= t))(r))), positive: () => qe(j(e, _((r) => $e(r) && r > 0))), negative: () => qe(j(e, _((r) => $e(r) && r < 0))) });
    var _d = qe(_($e));
    var kd = ce(_(function(e) {
      return typeof e == "boolean";
    }));
    var Dd = ce(_(function(e) {
      return typeof e == "symbol";
    }));
    var Od = ce(_(function(e) {
      return e == null;
    }));
    var Ld = ce(_(function(e) {
      return e != null;
    }));
    var qn = { matched: false, value: void 0 };
    function pr(e) {
      return new jn(e, qn);
    }
    var jn = class e {
      constructor(r, t) {
        this.input = void 0, this.state = void 0, this.input = r, this.state = t;
      }
      with(...r) {
        if (this.state.matched) return this;
        let t = r[r.length - 1], n = [r[0]], i;
        r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
        let o = false, s = {}, a = (u, c) => {
          o = true, s[u] = c;
        }, l = !n.some((u) => we(u, this.input, a)) || i && !i(this.input) ? qn : { matched: true, value: t(o ? _t in s ? s[_t] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(r, t) {
        if (this.state.matched) return this;
        let n = !!r(this.input);
        return new e(this.input, n ? { matched: true, value: t(this.input, this.input) } : qn);
      }
      otherwise(r) {
        return this.state.matched ? this.state.value : r(this.input);
      }
      exhaustive() {
        if (this.state.matched) return this.state.value;
        let r;
        try {
          r = JSON.stringify(this.input);
        } catch {
          r = this.input;
        }
        throw new Error(`Pattern matching error: no pattern matches value ${r}`);
      }
      run() {
        return this.exhaustive();
      }
      returnType() {
        return this;
      }
    };
    var Po = require("util");
    var du = { warn: fe("prisma:warn") };
    var fu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function kt(e, ...r) {
      fu.warn() && console.warn(`${du.warn} ${e}`, ...r);
    }
    var gu = (0, Po.promisify)(xo.default.exec);
    var re = L("prisma:get-platform");
    var hu = ["1.0.x", "1.1.x", "3.0.x"];
    async function vo() {
      let e = Ot.default.platform(), r = process.arch;
      if (e === "freebsd") {
        let s = await Lt("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: r };
        }
      }
      if (e !== "linux") return { platform: e, arch: r };
      let t = await Eu(), n = await Su(), i = wu({ arch: r, archFromUname: n, familyDistro: t.familyDistro }), { libssl: o } = await xu(i);
      return { platform: "linux", libssl: o, arch: r, archFromUname: n, ...t };
    }
    function yu(e) {
      let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = pr({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return re(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    async function Eu() {
      let e = "/etc/os-release";
      try {
        let r = await Vn.default.readFile(e, { encoding: "utf-8" });
        return yu(r);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    function bu(e) {
      let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (r) {
        let t = `${r[1]}.x`;
        return To(t);
      }
    }
    function bo(e) {
      let r = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (r) {
        let t = `${r[1]}${r[2] ?? ".0"}.x`;
        return To(t);
      }
    }
    function To(e) {
      let r = (() => {
        if (So(e)) return e;
        let t = e.split(".");
        return t[1] = "0", t.join(".");
      })();
      if (hu.includes(r)) return r;
    }
    function wu(e) {
      return pr(e).with({ familyDistro: "musl" }, () => (re('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: r }) => (re('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${r}-linux-gnu`, `/lib/${r}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (re('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: r, arch: t, archFromUname: n }) => (re(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
    }
    async function xu(e) {
      let r = 'grep -v "libssl.so.0"', t = await wo(e);
      if (t) {
        re(`Found libssl.so file using platform-specific paths: ${t}`);
        let o = bo(t);
        if (re(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
      }
      re('Falling back to "ldconfig" and other generic paths');
      let n = await Lt(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
      if (n || (n = await wo(["/lib64", "/usr/lib64", "/lib"])), n) {
        re(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = bo(n);
        if (re(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Lt("openssl version -v");
      if (i) {
        re(`Found openssl binary with version: ${i}`);
        let o = bu(i);
        if (re(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
      }
      return re("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    async function wo(e) {
      for (let r of e) {
        let t = await Pu(r);
        if (t) return t;
      }
    }
    async function Pu(e) {
      try {
        return (await Vn.default.readdir(e)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
      } catch (r) {
        if (r.code === "ENOENT") return;
        throw r;
      }
    }
    async function er() {
      let { binaryTarget: e } = await Co();
      return e;
    }
    function vu(e) {
      return e.binaryTarget !== void 0;
    }
    async function Bn() {
      let { memoized: e, ...r } = await Co();
      return r;
    }
    var Dt = {};
    async function Co() {
      if (vu(Dt)) return Promise.resolve({ ...Dt, memoized: true });
      let e = await vo(), r = Tu(e);
      return Dt = { ...e, binaryTarget: r }, { ...Dt, memoized: false };
    }
    function Tu(e) {
      let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      r === "linux" && !["x64", "arm64"].includes(t) && kt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (r === "linux" && i === void 0) {
        let c = pr({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        kt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (r === "linux" && o === void 0 && re(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
      if (r === "darwin") return "darwin";
      if (r === "win32") return "windows";
      if (r === "freebsd") return o;
      if (r === "openbsd") return "openbsd";
      if (r === "netbsd") return "netbsd";
      if (r === "linux" && o === "nixos") return "linux-nixos";
      if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
      if (r === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || So(i) ? c : `${c}-openssl-${i}`;
      }
      return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && kt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    async function Cu(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    function Lt(e) {
      return Cu(async () => {
        let r = await gu(e);
        return re(`Command "${e}" successfully returned "${r.stdout}"`), r.stdout;
      });
    }
    async function Su() {
      return typeof Ot.default.machine == "function" ? Ot.default.machine() : (await Lt("uname -m"))?.trim();
    }
    function So(e) {
      return e.startsWith("1.");
    }
    var $o = k(Mo());
    function Kn(e) {
      return (0, $o.default)(e, e, { fallback: X });
    }
    var Du = k(zn());
    var M = k(require("path"));
    var Ou = k(zn());
    var df = L("prisma:engines");
    function qo() {
      return M.default.join(__dirname, "../");
    }
    var ff = "libquery-engine";
    M.default.join(__dirname, "../query-engine-darwin");
    M.default.join(__dirname, "../query-engine-darwin-arm64");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    M.default.join(__dirname, "../query-engine-linux-static-x64");
    M.default.join(__dirname, "../query-engine-linux-static-arm64");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    M.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    M.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../query_engine-windows.dll.node");
    var Zn = k(require("fs"));
    var jo = L("chmodPlusX");
    function Xn(e) {
      if (process.platform === "win32") return;
      let r = Zn.default.statSync(e), t = r.mode | 64 | 8 | 1;
      if (r.mode === t) {
        jo(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = t.toString(8).slice(-3);
      jo(`Have to call chmodPlusX on ${e}`), Zn.default.chmodSync(e, n);
    }
    function ei(e) {
      let r = e.e, t = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Kn("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ie(e.id)}\`).`, s = pr({ message: r.message, code: r.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${t("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${t("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${t("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${r.message}`;
    }
    var ni = k(Uo());
    var qt = k(require("fs"));
    var fr = k(require("path"));
    function Qo(e) {
      let r = e.ignoreProcessEnv ? {} : process.env, t = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1], u, c;
        if (l === "\\") c = a[0], u = c.replace("\\$", "$");
        else {
          let p = a[2];
          c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e.parsed[p] || "", u = t(u);
        }
        return o.replace(c, u);
      }, n) ?? n;
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(r, n) ? r[n] : e.parsed[n];
        e.parsed[n] = t(i);
      }
      for (let n in e.parsed) r[n] = e.parsed[n];
      return e;
    }
    var ti = L("prisma:tryLoadEnv");
    function Br({ rootEnvPath: e, schemaEnvPath: r }, t = { conflictCheck: "none" }) {
      let n = Go(e);
      t.conflictCheck !== "none" && Uu(n, r, t.conflictCheck);
      let i = null;
      return Jo(n?.path, r) || (i = Go(r)), !n && !i && ti("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ue(H("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    function Uu(e, r, t) {
      let n = e?.dotenvResult.parsed, i = !Jo(e?.path, r);
      if (n && r && i && qt.default.existsSync(r)) {
        let o = ni.default.parse(qt.default.readFileSync(r)), s = [];
        for (let a in o) n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = fr.default.relative(process.cwd(), e.path), l = fr.default.relative(process.cwd(), r);
          if (t === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${H(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (t === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => H(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
            console.warn(`${fe("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Go(e) {
      if (Qu(e)) {
        ti(`Environment variables loaded from ${e}`);
        let r = ni.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: Qo(r), message: Ie(`Environment variables loaded from ${fr.default.relative(process.cwd(), e)}`), path: e };
      } else ti(`Environment variables not found at ${e}`);
      return null;
    }
    function Jo(e, r) {
      return e && r && fr.default.resolve(e) === fr.default.resolve(r);
    }
    function Qu(e) {
      return !!(e && qt.default.existsSync(e));
    }
    var Ho = "library";
    function Ur(e) {
      let r = Gu();
      return r || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Ho);
    }
    function Gu() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    var De;
    ((r) => {
      let e;
      ((b) => (b.findUnique = "findUnique", b.findUniqueOrThrow = "findUniqueOrThrow", b.findFirst = "findFirst", b.findFirstOrThrow = "findFirstOrThrow", b.findMany = "findMany", b.create = "create", b.createMany = "createMany", b.createManyAndReturn = "createManyAndReturn", b.update = "update", b.updateMany = "updateMany", b.upsert = "upsert", b.delete = "delete", b.deleteMany = "deleteMany", b.groupBy = "groupBy", b.count = "count", b.aggregate = "aggregate", b.findRaw = "findRaw", b.aggregateRaw = "aggregateRaw"))(e = r.ModelAction || (r.ModelAction = {}));
    })(De || (De = {}));
    var Qr = k(require("path"));
    function ii(e) {
      return Qr.default.sep === Qr.default.posix.sep ? e : e.split(Qr.default.sep).join(Qr.default.posix.sep);
    }
    var Xo = k(oi());
    function ai(e) {
      return String(new si(e));
    }
    var si = class {
      constructor(r) {
        this.config = r;
      }
      toString() {
        let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: Hu(r.binaryTargets) }));
        return `generator ${r.name} {
${(0, Xo.default)(Wu(n), 2)}
}`;
      }
    };
    function Hu(e) {
      let r;
      if (e.length > 0) {
        let t = e.find((n) => n.fromEnvVar !== null);
        t ? r = `env("${t.fromEnvVar}")` : r = e.map((n) => n.native ? "native" : n.value);
      } else r = void 0;
      return r;
    }
    function Wu(e) {
      let r = Object.keys(e).reduce((t, n) => Math.max(t, n.length), 0);
      return Object.entries(e).map(([t, n]) => `${t.padEnd(r)} = ${Ku(n)}`).join(`
`);
    }
    function Ku(e) {
      return JSON.parse(JSON.stringify(e, (r, t) => Array.isArray(t) ? `[${t.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
    }
    var Jr = {};
    Fr(Jr, { error: () => Zu, info: () => zu, log: () => Yu, query: () => Xu, should: () => es, tags: () => Gr, warn: () => li });
    var Gr = { error: ue("prisma:error"), warn: fe("prisma:warn"), info: _e("prisma:info"), query: ze("prisma:query") };
    var es = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Yu(...e) {
      console.log(...e);
    }
    function li(e, ...r) {
      es.warn() && console.warn(`${Gr.warn} ${e}`, ...r);
    }
    function zu(e, ...r) {
      console.info(`${Gr.info} ${e}`, ...r);
    }
    function Zu(e, ...r) {
      console.error(`${Gr.error} ${e}`, ...r);
    }
    function Xu(e, ...r) {
      console.log(`${Gr.query} ${e}`, ...r);
    }
    function jt(e, r) {
      if (!e) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    function rr(e, r) {
      throw new Error(r);
    }
    function ci(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    var pi = (e, r) => e.reduce((t, n) => (t[r(n)] = n, t), {});
    function gr(e, r) {
      let t = {};
      for (let n of Object.keys(e)) t[n] = r(e[n], n);
      return t;
    }
    function mi(e, r) {
      if (e.length === 0) return;
      let t = e[0];
      for (let n = 1; n < e.length; n++) r(t, e[n]) < 0 && (t = e[n]);
      return t;
    }
    function w(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    var os = /* @__PURE__ */ new Set();
    var Hr = (e, r, ...t) => {
      os.has(e) || (os.add(e), li(r, ...t));
    };
    var V = class extends Error {
      constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(r), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    w(V, "PrismaClientKnownRequestError");
    var Oe = class extends V {
      constructor(r, t) {
        super(r, { code: "P2025", clientVersion: t }), this.name = "NotFoundError";
      }
    };
    w(Oe, "NotFoundError");
    var R = class e extends Error {
      constructor(r, t, n) {
        super(r), this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    w(R, "PrismaClientInitializationError");
    var le = class extends Error {
      constructor(r, t) {
        super(r), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    w(le, "PrismaClientRustPanicError");
    var B = class extends Error {
      constructor(r, { clientVersion: t, batchRequestIdx: n }) {
        super(r), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    w(B, "PrismaClientUnknownRequestError");
    var W = class extends Error {
      constructor(t, { clientVersion: n }) {
        super(t);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    w(W, "PrismaClientValidationError");
    var hr = class {
      constructor(r) {
        this._engine = r;
      }
      prometheus(r) {
        return this._engine.metrics({ format: "prometheus", ...r });
      }
      json(r) {
        return this._engine.metrics({ format: "json", ...r });
      }
    };
    function Wr(e) {
      let r;
      return { get() {
        return r || (r = { value: e() }), r.value;
      } };
    }
    function ss(e, r) {
      let t = Wr(() => rc(r));
      Object.defineProperty(e, "dmmf", { get: () => t.get() });
    }
    function rc(e) {
      return { datamodel: { models: di(e.models), enums: di(e.enums), types: di(e.types) } };
    }
    function di(e) {
      return Object.entries(e).map(([r, t]) => ({ name: r, ...t }));
    }
    var Ut = Symbol();
    var fi = /* @__PURE__ */ new WeakMap();
    var Le = class {
      constructor(r) {
        r === Ut ? fi.set(this, `Prisma.${this._getName()}`) : fi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return fi.get(this);
      }
    };
    var Kr = class extends Le {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Yr = class extends Kr {
    };
    gi(Yr, "DbNull");
    var zr = class extends Kr {
    };
    gi(zr, "JsonNull");
    var Zr = class extends Kr {
    };
    gi(Zr, "AnyNull");
    var Qt = { classes: { DbNull: Yr, JsonNull: zr, AnyNull: Zr }, instances: { DbNull: new Yr(Ut), JsonNull: new zr(Ut), AnyNull: new Zr(Ut) } };
    function gi(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    function Xr(e) {
      return { ok: false, error: e, map() {
        return Xr(e);
      }, flatMap() {
        return Xr(e);
      } };
    }
    var hi = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(r) {
        return this.registeredErrors[r];
      }
      registerNewError(r) {
        let t = 0;
        for (; this.registeredErrors[t] !== void 0; ) t++;
        return this.registeredErrors[t] = { error: r }, t;
      }
    };
    var yi = (e) => {
      let r = new hi(), t = tr(r, e.startTransaction.bind(e)), n = { adapterName: e.adapterName, errorRegistry: r, queryRaw: tr(r, e.queryRaw.bind(e)), executeRaw: tr(r, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...i) => (await t(...i)).map((s) => tc(r, s)) };
      return e.getConnectionInfo && (n.getConnectionInfo = nc(r, e.getConnectionInfo.bind(e))), n;
    };
    var tc = (e, r) => ({ adapterName: r.adapterName, provider: r.provider, options: r.options, queryRaw: tr(e, r.queryRaw.bind(r)), executeRaw: tr(e, r.executeRaw.bind(r)), commit: tr(e, r.commit.bind(r)), rollback: tr(e, r.rollback.bind(r)) });
    function tr(e, r) {
      return async (...t) => {
        try {
          return await r(...t);
        } catch (n) {
          let i = e.registerNewError(n);
          return Xr({ kind: "GenericJs", id: i });
        }
      };
    }
    function nc(e, r) {
      return (...t) => {
        try {
          return r(...t);
        } catch (n) {
          let i = e.registerNewError(n);
          return Xr({ kind: "GenericJs", id: i });
        }
      };
    }
    var _l = k(Yn());
    var kl = require("async_hooks");
    var Dl = require("events");
    var Ol = k(require("fs"));
    var vt = k(require("path"));
    var ie = class e {
      constructor(r, t) {
        if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
        let n = t.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
        let i = 0, o = 0;
        for (; i < t.length; ) {
          let s = t[i++], a = r[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `?${this.strings[t++]}`;
        return n;
      }
      get statement() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `:${t}${this.strings[t++]}`;
        return n;
      }
      get text() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `$${t}${this.strings[t++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function as(e, r = ",", t = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new ie([t, ...Array(e.length - 1).fill(r), n], e);
    }
    function Ei(e) {
      return new ie([e], []);
    }
    var ls = Ei("");
    function bi(e, ...r) {
      return new ie(e, r);
    }
    function et(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(r) {
        return e[r];
      } };
    }
    function te(e, r) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return r();
      } };
    }
    var xe = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(r) {
        return this._map.get(r)?.value;
      }
      set(r, t) {
        this._map.set(r, { value: t });
      }
      getOrCreate(r, t) {
        let n = this._map.get(r);
        if (n) return n.value;
        let i = t();
        return this.set(r, i), i;
      }
    };
    function nr(e) {
      let r = new xe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(t) {
        return r.getOrCreate(t, () => e.getPropertyValue(t));
      }, getPropertyDescriptor(t) {
        return e.getPropertyDescriptor?.(t);
      } };
    }
    var Gt = { enumerable: true, configurable: true, writable: true };
    function Jt(e) {
      let r = new Set(e);
      return { getOwnPropertyDescriptor: () => Gt, has: (t, n) => r.has(n), set: (t, n, i) => r.add(n) && Reflect.set(t, n, i), ownKeys: () => [...r] };
    }
    var us = Symbol.for("nodejs.util.inspect.custom");
    function Pe(e, r) {
      let t = ic(r), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = t.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = t.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = cs(Reflect.ownKeys(o), t), a = cs(Array.from(t.keys()), t);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return t.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = t.get(s);
        return l ? l.getPropertyDescriptor ? { ...Gt, ...l?.getPropertyDescriptor(s) } : Gt : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[us] = function() {
        let o = { ...this };
        return delete o[us], o;
      }, i;
    }
    function ic(e) {
      let r = /* @__PURE__ */ new Map();
      for (let t of e) {
        let n = t.getKeys();
        for (let i of n) r.set(i, t);
      }
      return r;
    }
    function cs(e, r) {
      return e.filter((t) => r.get(t)?.has?.(t) ?? true);
    }
    function yr(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Er(e, r) {
      return { batch: e, transaction: r?.kind === "batch" ? { isolationLevel: r.options.isolationLevel } : void 0 };
    }
    var br = class {
      constructor(r = 0, t) {
        this.context = t;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = r;
      }
      write(r) {
        return typeof r == "string" ? this.currentLine += r : r.write(this), this;
      }
      writeJoined(r, t) {
        let n = t.length - 1;
        for (let i = 0; i < t.length; i++) this.write(t[i]), i !== n && this.write(r);
        return this;
      }
      writeLine(r) {
        return this.write(r).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let r = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, r?.(), this;
      }
      withIndent(r) {
        return this.indent(), r(this), this.unindent(), this;
      }
      afterNextNewline(r) {
        return this.afterNextNewLineCallback = r, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(r) {
        return this.marginSymbol = r, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
      }
    };
    function ps(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    function wr(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Ht(e) {
      return e.toString() !== "Invalid Date";
    }
    var xr = 9e15;
    var Ge = 1e9;
    var wi = "0123456789abcdef";
    var Kt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Yt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var xi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -xr, maxE: xr, crypto: false };
    var gs;
    var Fe;
    var x = true;
    var Zt = "[DecimalError] ";
    var Qe = Zt + "Invalid argument: ";
    var hs = Zt + "Precision limit exceeded";
    var ys = Zt + "crypto unavailable";
    var Es = "[object Decimal]";
    var ee = Math.floor;
    var Q = Math.pow;
    var oc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var sc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var ac = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var bs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var he = 1e7;
    var E = 7;
    var lc = 9007199254740991;
    var uc = Kt.length - 1;
    var Pi = Yt.length - 1;
    var d = { toStringTag: Es };
    d.absoluteValue = d.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), y(e);
    };
    d.ceil = function() {
      return y(new this.constructor(this), this.e + 1, 2);
    };
    d.clampedTo = d.clamp = function(e, r) {
      var t, n = this, i = n.constructor;
      if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
      if (e.gt(r)) throw Error(Qe + r);
      return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
    };
    d.comparedTo = d.cmp = function(e) {
      var r, t, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
      if (l !== u) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r) if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    d.cosine = d.cos = function() {
      var e, r, t = this, n = t.constructor;
      return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = cc(n, Ts(n, t)), n.precision = e, n.rounding = r, y(Fe == 2 || Fe == 3 ? t.neg() : t, e, r, true)) : new n(1) : new n(NaN);
    };
    d.cubeRoot = d.cbrt = function() {
      var e, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero()) return new p(c);
      for (x = false, o = c.s * Q(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = K(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = Q(t, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = F(u.plus(c).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (t = K(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
      }
      return x = true, y(n, e, p.rounding, r);
    };
    d.decimalPlaces = d.dp = function() {
      var e, r = this.d, t = NaN;
      if (r) {
        if (e = r.length - 1, t = (e - ee(this.e / E)) * E, e = r[e], e) for (; e % 10 == 0; e /= 10) t--;
        t < 0 && (t = 0);
      }
      return t;
    };
    d.dividedBy = d.div = function(e) {
      return F(this, new this.constructor(e));
    };
    d.dividedToIntegerBy = d.divToInt = function(e) {
      var r = this, t = r.constructor;
      return y(F(r, new t(e), 0, 1, 1), t.precision, t.rounding);
    };
    d.equals = d.eq = function(e) {
      return this.cmp(e) === 0;
    };
    d.floor = function() {
      return y(new this.constructor(this), this.e + 1, 3);
    };
    d.greaterThan = d.gt = function(e) {
      return this.cmp(e) > 0;
    };
    d.greaterThanOrEqualTo = d.gte = function(e) {
      var r = this.cmp(e);
      return r == 1 || r === 0;
    };
    d.hyperbolicCosine = d.cosh = function() {
      var e, r, t, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / en(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Pr(s, 1, o.times(r), new s(1), true);
      for (var l, u = e, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return y(o, s.precision = t, s.rounding = n, true);
    };
    d.hyperbolicSine = d.sinh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Pr(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / en(5, e)), i = Pr(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = r, o.rounding = t, y(i, r, t, true);
    };
    d.hyperbolicTangent = d.tanh = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, F(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
    };
    d.inverseCosine = d.acos = function() {
      var e, r = this, t = r.constructor, n = r.abs().cmp(1), i = t.precision, o = t.rounding;
      return n !== -1 ? n === 0 ? r.isNeg() ? ge(t, i, o) : new t(0) : new t(NaN) : r.isZero() ? ge(t, i + 4, o).times(0.5) : (t.precision = i + 6, t.rounding = 1, r = r.asin(), e = ge(t, i + 4, o).times(0.5), t.precision = i, t.rounding = o, e.minus(r));
    };
    d.inverseHyperbolicCosine = d.acosh = function() {
      var e, r, t = this, n = t.constructor;
      return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, x = false, t = t.times(t).minus(1).sqrt().plus(t), x = true, n.precision = e, n.rounding = r, t.ln()) : new n(t);
    };
    d.inverseHyperbolicSine = d.asinh = function() {
      var e, r, t = this, n = t.constructor;
      return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, x = false, t = t.times(t).plus(1).sqrt().plus(t), x = true, n.precision = e, n.rounding = r, t.ln());
    };
    d.inverseHyperbolicTangent = d.atanh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, r, true) : (o.precision = t = n - i.e, i = F(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
    };
    d.inverseSine = d.asin = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = ge(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
    };
    d.inverseTangent = d.atan = function() {
      var e, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, m = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Pi) return s = ge(c, p + 4, m).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Pi) return s = ge(c, p + 4, m).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / E + 2 | 0), e = t; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (x = false, r = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for (e = r; s.d[e] === o.d[e] && e--; ) ;
      return t && (s = s.times(2 << t - 1)), x = true, y(s, c.precision = p, c.rounding = m, true);
    };
    d.isFinite = function() {
      return !!this.d;
    };
    d.isInteger = d.isInt = function() {
      return !!this.d && ee(this.e / E) > this.d.length - 2;
    };
    d.isNaN = function() {
      return !this.s;
    };
    d.isNegative = d.isNeg = function() {
      return this.s < 0;
    };
    d.isPositive = d.isPos = function() {
      return this.s > 0;
    };
    d.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    d.lessThan = d.lt = function(e) {
      return this.cmp(e) < 0;
    };
    d.lessThanOrEqualTo = d.lte = function(e) {
      return this.cmp(e) < 1;
    };
    d.logarithm = d.log = function(e) {
      var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, m = c.rounding, f = 5;
      if (e == null) e = new c(10), r = true;
      else {
        if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1)) return new c(NaN);
        r = e.eq(10);
      }
      if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
      if (r) if (t.length > 1) o = true;
      else {
        for (i = t[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (x = false, a = p + f, s = Ue(u, a), n = r ? zt(c, a + 10) : Ue(e, a), l = F(s, n, a, 1), rt(l.d, i = p, m)) do
        if (a += 10, s = Ue(u, a), n = r ? zt(c, a + 10) : Ue(e, a), l = F(s, n, a, 1), !o) {
          +K(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
          break;
        }
      while (rt(l.d, i += 10, m));
      return x = true, y(l, p, m);
    };
    d.minus = d.sub = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, m, f = this, g = f.constructor;
      if (e = new g(e), !f.d || !e.d) return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s) return e.s = -e.s, f.plus(e);
      if (u = f.d, m = e.d, a = g.precision, l = g.rounding, !u[0] || !m[0]) {
        if (m[0]) e.s = -e.s;
        else if (u[0]) e = new g(f);
        else return new g(l === 3 ? -0 : 0);
        return x ? y(e, a, l) : e;
      }
      if (t = ee(e.e / E), c = ee(f.e / E), u = u.slice(), o = c - t, o) {
        for (p = o < 0, p ? (r = u, o = -o, s = m.length) : (r = m, t = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; ) r.push(0);
        r.reverse();
      } else {
        for (n = u.length, s = m.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != m[n]) {
          p = u[n] < m[n];
          break;
        }
        o = 0;
      }
      for (p && (r = u, u = m, m = r, e.s = -e.s), s = u.length, n = m.length - s; n > 0; --n) u[s++] = 0;
      for (n = m.length; n > o; ) {
        if (u[--n] < m[n]) {
          for (i = n; i && u[--i] === 0; ) u[i] = he - 1;
          --u[i], u[n] += he;
        }
        u[n] -= m[n];
      }
      for (; u[--s] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --t;
      return u[0] ? (e.d = u, e.e = Xt(u, t), x ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
    };
    d.modulo = d.mod = function(e) {
      var r, t = this, n = t.constructor;
      return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (x = false, n.modulo == 9 ? (r = F(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = F(t, e, 0, n.modulo, 1), r = r.times(e), x = true, t.minus(r));
    };
    d.naturalExponential = d.exp = function() {
      return vi(this);
    };
    d.naturalLogarithm = d.ln = function() {
      return Ue(this);
    };
    d.negated = d.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, y(e);
    };
    d.plus = d.add = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p = this, m = p.constructor;
      if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d || (e = new m(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s) return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = m.precision, l = m.rounding, !u[0] || !c[0]) return c[0] || (e = new m(p)), x ? y(e, a, l) : e;
      if (o = ee(p.e / E), n = ee(e.e / E), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--; ) t.push(0);
        t.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i; ) r = (u[--i] = u[i] + c[i] + r) / he | 0, u[i] %= he;
      for (r && (u.unshift(r), ++n), s = u.length; u[--s] == 0; ) u.pop();
      return e.d = u, e.e = Xt(u, n), x ? y(e, a, l) : e;
    };
    d.precision = d.sd = function(e) {
      var r, t = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Qe + e);
      return t.d ? (r = ws(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
    };
    d.round = function() {
      var e = this, r = e.constructor;
      return y(new r(e), e.e + 1, r.rounding);
    };
    d.sine = d.sin = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = mc(n, Ts(n, t)), n.precision = e, n.rounding = r, y(Fe > 2 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    d.squareRoot = d.sqrt = function() {
      var e, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (x = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = K(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(F(s, o, t + 2, 1)).times(0.5), K(o.d).slice(0, t) === (r = K(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return x = true, y(n, l, c.rounding, e);
    };
    d.tangent = d.tan = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = F(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, y(Fe == 2 || Fe == 4 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    d.times = d.mul = function(e) {
      var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, m = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !m || !m[0] || !f || !f[0]) return new p(!e.s || m && !m[0] && !f || f && !f[0] && !m ? NaN : !m || !f ? e.s / 0 : e.s * 0);
      for (t = ee(c.e / E) + ee(e.e / E), l = m.length, u = f.length, l < u && (o = m, m = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
      for (n = u; --n >= 0; ) {
        for (r = 0, i = l + n; i > n; ) a = o[i] + f[n] * m[i - n - 1] + r, o[i--] = a % he | 0, r = a / he | 0;
        o[i] = (o[i] + r) % he | 0;
      }
      for (; !o[--s]; ) o.pop();
      return r ? ++t : o.shift(), e.d = o, e.e = Xt(o, t), x ? y(e, p.precision, p.rounding) : e;
    };
    d.toBinary = function(e, r) {
      return Ci(this, 2, e, r);
    };
    d.toDecimalPlaces = d.toDP = function(e, r) {
      var t = this, n = t.constructor;
      return t = new n(t), e === void 0 ? t : (oe(e, 0, Ge), r === void 0 ? r = n.rounding : oe(r, 0, 8), y(t, e + t.e + 1, r));
    };
    d.toExponential = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = ve(n, true) : (oe(e, 0, Ge), r === void 0 ? r = i.rounding : oe(r, 0, 8), n = y(new i(n), e + 1, r), t = ve(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    d.toFixed = function(e, r) {
      var t, n, i = this, o = i.constructor;
      return e === void 0 ? t = ve(i) : (oe(e, 0, Ge), r === void 0 ? r = o.rounding : oe(r, 0, 8), n = y(new o(i), e + i.e + 1, r), t = ve(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
    };
    d.toFraction = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, m, f = this, g = f.d, h = f.constructor;
      if (!g) return new h(f);
      if (u = t = new h(1), n = l = new h(0), r = new h(n), o = r.e = ws(g) - f.e - 1, s = o % E, r.d[0] = Q(10, s < 0 ? E + s : s), e == null) e = o > 0 ? r : u;
      else {
        if (a = new h(e), !a.isInt() || a.lt(u)) throw Error(Qe + a);
        e = a.gt(r) ? o > 0 ? r : u : a;
      }
      for (x = false, a = new h(K(g)), c = h.precision, h.precision = o = g.length * E * 2; p = F(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e) != 1; ) t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
      return i = F(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, m = F(u, n, o, 1).minus(f).abs().cmp(F(l, t, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, t], h.precision = c, x = true, m;
    };
    d.toHexadecimal = d.toHex = function(e, r) {
      return Ci(this, 16, e, r);
    };
    d.toNearest = function(e, r) {
      var t = this, n = t.constructor;
      if (t = new n(t), e == null) {
        if (!t.d) return t;
        e = new n(1), r = n.rounding;
      } else {
        if (e = new n(e), r === void 0 ? r = n.rounding : oe(r, 0, 8), !t.d) return e.s ? t : e;
        if (!e.d) return e.s && (e.s = t.s), e;
      }
      return e.d[0] ? (x = false, t = F(t, e, 0, r, 1).times(e), x = true, y(t)) : (e.s = t.s, t = e), t;
    };
    d.toNumber = function() {
      return +this;
    };
    d.toOctal = function(e, r) {
      return Ci(this, 8, e, r);
    };
    d.toPower = d.pow = function(e) {
      var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(Q(+a, u));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
      if (r = ee(e.e / E), r >= e.d.length - 1 && (t = u < 0 ? -u : u) <= lc) return i = xs(l, a, t, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
      if (s = a.s, s < 0) {
        if (r < e.d.length - 1) return new l(NaN);
        if (e.d[r] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return t = Q(+a, u), r = t == 0 || !isFinite(t) ? ee(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (x = false, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = vi(e.times(Ue(a, n + t)), n), i.d && (i = y(i, n + 5, 1), rt(i.d, n, o) && (r = n + 10, i = y(vi(e.times(Ue(a, r + t)), r), r + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, x = true, l.rounding = o, y(i, n, o));
    };
    d.toPrecision = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, Ge), r === void 0 ? r = i.rounding : oe(r, 0, 8), n = y(new i(n), e, r), t = ve(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    d.toSignificantDigits = d.toSD = function(e, r) {
      var t = this, n = t.constructor;
      return e === void 0 ? (e = n.precision, r = n.rounding) : (oe(e, 1, Ge), r === void 0 ? r = n.rounding : oe(r, 0, 8)), y(new n(t), e, r);
    };
    d.toString = function() {
      var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + t : t;
    };
    d.truncated = d.trunc = function() {
      return y(new this.constructor(this), this.e + 1, 1);
    };
    d.valueOf = d.toJSON = function() {
      var e = this, r = e.constructor, t = ve(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() ? "-" + t : t;
    };
    function K(e) {
      var r, t, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, r = 1; r < i; r++) n = e[r] + "", t = E - n.length, t && (o += Be(t)), o += n;
        s = e[r], n = s + "", t = E - n.length, t && (o += Be(t));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    function oe(e, r, t) {
      if (e !== ~~e || e < r || e > t) throw Error(Qe + e);
    }
    function rt(e, r, t, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --r;
      return --r < 0 ? (r += E, i = 0) : (i = Math.ceil((r + 1) / E), r %= E), o = Q(10, E - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == Q(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == Q(10, r - 3) - 1, s;
    }
    function Wt(e, r, t) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= r;
        for (i[0] += wi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
      }
      return i.reverse();
    }
    function cc(e, r) {
      var t, n, i;
      if (r.isZero()) return r;
      n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / en(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Pr(e, 1, r.times(i), new e(1));
      for (var o = t; o--; ) {
        var s = r.times(r);
        r = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= t, r;
    }
    var F = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function r(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      function t(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, m, f, g, h, I, T, S, C, b, de, ae, Lr, U, ne, Ae, Y, cr, Tt = n.constructor, _n = n.s == i.s ? 1 : -1, z = n.d, O = i.d;
        if (!z || !z[0] || !O || !O[0]) return new Tt(!n.s || !i.s || (z ? O && z[0] == O[0] : !O) ? NaN : z && z[0] == 0 || !O ? _n * 0 : _n / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = he, f = E, c = ee(n.e / f) - ee(i.e / f)), Y = O.length, ne = z.length, T = new Tt(_n), S = T.d = [], p = 0; O[p] == (z[p] || 0); p++) ;
        if (O[p] > (z[p] || 0) && c--, o == null ? (ae = o = Tt.precision, s = Tt.rounding) : a ? ae = o + (n.e - i.e) + 1 : ae = o, ae < 0) S.push(1), g = true;
        else {
          if (ae = ae / f + 2 | 0, p = 0, Y == 1) {
            for (m = 0, O = O[0], ae++; (p < ne || m) && ae--; p++) Lr = m * l + (z[p] || 0), S[p] = Lr / O | 0, m = Lr % O | 0;
            g = m || p < ne;
          } else {
            for (m = l / (O[0] + 1) | 0, m > 1 && (O = e(O, m, l), z = e(z, m, l), Y = O.length, ne = z.length), U = Y, C = z.slice(0, Y), b = C.length; b < Y; ) C[b++] = 0;
            cr = O.slice(), cr.unshift(0), Ae = O[0], O[1] >= l / 2 && ++Ae;
            do
              m = 0, u = r(O, C, Y, b), u < 0 ? (de = C[0], Y != b && (de = de * l + (C[1] || 0)), m = de / Ae | 0, m > 1 ? (m >= l && (m = l - 1), h = e(O, m, l), I = h.length, b = C.length, u = r(h, C, I, b), u == 1 && (m--, t(h, Y < I ? cr : O, I, l))) : (m == 0 && (u = m = 1), h = O.slice()), I = h.length, I < b && h.unshift(0), t(C, h, b, l), u == -1 && (b = C.length, u = r(O, C, Y, b), u < 1 && (m++, t(C, Y < b ? cr : O, b, l))), b = C.length) : u === 0 && (m++, C = [0]), S[p++] = m, u && C[0] ? C[b++] = z[U] || 0 : (C = [z[U]], b = 1);
            while ((U++ < ne || C[0] !== void 0) && ae--);
            g = C[0] !== void 0;
          }
          S[0] || S.shift();
        }
        if (f == 1) T.e = c, gs = g;
        else {
          for (p = 1, m = S[0]; m >= 10; m /= 10) p++;
          T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, g);
        }
        return T;
      };
    }();
    function y(e, r, t, n) {
      var i, o, s, a, l, u, c, p, m, f = e.constructor;
      e: if (r != null) {
        if (p = e.d, !p) return e;
        for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
        if (o = r - i, o < 0) o += E, s = r, c = p[m = 0], l = c / Q(10, i - s - 1) % 10 | 0;
        else if (m = Math.ceil((o + 1) / E), a = p.length, m >= a) if (n) {
          for (; a++ <= m; ) p.push(0);
          c = l = 0, i = 1, o %= E, s = o - E + 1;
        } else break e;
        else {
          for (c = a = p[m], i = 1; a >= 10; a /= 10) i++;
          o %= E, s = o - E + i, l = s < 0 ? 0 : c / Q(10, i - s - 1) % 10 | 0;
        }
        if (n = n || r < 0 || p[m + 1] !== void 0 || (s < 0 ? c : c % Q(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / Q(10, i - s) : 0 : p[m - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e.e + 1, p[0] = Q(10, (E - r % E) % E), e.e = -r || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = m, a = 1, m--) : (p.length = m + 1, a = Q(10, E - o), p[m] = s > 0 ? (c / Q(10, i - s) % Q(10, s) | 0) * a : 0), u) for (; ; ) if (m == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == he && (p[0] = 1));
          break;
        } else {
          if (p[m] += a, p[m] != he) break;
          p[m--] = 0, a = 1;
        }
        for (o = p.length; p[--o] === 0; ) p.pop();
      }
      return x && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function ve(e, r, t) {
      if (!e.isFinite()) return vs(e);
      var n, i = e.e, o = K(e.d), s = o.length;
      return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Be(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Be(-i - 1) + o, t && (n = t - s) > 0 && (o += Be(n))) : i >= s ? (o += Be(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + Be(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += Be(n))), o;
    }
    function Xt(e, r) {
      var t = e[0];
      for (r *= E; t >= 10; t /= 10) r++;
      return r;
    }
    function zt(e, r, t) {
      if (r > uc) throw x = true, t && (e.precision = t), Error(hs);
      return y(new e(Kt), r, 1, true);
    }
    function ge(e, r, t) {
      if (r > Pi) throw Error(hs);
      return y(new e(Yt), r, t, true);
    }
    function ws(e) {
      var r = e.length - 1, t = r * E + 1;
      if (r = e[r], r) {
        for (; r % 10 == 0; r /= 10) t--;
        for (r = e[0]; r >= 10; r /= 10) t++;
      }
      return t;
    }
    function Be(e) {
      for (var r = ""; e--; ) r += "0";
      return r;
    }
    function xs(e, r, t, n) {
      var i, o = new e(1), s = Math.ceil(n / E + 4);
      for (x = false; ; ) {
        if (t % 2 && (o = o.times(r), ds(o.d, s) && (i = true)), t = ee(t / 2), t === 0) {
          t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
          break;
        }
        r = r.times(r), ds(r.d, s);
      }
      return x = true, o;
    }
    function ms(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Ps(e, r, t) {
      for (var n, i = new e(r[0]), o = 0; ++o < r.length; ) if (n = new e(r[o]), n.s) i[t](n) && (i = n);
      else {
        i = n;
        break;
      }
      return i;
    }
    function vi(e, r) {
      var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, m = e.constructor, f = m.rounding, g = m.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new m(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (r == null ? (x = false, l = g) : l = r, a = new m(0.03125); e.e > -2; ) e = e.times(a), p += 5;
      for (n = Math.log(Q(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new m(1), m.precision = l; ; ) {
        if (o = y(o.times(e), l, 1), t = t.times(++c), a = s.plus(F(o, t, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
          for (i = p; i--; ) s = y(s.times(s), l, 1);
          if (r == null) if (u < 3 && rt(s.d, l - n, f, u)) m.precision = l += 10, t = o = a = new m(1), c = 0, u++;
          else return y(s, m.precision = g, f, x = true);
          else return m.precision = g, s;
        }
        s = a;
      }
    }
    function Ue(e, r) {
      var t, n, i, o, s, a, l, u, c, p, m, f = 1, g = 10, h = e, I = h.d, T = h.constructor, S = T.rounding, C = T.precision;
      if (h.s < 0 || !I || !I[0] || !h.e && I[0] == 1 && I.length == 1) return new T(I && !I[0] ? -1 / 0 : h.s != 1 ? NaN : I ? 0 : h);
      if (r == null ? (x = false, c = C) : c = r, T.precision = c += g, t = K(I), n = t.charAt(0), Math.abs(o = h.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) h = h.times(e), t = K(h.d), n = t.charAt(0), f++;
        o = h.e, n > 1 ? (h = new T("0." + t), o++) : h = new T(n + "." + t.slice(1));
      } else return u = zt(T, c + 2, C).times(o + ""), h = Ue(new T(n + "." + t.slice(1)), c - g).plus(u), T.precision = C, r == null ? y(h, C, S, x = true) : h;
      for (p = h, l = s = h = F(h.minus(1), h.plus(1), c, 1), m = y(h.times(h), c, 1), i = 3; ; ) {
        if (s = y(s.times(m), c, 1), u = l.plus(F(s, new T(i), c, 1)), K(u.d).slice(0, c) === K(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(zt(T, c + 2, C).times(o + ""))), l = F(l, new T(f), c, 1), r == null) if (rt(l.d, c - g, S, a)) T.precision = c += g, u = s = h = F(p.minus(1), p.plus(1), c, 1), m = y(h.times(h), c, 1), i = a = 1;
        else return y(l, T.precision = C, S, x = true);
        else return T.precision = C, l;
        l = u, i += 2;
      }
    }
    function vs(e) {
      return String(e.s * e.s / 0);
    }
    function Ti(e, r) {
      var t, n, i;
      for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++) ;
      for (i = r.length; r.charCodeAt(i - 1) === 48; --i) ;
      if (r = r.slice(n, i), r) {
        if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % E, t < 0 && (n += E), n < i) {
          for (n && e.d.push(+r.slice(0, n)), i -= E; n < i; ) e.d.push(+r.slice(n, n += E));
          r = r.slice(n), n = E - r.length;
        } else n -= i;
        for (; n--; ) r += "0";
        e.d.push(+r), x && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    function pc(e, r) {
      var t, n, i, o, s, a, l, u, c;
      if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), bs.test(r)) return Ti(e, r);
      } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (sc.test(r)) t = 16, r = r.toLowerCase();
      else if (oc.test(r)) t = 2;
      else if (ac.test(r)) t = 8;
      else throw Error(Qe + r);
      for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = xs(n, new n(t), o, o * 2)), u = Wt(r, t, he), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Xt(u, c), e.d = u, x = false, s && (e = F(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? Q(2, l) : ir.pow(2, l))), x = true, e);
    }
    function mc(e, r) {
      var t, n = r.d.length;
      if (n < 3) return r.isZero() ? r : Pr(e, 2, r, r);
      t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / en(5, t)), r = Pr(e, 2, r, r);
      for (var i, o = new e(5), s = new e(16), a = new e(20); t--; ) i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
      return r;
    }
    function Pr(e, r, t, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / E);
      for (x = false, l = t.times(t), a = new e(n); ; ) {
        if (s = F(a.times(l), new e(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = F(s.times(l), new e(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return x = true, s.d.length = p + 1, s;
    }
    function en(e, r) {
      for (var t = e; --r; ) t *= e;
      return t;
    }
    function Ts(e, r) {
      var t, n = r.s < 0, i = ge(e, e.precision, 1), o = i.times(0.5);
      if (r = r.abs(), r.lte(o)) return Fe = n ? 4 : 1, r;
      if (t = r.divToInt(i), t.isZero()) Fe = n ? 3 : 2;
      else {
        if (r = r.minus(t.times(i)), r.lte(o)) return Fe = ms(t) ? n ? 2 : 3 : n ? 4 : 1, r;
        Fe = ms(t) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return r.minus(i).abs();
    }
    function Ci(e, r, t, n) {
      var i, o, s, a, l, u, c, p, m, f = e.constructor, g = t !== void 0;
      if (g ? (oe(t, 1, Ge), n === void 0 ? n = f.rounding : oe(n, 0, 8)) : (t = f.precision, n = f.rounding), !e.isFinite()) c = vs(e);
      else {
        for (c = ve(e), s = c.indexOf("."), g ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), m = new f(1), m.e = c.length - s, m.d = Wt(ve(m), 10, i), m.e = m.d.length), p = Wt(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
        if (!p[0]) c = g ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = F(e, m, t, n, 0, i), p = e.d, o = e.e, u = gs), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = t, u) for (; ++p[--t] > i - 1; ) p[t] = 0, t || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l) ;
          for (s = 0, c = ""; s < l; s++) c += wi.charAt(p[s]);
          if (g) {
            if (l > 1) if (r == 16 || r == 8) {
              for (s = r == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = Wt(c, i, r), l = p.length; !p[l - 1]; --l) ;
              for (s = 1, c = "1."; s < l; s++) c += wi.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) c = "0" + c;
            c = "0." + c;
          } else if (++o > l) for (o -= l; o--; ) c += "0";
          else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function ds(e, r) {
      if (e.length > r) return e.length = r, true;
    }
    function dc(e) {
      return new this(e).abs();
    }
    function fc(e) {
      return new this(e).acos();
    }
    function gc(e) {
      return new this(e).acosh();
    }
    function hc(e, r) {
      return new this(e).plus(r);
    }
    function yc(e) {
      return new this(e).asin();
    }
    function Ec(e) {
      return new this(e).asinh();
    }
    function bc(e) {
      return new this(e).atan();
    }
    function wc(e) {
      return new this(e).atanh();
    }
    function xc(e, r) {
      e = new this(e), r = new this(r);
      var t, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = ge(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? ge(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = ge(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(F(e, r, o, 1)), r = ge(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(F(e, r, o, 1)), t;
    }
    function Pc(e) {
      return new this(e).cbrt();
    }
    function vc(e) {
      return y(e = new this(e), e.e + 1, 2);
    }
    function Tc(e, r, t) {
      return new this(e).clamp(r, t);
    }
    function Cc(e) {
      if (!e || typeof e != "object") throw Error(Zt + "Object expected");
      var r, t, n, i = e.defaults === true, o = ["precision", 1, Ge, "rounding", 0, 8, "toExpNeg", -xr, 0, "toExpPos", 0, xr, "maxE", 0, xr, "minE", -xr, 0, "modulo", 0, 9];
      for (r = 0; r < o.length; r += 3) if (t = o[r], i && (this[t] = xi[t]), (n = e[t]) !== void 0) if (ee(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
      else throw Error(Qe + t + ": " + n);
      if (t = "crypto", i && (this[t] = xi[t]), (n = e[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
      else throw Error(ys);
      else this[t] = false;
      else throw Error(Qe + t + ": " + n);
      return this;
    }
    function Sc(e) {
      return new this(e).cos();
    }
    function Rc(e) {
      return new this(e).cosh();
    }
    function Cs(e) {
      var r, t, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, fs(o)) {
          u.s = o.s, x ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            x ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return Ti(u, o.toString());
        } else if (l !== "string") throw Error(Qe + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), bs.test(o) ? Ti(u, o) : pc(u, o);
      }
      if (i.prototype = d, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Cc, i.clone = Cs, i.isDecimal = fs, i.abs = dc, i.acos = fc, i.acosh = gc, i.add = hc, i.asin = yc, i.asinh = Ec, i.atan = bc, i.atanh = wc, i.atan2 = xc, i.cbrt = Pc, i.ceil = vc, i.clamp = Tc, i.cos = Sc, i.cosh = Rc, i.div = Ac, i.exp = Ic, i.floor = _c, i.hypot = kc, i.ln = Dc, i.log = Oc, i.log10 = Fc, i.log2 = Lc, i.max = Nc, i.min = Mc, i.mod = $c, i.mul = qc, i.pow = jc, i.random = Vc, i.round = Bc, i.sign = Uc, i.sin = Qc, i.sinh = Gc, i.sqrt = Jc, i.sub = Hc, i.sum = Wc, i.tan = Kc, i.tanh = Yc, i.trunc = zc, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; ) e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
      return i.config(e), i;
    }
    function Ac(e, r) {
      return new this(e).div(r);
    }
    function Ic(e) {
      return new this(e).exp();
    }
    function _c(e) {
      return y(e = new this(e), e.e + 1, 3);
    }
    function kc() {
      var e, r, t = new this(0);
      for (x = false, e = 0; e < arguments.length; ) if (r = new this(arguments[e++]), r.d) t.d && (t = t.plus(r.times(r)));
      else {
        if (r.s) return x = true, new this(1 / 0);
        t = r;
      }
      return x = true, t.sqrt();
    }
    function fs(e) {
      return e instanceof ir || e && e.toStringTag === Es || false;
    }
    function Dc(e) {
      return new this(e).ln();
    }
    function Oc(e, r) {
      return new this(e).log(r);
    }
    function Lc(e) {
      return new this(e).log(2);
    }
    function Fc(e) {
      return new this(e).log(10);
    }
    function Nc() {
      return Ps(this, arguments, "lt");
    }
    function Mc() {
      return Ps(this, arguments, "gt");
    }
    function $c(e, r) {
      return new this(e).mod(r);
    }
    function qc(e, r) {
      return new this(e).mul(r);
    }
    function jc(e, r) {
      return new this(e).pow(r);
    }
    function Vc(e) {
      var r, t, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : oe(e, 1, Ge), n = Math.ceil(e / E), this.crypto) if (crypto.getRandomValues) for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (r = crypto.randomBytes(n *= 4); o < n; ) i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(ys);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= E, n && e && (i = Q(10, E - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) t = 0, a = [0];
      else {
        for (t = -1; a[0] === 0; t -= E) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < E && (t -= E - n);
      }
      return s.e = t, s.d = a, s;
    }
    function Bc(e) {
      return y(e = new this(e), e.e + 1, this.rounding);
    }
    function Uc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Qc(e) {
      return new this(e).sin();
    }
    function Gc(e) {
      return new this(e).sinh();
    }
    function Jc(e) {
      return new this(e).sqrt();
    }
    function Hc(e, r) {
      return new this(e).sub(r);
    }
    function Wc() {
      var e = 0, r = arguments, t = new this(r[e]);
      for (x = false; t.s && ++e < r.length; ) t = t.plus(r[e]);
      return x = true, y(t, this.precision, this.rounding);
    }
    function Kc(e) {
      return new this(e).tan();
    }
    function Yc(e) {
      return new this(e).tanh();
    }
    function zc(e) {
      return y(e = new this(e), e.e + 1, 1);
    }
    d[Symbol.for("nodejs.util.inspect.custom")] = d.toString;
    d[Symbol.toStringTag] = "Decimal";
    var ir = d.constructor = Cs(xi);
    Kt = new ir(Kt);
    Yt = new ir(Yt);
    var Te = ir;
    function vr(e) {
      return ir.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var tt = class {
      constructor(r, t, n, i, o) {
        this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
        return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Tr(e) {
      return e instanceof tt;
    }
    var rn = class {
      constructor(r) {
        this.value = r;
      }
      write(r) {
        r.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var tn = (e) => e;
    var nn = { bold: tn, red: tn, green: tn, dim: tn, enabled: false };
    var Ss = { bold: H, red: ue, green: Me, dim: Ie, enabled: true };
    var Cr = { write(e) {
      e.writeLine(",");
    } };
    var Ce = class {
      constructor(r) {
        this.contents = r;
        this.isUnderlined = false;
        this.color = (r2) => r2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(r) {
        return this.color = r, this;
      }
      write(r) {
        let t = r.getCurrentLineLength();
        r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(() => {
          r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var Je = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Sr = class extends Je {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(t) {
        return this.items.push(new rn(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let n = new Ce("[]");
        this.hasError && n.setColor(t.context.colors.red).underline(), t.write(n);
      }
      writeWithItems(t) {
        let { colors: n } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(Cr, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var Rs = ": ";
    var on = class {
      constructor(r, t) {
        this.name = r;
        this.value = t;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Rs.length;
      }
      write(r) {
        let t = new Ce(this.name);
        this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(Rs).write(this.value);
      }
    };
    var sn = class e extends Je {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [n, ...i] = t, o = this.getField(n);
        if (!o) return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Sr && (l = s.value.getField(Number(a))), !l) return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let n = this;
        for (let i of t) {
          if (!(n instanceof e)) return;
          let o = n.getSubSelectionValue(i);
          if (!o) return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(t) {
        let n = this.getSelectionParent();
        if (!n) return;
        let i = n;
        for (let o of t) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e)) return;
          let a = s.getSelectionParent();
          if (!a) return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let n = this.getField("include")?.value.asObject();
        if (n) return { kind: "include", value: n };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((i) => i.getPrintWidth())) + 2;
      }
      write(t) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let n = new Ce("{}");
        this.hasError && n.setColor(t.context.colors.red).underline(), t.write(n);
      }
      writeWithContents(t, n) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(Cr, [...n, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var J = class extends Je {
      constructor(t) {
        super();
        this.text = t;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(t) {
        let n = new Ce(this.text);
        this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
      }
      asObject() {
      }
    };
    var Si = class {
      constructor(r) {
        this.errorMessages = [];
        this.arguments = r;
      }
      write(r) {
        r.write(this.arguments);
      }
      addErrorMessage(r) {
        this.errorMessages.push(r);
      }
      renderAllMessages(r) {
        return this.errorMessages.map((t) => t(r)).join(`
`);
      }
    };
    function an(e) {
      return new Si(As(e));
    }
    function As(e) {
      let r = new sn();
      for (let [t, n] of Object.entries(e)) {
        let i = new on(t, Is(n));
        r.addField(i);
      }
      return r;
    }
    function Is(e) {
      if (typeof e == "string") return new J(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new J(String(e));
      if (typeof e == "bigint") return new J(`${e}n`);
      if (e === null) return new J("null");
      if (e === void 0) return new J("undefined");
      if (vr(e)) return new J(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new J(`Buffer.alloc(${e.byteLength})`) : new J(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let r = Ht(e) ? e.toISOString() : "Invalid Date";
        return new J(`new Date("${r}")`);
      }
      return e instanceof Le ? new J(`Prisma.${e._getName()}`) : Tr(e) ? new J(`prisma.${ps(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Xc(e) : typeof e == "object" ? As(e) : new J(Object.prototype.toString.call(e));
    }
    function Xc(e) {
      let r = new Sr();
      for (let t of e) r.addItem(Is(t));
      return r;
    }
    function _s(e) {
      if (e === void 0) return "";
      let r = an(e);
      return new br(0, { colors: nn }).write(r).toString();
    }
    var ep = "P2037";
    function or({ error: e, user_facing_error: r }, t, n) {
      return r.error_code ? new V(rp(r, n), { code: r.error_code, clientVersion: t, meta: r.meta, batchRequestIdx: r.batch_request_idx }) : new B(e, { clientVersion: t, batchRequestIdx: r.batch_request_idx });
    }
    function rp(e, r) {
      let t = e.message;
      return (r === "postgresql" || r === "postgres" || r === "mysql") && e.error_code === ep && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
    }
    var nt = "<unknown>";
    function ks(e) {
      var r = e.split(`
`);
      return r.reduce(function(t, n) {
        var i = ip(n) || sp(n) || up(n) || dp(n) || pp(n);
        return i && t.push(i), t;
      }, []);
    }
    var tp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var np = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function ip(e) {
      var r = tp.exec(e);
      if (!r) return null;
      var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = np.exec(r[2]);
      return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), { file: t ? null : r[2], methodName: r[1] || nt, arguments: t ? [r[2]] : [], lineNumber: r[3] ? +r[3] : null, column: r[4] ? +r[4] : null };
    }
    var op = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function sp(e) {
      var r = op.exec(e);
      return r ? { file: r[2], methodName: r[1] || nt, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    var ap = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var lp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function up(e) {
      var r = ap.exec(e);
      if (!r) return null;
      var t = r[3] && r[3].indexOf(" > eval") > -1, n = lp.exec(r[3]);
      return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), { file: r[3], methodName: r[1] || nt, arguments: r[2] ? r[2].split(",") : [], lineNumber: r[4] ? +r[4] : null, column: r[5] ? +r[5] : null };
    }
    var cp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function pp(e) {
      var r = cp.exec(e);
      return r ? { file: r[3], methodName: r[1] || nt, arguments: [], lineNumber: +r[4], column: r[5] ? +r[5] : null } : null;
    }
    var mp = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function dp(e) {
      var r = mp.exec(e);
      return r ? { file: r[2], methodName: r[1] || nt, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    var Ri = class {
      getLocation() {
        return null;
      }
    };
    var Ai = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let r = this._error.stack;
        if (!r) return null;
        let n = ks(r).find((i) => {
          if (!i.file) return false;
          let o = ii(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function He(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Ri() : new Ai();
    }
    var Ds = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Rr(e = {}) {
      let r = gp(e);
      return Object.entries(r).reduce((n, [i, o]) => (Ds[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function gp(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function ln(e = {}) {
      return (r) => (typeof e._count == "boolean" && (r._count = r._count._all), r);
    }
    function Os(e, r) {
      let t = ln(e);
      return r({ action: "aggregate", unpacker: t, argsMapper: Rr })(e);
    }
    function hp(e = {}) {
      let { select: r, ...t } = e;
      return typeof r == "object" ? Rr({ ...t, _count: r }) : Rr({ ...t, _count: { _all: true } });
    }
    function yp(e = {}) {
      return typeof e.select == "object" ? (r) => ln(e)(r)._count : (r) => ln(e)(r)._count._all;
    }
    function Ls(e, r) {
      return r({ action: "count", unpacker: yp(e), argsMapper: hp })(e);
    }
    function Ep(e = {}) {
      let r = Rr(e);
      if (Array.isArray(r.by)) for (let t of r.by) typeof t == "string" && (r.select[t] = true);
      else typeof r.by == "string" && (r.select[r.by] = true);
      return r;
    }
    function bp(e = {}) {
      return (r) => (typeof e?._count == "boolean" && r.forEach((t) => {
        t._count = t._count._all;
      }), r);
    }
    function Fs(e, r) {
      return r({ action: "groupBy", unpacker: bp(e), argsMapper: Ep })(e);
    }
    function Ns(e, r, t) {
      if (r === "aggregate") return (n) => Os(n, t);
      if (r === "count") return (n) => Ls(n, t);
      if (r === "groupBy") return (n) => Fs(n, t);
    }
    function Ms(e, r) {
      let t = r.fields.filter((i) => !i.relationName), n = pi(t, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new tt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Jt(Object.keys(n)) });
    }
    var $s = (e) => Array.isArray(e) ? e : e.split(".");
    var Ii = (e, r) => $s(r).reduce((t, n) => t && t[n], e);
    var qs = (e, r, t) => $s(r).reduceRight((n, i, o, s) => Object.assign({}, Ii(e, s.slice(0, o)), { [i]: n }), t);
    function wp(e, r) {
      return e === void 0 || r === void 0 ? [] : [...r, "select", e];
    }
    function xp(e, r, t) {
      return r === void 0 ? e ?? {} : qs(r, t, e || true);
    }
    function _i(e, r, t, n, i, o) {
      let a = e._runtimeDataModel.models[r].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = He(e._errorFormat), c = wp(n, i), p = xp(l, o, c), m = t({ dataPath: c, callsite: u })(p), f = Pp(e, r);
        return new Proxy(m, { get(g, h) {
          if (!f.includes(h)) return g[h];
          let T = [a[h].type, t, h], S = [c, p];
          return _i(e, ...T, ...S);
        }, ...Jt([...f, ...Object.getOwnPropertyNames(m)]) });
      };
    }
    function Pp(e, r) {
      return e._runtimeDataModel.models[r].fields.filter((t) => t.kind === "object").map((t) => t.name);
    }
    var Gs = k(oi());
    var Qs = k(require("fs"));
    var js = { keyword: _e, entity: _e, value: (e) => H(ze(e)), punctuation: ze, directive: _e, function: _e, variable: (e) => H(ze(e)), string: (e) => H(Me(e)), boolean: fe, number: _e, comment: Nr };
    var vp = (e) => e;
    var un = {};
    var Tp = 0;
    var P = { manual: un.Prism && un.Prism.manual, disableWorkerMessageHandler: un.Prism && un.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof ye) {
        let r = e;
        return new ye(r.type, P.util.encode(r.content), r.alias);
      } else return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++Tp }), e.__id;
    }, clone: function e(r, t) {
      let n, i, o = P.util.type(r);
      switch (t = t || {}, o) {
        case "Object":
          if (i = P.util.objId(r), t[i]) return t[i];
          n = {}, t[i] = n;
          for (let s in r) r.hasOwnProperty(s) && (n[s] = e(r[s], t));
          return n;
        case "Array":
          return i = P.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
            n[a] = e(s, t);
          }), n);
        default:
          return r;
      }
    } }, languages: { extend: function(e, r) {
      let t = P.util.clone(P.languages[e]);
      for (let n in r) t[n] = r[n];
      return t;
    }, insertBefore: function(e, r, t, n) {
      n = n || P.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == r) for (let l in t) t.hasOwnProperty(l) && (o[l] = t[l]);
        t.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, P.languages.DFS(P.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(r, t, n, i) {
      i = i || {};
      let o = P.util.objId;
      for (let s in r) if (r.hasOwnProperty(s)) {
        t.call(r, s, r[s], n || s);
        let a = r[s], l = P.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, t, s, i));
      }
    } }, plugins: {}, highlight: function(e, r, t) {
      let n = { code: e, grammar: r, language: t };
      return P.hooks.run("before-tokenize", n), n.tokens = P.tokenize(n.code, n.grammar), P.hooks.run("after-tokenize", n), ye.stringify(P.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, r, t, n, i, o, s) {
      for (let h in t) {
        if (!t.hasOwnProperty(h) || !t[h]) continue;
        if (h == s) return;
        let I = t[h];
        I = P.util.type(I) === "Array" ? I : [I];
        for (let T = 0; T < I.length; ++T) {
          let S = I[T], C = S.inside, b = !!S.lookbehind, de = !!S.greedy, ae = 0, Lr = S.alias;
          if (de && !S.pattern.global) {
            let U = S.pattern.toString().match(/[imuy]*$/)[0];
            S.pattern = RegExp(S.pattern.source, U + "g");
          }
          S = S.pattern || S;
          for (let U = n, ne = i; U < r.length; ne += r[U].length, ++U) {
            let Ae = r[U];
            if (r.length > e.length) return;
            if (Ae instanceof ye) continue;
            if (de && U != r.length - 1) {
              S.lastIndex = ne;
              var p = S.exec(e);
              if (!p) break;
              var c = p.index + (b ? p[1].length : 0), m = p.index + p[0].length, a = U, l = ne;
              for (let O = r.length; a < O && (l < m || !r[a].type && !r[a - 1].greedy); ++a) l += r[a].length, c >= l && (++U, ne = l);
              if (r[U] instanceof ye) continue;
              u = a - U, Ae = e.slice(ne, l), p.index -= ne;
            } else {
              S.lastIndex = 0;
              var p = S.exec(Ae), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            b && (ae = p[1] ? p[1].length : 0);
            var c = p.index + ae, p = p[0].slice(ae), m = c + p.length, f = Ae.slice(0, c), g = Ae.slice(m);
            let Y = [U, u];
            f && (++U, ne += f.length, Y.push(f));
            let cr = new ye(h, C ? P.tokenize(p, C) : p, Lr, p, de);
            if (Y.push(cr), g && Y.push(g), Array.prototype.splice.apply(r, Y), u != 1 && P.matchGrammar(e, r, t, U, ne, true, h), o) break;
          }
        }
      }
    }, tokenize: function(e, r) {
      let t = [e], n = r.rest;
      if (n) {
        for (let i in n) r[i] = n[i];
        delete r.rest;
      }
      return P.matchGrammar(e, t, r, 0, 0, false), t;
    }, hooks: { all: {}, add: function(e, r) {
      let t = P.hooks.all;
      t[e] = t[e] || [], t[e].push(r);
    }, run: function(e, r) {
      let t = P.hooks.all[e];
      if (!(!t || !t.length)) for (var n = 0, i; i = t[n++]; ) i(r);
    } }, Token: ye };
    P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
    P.languages.js = P.languages.javascript;
    P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    P.languages.ts = P.languages.typescript;
    function ye(e, r, t, n, i) {
      this.type = e, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    ye.stringify = function(e, r) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(t) {
        return ye.stringify(t, r);
      }).join("") : Cp(e.type)(e.content);
    };
    function Cp(e) {
      return js[e] || vp;
    }
    function Vs(e) {
      return Sp(e, P.languages.javascript);
    }
    function Sp(e, r) {
      return P.tokenize(e, r).map((n) => ye.stringify(n)).join("");
    }
    var Bs = k(zo());
    function Us(e) {
      return (0, Bs.default)(e);
    }
    var cn = class e {
      static read(r) {
        let t;
        try {
          t = Qs.default.readFileSync(r, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(t);
      }
      static fromContent(r) {
        let t = r.split(/\r?\n/);
        return new e(1, t);
      }
      constructor(r, t) {
        this.firstLineNumber = r, this.lines = t;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(r, t) {
        if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
        let n = r - this.firstLineNumber, i = [...this.lines];
        return i[n] = t(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(r) {
        return new e(this.firstLineNumber, this.lines.map((t, n) => r(t, this.firstLineNumber + n)));
      }
      lineAt(r) {
        return this.lines[r - this.firstLineNumber];
      }
      prependSymbolAt(r, t) {
        return this.mapLines((n, i) => i === r ? `${t} ${n}` : `  ${n}`);
      }
      slice(r, t) {
        let n = this.lines.slice(r - 1, t).join(`
`);
        return new e(r, Us(n).split(`
`));
      }
      highlight() {
        let r = Vs(this.toString());
        return new e(this.firstLineNumber, r.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Rp = { red: ue, gray: Nr, dim: Ie, bold: H, underline: X, highlightSource: (e) => e.highlight() };
    var Ap = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Ip({ message: e, originalMethod: r, isPanic: t, callArguments: n }) {
      return { functionName: `prisma.${r}()`, message: e, isPanic: t ?? false, callArguments: n };
    }
    function _p({ callsite: e, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
      let s = Ip({ message: r, originalMethod: t, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = cn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = Dp(c), m = kp(c);
        if (!m) return s;
        s.functionName = `${m.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, m.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let g = p + f + 1;
          g += 2, s.callArguments = (0, Gs.default)(i, g).slice(g);
        }
      }
      return s;
    }
    function kp(e) {
      let r = Object.keys(De.ModelAction).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Dp(e) {
      let r = 0;
      for (let t = 0; t < e.length; t++) {
        if (e.charAt(t) !== " ") return r;
        r++;
      }
      return r;
    }
    function Op({ functionName: e, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = r ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), r && a.push(s.underline(Lp(r))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(t), a.join(`
`);
    }
    function Lp(e) {
      let r = [e.fileName];
      return e.lineNumber && r.push(String(e.lineNumber)), e.columnNumber && r.push(String(e.columnNumber)), r.join(":");
    }
    function Ar(e) {
      let r = e.showColors ? Rp : Ap, t;
      return t = _p(e, r), Op(t, r);
    }
    function Js(e, r, t, n) {
      return e === De.ModelAction.findFirstOrThrow || e === De.ModelAction.findUniqueOrThrow ? Fp(r, t, n) : n;
    }
    function Fp(e, r, t) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Ar({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new W(o, { clientVersion: r });
        }
        return await t(n).catch((o) => {
          throw o instanceof V && o.code === "P2025" ? new Oe(`No ${e} found`, r) : o;
        });
      };
    }
    function Se(e) {
      return e.replace(/^./, (r) => r.toLowerCase());
    }
    var Np = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Mp = ["aggregate", "count", "groupBy"];
    function ki(e, r) {
      let t = e._extensions.getAllModelExtensions(r) ?? {}, n = [$p(e, r), jp(e, r), et(t), te("name", () => r), te("$name", () => r), te("$parent", () => e._appliedParent)];
      return Pe({}, n);
    }
    function $p(e, r) {
      let t = Se(r), n = Object.keys(De.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = Js(o, r, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = He(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let m = { args: u, dataPath: [], action: o, model: r, clientMethod: `${t}.${i}`, jsModelName: t, transaction: p, callsite: c };
            return s({ ...m, ...l });
          });
        };
        return Np.includes(o) ? _i(e, r, a) : qp(i) ? Ns(e, i, a) : a({});
      } };
    }
    function qp(e) {
      return Mp.includes(e);
    }
    function jp(e, r) {
      return nr(te("fields", () => {
        let t = e._runtimeDataModel.models[r];
        return Ms(r, t);
      }));
    }
    function Hs(e) {
      return e.replace(/^./, (r) => r.toUpperCase());
    }
    var Di = Symbol();
    function it(e) {
      let r = [Vp(e), te(Di, () => e), te("$parent", () => e._appliedParent)], t = e._extensions.getAllClientExtensions();
      return t && r.push(et(t)), Pe(e, r);
    }
    function Vp(e) {
      let r = Object.keys(e._runtimeDataModel.models), t = r.map(Se), n = [...new Set(r.concat(t))];
      return nr({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Hs(i);
        if (e._runtimeDataModel.models[o] !== void 0) return ki(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return ki(e, i);
      }, getPropertyDescriptor(i) {
        if (!t.includes(i)) return { enumerable: false };
      } });
    }
    function Ws(e) {
      return e[Di] ? e[Di] : e;
    }
    function Ks(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let t = e.client.__AccelerateEngine;
        this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
      }
      let r = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return it(r);
    }
    function Ys({ result: e, modelName: r, select: t, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(r);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let u = l.needs.filter((c) => n[c]);
          u.length > 0 && a.push(yr(u));
        } else if (t) {
          if (!t[l.name]) continue;
          let u = l.needs.filter((c) => !t[c]);
          u.length > 0 && a.push(yr(u));
        }
        Bp(e, l.needs) && s.push(Up(l, Pe(e, s)));
      }
      return s.length > 0 || a.length > 0 ? Pe(e, [...s, ...a]) : e;
    }
    function Bp(e, r) {
      return r.every((t) => ci(e, t));
    }
    function Up(e, r) {
      return nr(te(e.name, () => e.compute(r)));
    }
    function pn({ visitor: e, result: r, args: t, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(r)) {
        for (let s = 0; s < r.length; s++) r[s] = pn({ result: r[s], args: t, modelName: i, runtimeDataModel: n, visitor: e });
        return r;
      }
      let o = e(r, i, t) ?? r;
      return t.include && zs({ includeOrSelect: t.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), t.select && zs({ includeOrSelect: t.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function zs({ includeOrSelect: e, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || r[o] == null) continue;
        let l = n.models[t].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        r[o] = pn({ visitor: i, result: r[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Zs({ result: e, modelName: r, args: t, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[r] ? e : pn({ result: e, args: t ?? {}, modelName: r, runtimeDataModel: i, visitor: (s, a, l) => Ys({ result: s, modelName: Se(a), select: l.select, omit: l.omit, extensions: n }) });
    }
    function Xs(e) {
      if (e instanceof ie) return Qp(e);
      if (Array.isArray(e)) {
        let t = [e[0]];
        for (let n = 1; n < e.length; n++) t[n] = ot(e[n]);
        return t;
      }
      let r = {};
      for (let t in e) r[t] = ot(e[t]);
      return r;
    }
    function Qp(e) {
      return new ie(e.strings, e.values);
    }
    function ot(e) {
      if (typeof e != "object" || e == null || e instanceof Le || Tr(e)) return e;
      if (vr(e)) return new Te(e.toFixed());
      if (wr(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let r = e.length, t;
        for (t = Array(r); r--; ) t[r] = ot(e[r]);
        return t;
      }
      if (typeof e == "object") {
        let r = {};
        for (let t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: ot(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = ot(e[t]);
        return r;
      }
      rr(e, "Unknown value");
    }
    function ra(e, r, t, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = r.customDataProxyFetch;
        return "transaction" in r && i !== void 0 && (r.transaction?.kind === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e._executeRequest(r) : t[n]({ model: r.model, operation: r.model ? r.action : r.clientMethod, args: Xs(r.args ?? {}), __internalParams: r, query: (s, a = r) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = oa(o, l), a.args = s, ra(e, a, t, n + 1);
        } });
      });
    }
    function ta(e, r) {
      let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(r);
      let s = e._extensions.getAllQueryCallbacks(t ?? "$none", o);
      return ra(e, r, s);
    }
    function na(e) {
      return (r) => {
        let t = { requests: r }, n = r[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? ia(t, n, 0, e) : e(t);
      };
    }
    function ia(e, r, t, n) {
      if (t === r.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return r[t]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = oa(i, l), ia(a, r, t + 1, n);
      } });
    }
    var ea = (e) => e;
    function oa(e = ea, r = ea) {
      return (t) => e(r(t));
    }
    function aa(e, r, t) {
      let n = Se(t);
      return !r.result || !(r.result.$allModels || r.result[n]) ? e : Gp({ ...e, ...sa(r.name, e, r.result.$allModels), ...sa(r.name, e, r.result[n]) });
    }
    function Gp(e) {
      let r = new xe(), t = (n, i) => r.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => t(o, i)) : [n]));
      return gr(e, (n) => ({ ...n, needs: t(n.name, /* @__PURE__ */ new Set()) }));
    }
    function sa(e, r, t) {
      return t ? gr(t, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Jp(r, o, i) })) : {};
    }
    function Jp(e, r, t) {
      let n = e?.[r]?.compute;
      return n ? (i) => t({ ...i, [r]: n(i) }) : t;
    }
    function la(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (e[n.name]) for (let i of n.needs) t[i] = true;
      return t;
    }
    function ua(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (!e[n.name]) for (let i of n.needs) delete t[i];
      return t;
    }
    var mn = class {
      constructor(r, t) {
        this.extension = r;
        this.previous = t;
        this.computedFieldsCache = new xe();
        this.modelExtensionsCache = new xe();
        this.queryCallbacksCache = new xe();
        this.clientExtensions = Wr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = Wr(() => {
          let r2 = this.previous?.getAllBatchQueryCallbacks() ?? [], t2 = this.extension.query?.$__internalBatch;
          return t2 ? r2.concat(t2) : r2;
        });
      }
      getAllComputedFields(r) {
        return this.computedFieldsCache.getOrCreate(r, () => aa(this.previous?.getAllComputedFields(r), this.extension, r));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(r) {
        return this.modelExtensionsCache.getOrCreate(r, () => {
          let t = Se(r);
          return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(r) : { ...this.previous?.getAllModelExtensions(r), ...this.extension.model.$allModels, ...this.extension.model[t] };
        });
      }
      getAllQueryCallbacks(r, t) {
        return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, () => {
          let n = this.previous?.getAllQueryCallbacks(r, t) ?? [], i = [], o = this.extension.query;
          return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var dn = class e {
      constructor(r) {
        this.head = r;
      }
      static empty() {
        return new e();
      }
      static single(r) {
        return new e(new mn(r));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(r) {
        return new e(new mn(r, this.head));
      }
      getAllComputedFields(r) {
        return this.head?.getAllComputedFields(r);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(r) {
        return this.head?.getAllModelExtensions(r);
      }
      getAllQueryCallbacks(r, t) {
        return this.head?.getAllQueryCallbacks(r, t) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var ca = L("prisma:client");
    var pa = { Vercel: "vercel", "Netlify CI": "netlify" };
    function ma({ postinstall: e, ciName: r, clientVersion: t }) {
      if (ca("checkPlatformCaching:postinstall", e), ca("checkPlatformCaching:ciName", r), e === true && r && r in pa) {
        let n = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${pa[r]}-build`;
        throw console.error(n), new R(n, t);
      }
    }
    function da(e, r) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [r[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    var Hp = "Cloudflare-Workers";
    var Wp = "node";
    function fa() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Hp ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Wp ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    var Kp = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Vercel Edge Functions or Edge Middleware" };
    function fn() {
      let e = fa();
      return { id: e, prettyName: Kp[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    var ba = k(require("fs"));
    var st = k(require("path"));
    function gn(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Yp(e)}`;
    }
    function Yp(e) {
      let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...t, i];
      return ai({ ...r, binaryTargets: o });
    }
    function We(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
    }
    function Ke(e) {
      let { searchedLocations: r } = e;
      return `The following locations have been searched:
${[...new Set(r)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function ga(e) {
      let { runtimeBinaryTarget: r } = e;
      return `${We(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${gn(e)}

${Ke(e)}`;
    }
    function hn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function yn(e) {
      let { errorStack: r } = e;
      return r?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    function ha(e) {
      let { queryEngineName: r } = e;
      return `${We(e)}${yn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${hn("engine-not-found-bundler-investigation")}

${Ke(e)}`;
    }
    function ya(e) {
      let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e, n = t.find((i) => i.native);
      return `${We(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${r}".
${gn(e)}

${Ke(e)}`;
    }
    function Ea(e) {
      let { queryEngineName: r } = e;
      return `${We(e)}${yn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${hn("engine-not-found-tooling-investigation")}

${Ke(e)}`;
    }
    var zp = L("prisma:client:engines:resolveEnginePath");
    var Zp = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    async function wa(e, r) {
      let t = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? r.prismaPath;
      if (t !== void 0) return t;
      let { enginePath: n, searchedLocations: i } = await Xp(e, r);
      if (zp("enginePath", n), n !== void 0 && e === "binary" && Xn(n), n !== void 0) return r.prismaPath = n;
      let o = await er(), s = r.generator?.binaryTargets ?? [], a = s.some((m) => m.native), l = !s.some((m) => m.value === o), u = __filename.match(Zp()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: r.generator, runtimeBinaryTarget: o, queryEngineName: xa(e, o), expectedLocation: st.default.relative(process.cwd(), r.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = ya(c) : l ? p = ga(c) : u ? p = ha(c) : p = Ea(c), new R(p, r.clientVersion);
    }
    async function Xp(engineType, config) {
      let binaryTarget = await er(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, st.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, st.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
      __filename.includes("resolveEnginePath") && searchLocations.push(qo());
      for (let e of searchLocations) {
        let r = xa(engineType, binaryTarget), t = st.default.join(e, r);
        if (searchedLocations.push(e), ba.default.existsSync(t)) return { enginePath: t, searchedLocations };
      }
      return { enginePath: void 0, searchedLocations };
    }
    function xa(e, r) {
      return e === "library" ? At(r, "fs") : `query-engine-${r}${r === "windows" ? ".exe" : ""}`;
    }
    var Oi = k(ui());
    function Pa(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r) => `${r[0]}5`) : "";
    }
    function va(e) {
      return e.split(`
`).map((r) => r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var Ta = k(is());
    function Ca({ title: e, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, Ta.default)({ user: r, repo: t, template: n, title: e, body: i });
    }
    function Sa({ version: e, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
      let a = go(6e3 - (s?.length ?? 0)), l = va((0, Oi.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Oi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${r?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Pa(s) : ""}
\`\`\`
`), p = Ca({ title: t, body: c });
      return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    function Ir({ inlineDatasources: e, overrideDatasources: r, env: t, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = r[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = t[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new R("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var En = class extends Error {
      constructor(r, t) {
        super(r), this.clientVersion = t.clientVersion, this.cause = t.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var se = class extends En {
      constructor(r, t) {
        super(r, t), this.isRetryable = t.isRetryable ?? true;
      }
    };
    function A(e, r) {
      return { ...e, isRetryable: r };
    }
    var _r = class extends se {
      constructor(t) {
        super("This request must be retried", A(t, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    w(_r, "ForcedRetryError");
    var sr = class extends se {
      constructor(t, n) {
        super(t, A(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    w(sr, "InvalidDatasourceError");
    var ar = class extends se {
      constructor(t, n) {
        super(t, A(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    w(ar, "NotImplementedYetError");
    var $ = class extends se {
      constructor(r, t) {
        super(r, t), this.response = t.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var lr = class extends $ {
      constructor(t) {
        super("Schema needs to be uploaded", A(t, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    w(lr, "SchemaMissingError");
    var Li = "This request could not be understood by the server";
    var at = class extends $ {
      constructor(t, n, i) {
        super(n || Li, A(t, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    w(at, "BadRequestError");
    var lt = class extends $ {
      constructor(t, n) {
        super("Engine not started: healthcheck timeout", A(t, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    w(lt, "HealthcheckTimeoutError");
    var ut = class extends $ {
      constructor(t, n, i) {
        super(n, A(t, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    w(ut, "EngineStartupError");
    var ct = class extends $ {
      constructor(t) {
        super("Engine version is not supported", A(t, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    w(ct, "EngineVersionNotSupportedError");
    var Fi = "Request timed out";
    var pt = class extends $ {
      constructor(t, n = Fi) {
        super(n, A(t, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    w(pt, "GatewayTimeoutError");
    var em = "Interactive transaction error";
    var mt = class extends $ {
      constructor(t, n = em) {
        super(n, A(t, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    w(mt, "InteractiveTransactionError");
    var rm = "Request parameters are invalid";
    var dt = class extends $ {
      constructor(t, n = rm) {
        super(n, A(t, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    w(dt, "InvalidRequestError");
    var Ni = "Requested resource does not exist";
    var ft = class extends $ {
      constructor(t, n = Ni) {
        super(n, A(t, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    w(ft, "NotFoundError");
    var Mi = "Unknown server error";
    var kr = class extends $ {
      constructor(t, n, i) {
        super(n || Mi, A(t, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    w(kr, "ServerError");
    var $i = "Unauthorized, check your connection string";
    var gt = class extends $ {
      constructor(t, n = $i) {
        super(n, A(t, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    w(gt, "UnauthorizedError");
    var qi = "Usage exceeded, retry again later";
    var ht = class extends $ {
      constructor(t, n = qi) {
        super(n, A(t, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    w(ht, "UsageExceededError");
    async function tm(e) {
      let r;
      try {
        r = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let t = JSON.parse(r);
        if (typeof t == "string") switch (t) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: t };
          default:
            return { type: "UnknownTextError", body: t };
        }
        if (typeof t == "object" && t !== null) {
          if ("is_panic" in t && "message" in t && "error_code" in t) return { type: "QueryEngineError", body: t };
          if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
            let n = Object.values(t)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: t } : { type: "DataProxyError", body: t };
          }
        }
        return { type: "UnknownJsonError", body: t };
      } catch {
        return r === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: r };
      }
    }
    async function yt(e, r) {
      if (e.ok) return;
      let t = { clientVersion: r, response: e }, n = await tm(e);
      if (n.type === "QueryEngineError") throw new V(n.body.message, { code: n.body.error_code, clientVersion: r });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new kr(t, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new lr(t);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new ct(t);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new ut(t, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new R(i, r, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new lt(t, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new mt(t, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new dt(t, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new gt(t, Dr($i, n));
      if (e.status === 404) return new ft(t, Dr(Ni, n));
      if (e.status === 429) throw new ht(t, Dr(qi, n));
      if (e.status === 504) throw new pt(t, Dr(Fi, n));
      if (e.status >= 500) throw new kr(t, Dr(Mi, n));
      if (e.status >= 400) throw new at(t, Dr(Li, n));
    }
    function Dr(e, r) {
      return r.type === "EmptyError" ? e : `${e}: ${JSON.stringify(r)}`;
    }
    function Ra(e) {
      let r = Math.pow(2, e) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    var Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function Aa(e) {
      let r = new TextEncoder().encode(e), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
      for (let p = 0; p < o; p = p + 3) c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += Ne[s] + Ne[a] + Ne[l] + Ne[u];
      return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += Ne[s] + Ne[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += Ne[s] + Ne[a] + Ne[l] + "="), t;
    }
    function Ia(e) {
      if (!!e.generator?.previewFeatures.some((t) => t.toLowerCase().includes("metrics"))) throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    function nm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function _a(e) {
      return new Date(nm(e));
    }
    var ka = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.14.0-25.e9771e62de70f79a5e1c604a2d7c8e2a0a874b48", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var Et = class extends se {
      constructor(t, n) {
        super(`Cannot fetch data from service:
${t}`, A(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    w(Et, "RequestError");
    async function ur(e, r, t = (n) => n) {
      let n = r.clientVersion;
      try {
        return typeof fetch == "function" ? await t(fetch)(e, r) : await t(ji)(e, r);
      } catch (i) {
        let o = i.message ?? "Unknown error";
        throw new Et(o, { clientVersion: n });
      }
    }
    function om(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    function sm(e) {
      return { method: e.method, headers: om(e) };
    }
    function am(e, r) {
      return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: r.statusCode >= 200 && r.statusCode <= 299, status: r.statusCode, url: r.url, headers: new Vi(r.headers) };
    }
    async function ji(e, r = {}) {
      let t = lm("https"), n = sm(r), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = t.request(e, n, (u) => {
          let { statusCode: c, headers: { location: p } } = u;
          c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(ji(`${o}${p}`, r)) : s(ji(p, r))), u.on("data", (m) => i.push(m)), u.on("end", () => s(am(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(r.body ?? "");
      });
    }
    var lm = typeof require < "u" ? require : () => {
    };
    var Vi = class {
      constructor(r = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [t, n] of Object.entries(r)) if (typeof n == "string") this.headers.set(t, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(t, i);
      }
      append(r, t) {
        this.headers.set(r, t);
      }
      delete(r) {
        this.headers.delete(r);
      }
      get(r) {
        return this.headers.get(r) ?? null;
      }
      has(r) {
        return this.headers.has(r);
      }
      set(r, t) {
        this.headers.set(r, t);
      }
      forEach(r, t) {
        for (let [n, i] of this.headers) r.call(t, i, n, this);
      }
    };
    var um = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var Da = L("prisma:client:dataproxyEngine");
    async function cm(e, r) {
      let t = ka["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && um.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
        let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = pm(`<=${a}.${l}.${u}`), p = await ur(c, { clientVersion: n });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let m = await p.text();
        Da("length of body fetched from unpkg.com", m.length);
        let f;
        try {
          f = JSON.parse(m);
        } catch (g) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", m), g;
        }
        return f.version;
      }
      throw new ar("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function Oa(e, r) {
      let t = await cm(e, r);
      return Da("version", t), t;
    }
    function pm(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var La = 3;
    var Bi = L("prisma:client:dataproxyEngine");
    var Ui = class {
      constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: r, interactiveTransaction: t } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-transaction-id"] = t.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let r = [];
        return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
      }
    };
    var bt = class {
      constructor(r) {
        this.name = "DataProxyEngine";
        Ia(r), this.config = r, this.env = { ...r.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = Aa(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [r, t] = this.extractHostAndApiKey();
          this.host = r, this.headerBuilder = new Ui({ apiKey: t, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Oa(r, this.config), Bi("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((t) => {
          switch (t.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof t.attributes.query == "string" ? t.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: _a(t.timestamp), duration: Number(t.attributes.duration_ms), params: t.attributes.params, target: t.attributes.target });
            }
          }
        }), r?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: r.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(r) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
      }
      async uploadSchema() {
        let r = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(r, async () => {
          let t = await ur(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          t.ok || Bi("schema response status", t.status);
          let n = await yt(t, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: r, traceparent: t, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Er(r, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: t });
        return a.map((u) => "errors" in u && u.errors.length > 0 ? or(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
      }
      requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await ur(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, interactiveTransaction: i }), body: JSON.stringify(r), clientVersion: this.clientVersion }, n);
          a.ok || Bi("graphql response status", a.status), await this.handleError(await yt(a, this.clientVersion));
          let l = await a.json(), u = l.extensions;
          if (u && this.propagateResponseExtensions(u), l.errors) throw l.errors.length === 1 ? or(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new B(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        } });
      }
      async transaction(r, t, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[r]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (r === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await ur(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await yt(l, this.clientVersion));
            let u = await l.json(), c = u.extensions;
            c && this.propagateResponseExtensions(c);
            let p = u.id, m = u["data-proxy"].endpoint;
            return { id: p, payload: { endpoint: m } };
          } else {
            let s = `${n.payload.endpoint}/${r}`;
            o(s);
            let a = await ur(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await yt(a, this.clientVersion));
            let u = (await a.json()).extensions;
            u && this.propagateResponseExtensions(u);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let r = { clientVersion: this.clientVersion }, t = Object.keys(this.inlineDatasources)[0], n = Ir({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new sr(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:") throw new sr(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
        let l = a.get("api_key");
        if (l === null || l.length < 1) throw new sr(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
        return [s, l];
      }
      metrics() {
        throw new ar("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(r) {
        for (let t = 0; ; t++) {
          let n = (i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await r.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable) throw i;
            if (t >= La) throw i instanceof _r ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${La} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Ra(t);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(r) {
        if (r instanceof lr) throw await this.uploadSchema(), new _r({ clientVersion: this.clientVersion, cause: r });
        if (r) throw r;
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function Fa(e) {
      if (e?.kind === "itx") return e.options.id;
    }
    var Gi = k(require("os"));
    var Na = k(require("path"));
    var Qi = Symbol("PrismaLibraryEngineCache");
    function mm() {
      let e = globalThis;
      return e[Qi] === void 0 && (e[Qi] = {}), e[Qi];
    }
    function dm(e) {
      let r = mm();
      if (r[e] !== void 0) return r[e];
      let t = Na.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Gi.default.constants.dlopen.RTLD_LAZY | Gi.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, t, i), r[e] = n.exports, n.exports;
    }
    var Ma = { async loadLibrary(e) {
      let r = await Bn(), t = await wa("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => dm(t));
      } catch (n) {
        let i = ei({ e: n, platformInfo: r, id: t });
        throw new R(i, e.clientVersion);
      }
    } };
    var Ji;
    var $a = { async loadLibrary(e) {
      let { clientVersion: r, adapter: t, engineWasm: n } = e;
      if (t === void 0) throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${fn().prettyName})`, r);
      if (n === void 0) throw new R("WASM engine was unexpectedly `undefined`", r);
      Ji === void 0 && (Ji = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(l.exports), o.QueryEngine;
      })());
      let i = await Ji;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var fm = "P2036";
    var Re = L("prisma:client:libraryEngine");
    function gm(e) {
      return e.item_type === "query" && "query" in e;
    }
    function hm(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var qa = [...Mn, "native"];
    var ja = 0;
    var wt = class {
      constructor(r, t) {
        this.name = "LibraryEngine";
        this.libraryLoader = t ?? Ma, r.engineWasm !== void 0 && (this.libraryLoader = t ?? $a), this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, r.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(r.overrideDatasources)[0], i = r.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        ja === 10 && console.warn(`${fe("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(r, t, n) {
        await this.start();
        let i = JSON.stringify(t), o;
        if (r === "start") {
          let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          o = await this.engine?.startTransaction(a, i);
        } else r === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : r === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
        let s = this.parseEngineResponse(o);
        if (ym(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new V(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        }
        return s;
      }
      async instantiateLibrary() {
        if (Re("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        Nn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
      }
      async getCurrentBinaryTarget() {
        {
          if (this.binaryTarget) return this.binaryTarget;
          let r = await er();
          if (!qa.includes(r)) throw new R(`Unknown ${ue("PRISMA_QUERY_ENGINE_LIBRARY")} ${ue(H(r))}. Possible binaryTargets: ${Me(qa.join(", "))} or a path to the query engine library.
You may have to run ${Me("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        }
      }
      parseEngineResponse(r) {
        if (!r) throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this), { adapter: t } = this.config;
            t && Re("Using driver adapter: %O", t), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
              r.deref()?.logger(n);
            }, t), ja++;
          } catch (r) {
            let t = r, n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new R(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(r) {
        let t = this.parseEngineResponse(r);
        if (t) {
          if ("span" in t) {
            this.config.tracingHelper.createEngineSpan(t);
            return;
          }
          t.level = t?.level.toLowerCase() ?? "unknown", gm(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : hm(t) ? this.loggerRustPanic = new le(Hi(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path });
        }
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Re(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r = async () => {
          Re("library starting");
          try {
            let t = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(t)), this.libraryStarted = true, Re("library started");
          } catch (t) {
            let n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new R(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Re("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let r = async () => {
          await new Promise((n) => setTimeout(n, 5)), Re("library stopping");
          let t = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(t)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Re("library stopped");
        };
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(r) {
        return this.library?.debugPanic(r);
      }
      async request(r, { traceparent: t, interactiveTransaction: n }) {
        Re(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: t }), o = JSON.stringify(r);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let s = this.parseEngineResponse(await this.executingQueryPromise);
          if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: s, elapsed: 0 };
        } catch (s) {
          if (s instanceof R) throw s;
          if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:")) throw new le(Hi(this, s.message), this.config.clientVersion);
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: t, traceparent: n }) {
        Re("requestBatch");
        let i = Er(r, t);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Fa(t));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: l } = s;
        if (Array.isArray(a)) return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
        throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(r) {
        if (r.user_facing_error.is_panic) return new le(Hi(this, r.user_facing_error.message), this.config.clientVersion);
        let t = this.getExternalAdapterError(r.user_facing_error);
        return t ? t.error : or(r, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(r) {
        if (r.error_code === fm && this.config.adapter) {
          let t = r.meta?.id;
          jt(typeof t == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(t);
          return jt(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(r) {
        await this.start();
        let t = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? t : this.parseEngineResponse(t);
      }
    };
    function ym(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    function Hi(e, r) {
      return Sa({ binaryTarget: e.binaryTarget, title: r, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
    }
    function Va({ copyEngine: e = true }, r) {
      let t;
      try {
        t = Ir({ inlineDatasources: r.inlineDatasources, overrideDatasources: r.overrideDatasources, env: { ...r.env, ...process.env }, clientVersion: r.clientVersion });
      } catch {
      }
      e && t?.startsWith("prisma://") && Hr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = Ur(r.generator), i = !!(t?.startsWith("prisma://") || !e), o = !!r.adapter, s = n === "library", a = n === "binary";
      if (i && o || o && false) {
        let l;
        throw e ? t?.startsWith("prisma://") ? l = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : l = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : l = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new W(l.join(`
`), { clientVersion: r.clientVersion });
      }
      if (i) return new bt(r);
      if (s) return new wt(r);
      throw new W("Invalid client engine type, please use `library` or `binary`", { clientVersion: r.clientVersion });
    }
    function bn({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    var Ha = k(Wi());
    function Ga(e, r) {
      let t = Ja(e), n = Em(t), i = wm(n);
      i ? wn(i, r) : r.addErrorMessage(() => "Unknown error");
    }
    function Ja(e) {
      return e.errors.flatMap((r) => r.kind === "Union" ? Ja(r) : [r]);
    }
    function Em(e) {
      let r = /* @__PURE__ */ new Map(), t = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          t.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
        o ? r.set(i, { ...n, argument: { ...n.argument, typeNames: bm(o.argument.typeNames, n.argument.typeNames) } }) : r.set(i, n);
      }
      return t.push(...r.values()), t;
    }
    function bm(e, r) {
      return [...new Set(e.concat(r))];
    }
    function wm(e) {
      return mi(e, (r, t) => {
        let n = Ua(r), i = Ua(t);
        return n !== i ? n - i : Qa(r) - Qa(t);
      });
    }
    function Ua(e) {
      let r = 0;
      return Array.isArray(e.selectionPath) && (r += e.selectionPath.length), Array.isArray(e.argumentPath) && (r += e.argumentPath.length), r;
    }
    function Qa(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var me = class {
      constructor(r, t) {
        this.name = r;
        this.value = t;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
      }
    };
    var xn = class {
      constructor() {
        this.fields = [];
      }
      addField(r, t) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.writeLine(t("{")).withIndent(() => {
          r.writeJoined(Cr, this.fields).newLine();
        }).write(t("}")).addMarginSymbol(t("+"));
      }
    };
    function wn(e, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          xm(e, r);
          break;
        case "IncludeOnScalar":
          Pm(e, r);
          break;
        case "EmptySelection":
          vm(e, r);
          break;
        case "UnknownSelectionField":
          Sm(e, r);
          break;
        case "UnknownArgument":
          Rm(e, r);
          break;
        case "UnknownInputField":
          Am(e, r);
          break;
        case "RequiredArgumentMissing":
          Im(e, r);
          break;
        case "InvalidArgumentType":
          _m(e, r);
          break;
        case "InvalidArgumentValue":
          km(e, r);
          break;
        case "ValueTooLarge":
          Dm(e, r);
          break;
        case "SomeFieldsMissing":
          Om(e, r);
          break;
        case "TooManyFieldsGiven":
          Lm(e, r);
          break;
        case "Union":
          Ga(e, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function xm(e, r) {
      let t = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      t && (t.getField(e.firstField)?.markAsError(), t.getField(e.secondField)?.markAsError()), r.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    function Pm(e, r) {
      let [t, n] = Pn(e.selectionPath), i = e.outputType, o = r.arguments.getDeepSelectionParent(t)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new me(s.name, "true"));
      r.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${xt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function vm(e, r) {
      let t = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (t) {
        let n = t.getField("omit")?.value.asObject();
        if (n) {
          Tm(e, r, n);
          return;
        }
      }
      Cm(e, r);
    }
    function Tm(e, r, t) {
      t.removeAllFields();
      for (let n of e.outputType.fields) t.addSuggestion(new me(n.name, "false"));
      r.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function Cm(e, r) {
      let t = e.outputType, n = r.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Ya(n, t)), r.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${xt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function Sm(e, r) {
      let [t, n] = Pn(e.selectionPath), i = r.arguments.getDeepSubSelectionValue(t)?.asObject(), o;
      if (i) {
        let s = i.getFieldValue("select")?.asObject(), a = i.getFieldValue("include")?.asObject(), l = i.getFieldValue("omit")?.asObject();
        s?.hasField(n) ? (o = "select", s.getField(n)?.markAsError(), Ya(s, e.outputType)) : a?.hasField(n) ? (o = "include", a.getField(n)?.markAsError(), Fm(a, e.outputType)) : l?.hasField(n) && (o = "omit", l.getField(n)?.markAsError(), Nm(l, e.outputType));
      }
      r.addErrorMessage((s) => {
        let a = [`Unknown field ${s.red(`\`${n}\``)}`];
        return o && a.push(`for ${s.bold(o)} statement`), a.push(`on model ${s.bold(`\`${e.outputType.name}\``)}.`), a.push(xt(s)), a.join(" ");
      });
    }
    function Rm(e, r) {
      let t = e.argumentPath[0], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(t)?.markAsError(), Mm(n, e.arguments)), r.addErrorMessage((i) => Wa(i, t, e.arguments.map((o) => o.name)));
    }
    function Am(e, r) {
      let [t, n] = Pn(e.argumentPath), i = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(t)?.asObject();
        o && za(o, e.inputType);
      }
      r.addErrorMessage((o) => Wa(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function Wa(e, r, t) {
      let n = [`Unknown argument \`${e.red(r)}\`.`], i = qm(r, t);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), t.length > 0 && n.push(xt(e)), n.join(" ");
    }
    function Im(e, r) {
      let t;
      r.addErrorMessage((l) => t?.value instanceof J && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = Pn(e.argumentPath), s = new xn(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) if (t = a.getField(o), t && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new me(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Ka).join(" | ");
        a.addSuggestion(new me(o, l).makeRequired());
      }
    }
    function Ka(e) {
      return e.kind === "list" ? `${Ka(e.elementType)}[]` : e.name;
    }
    function _m(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i) => {
        let o = vn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function km(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), r.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(t)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = vn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function Dm(e, r) {
      let t = e.argument.name, n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof J && (i = s.text);
      }
      r.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
      });
    }
    function Om(e, r) {
      let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && za(i, e.inputType);
      }
      r.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${vn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(xt(i)), o.join(" ");
      });
    }
    function Lm(e, r) {
      let t = e.argumentPath[e.argumentPath.length - 1], n = r.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      r.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${vn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function Ya(e, r) {
      for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new me(t.name, "true"));
    }
    function Fm(e, r) {
      for (let t of r.fields) t.isRelation && !e.hasField(t.name) && e.addSuggestion(new me(t.name, "true"));
    }
    function Nm(e, r) {
      for (let t of r.fields) !e.hasField(t.name) && !t.isRelation && e.addSuggestion(new me(t.name, "true"));
    }
    function Mm(e, r) {
      for (let t of r) e.hasField(t.name) || e.addSuggestion(new me(t.name, t.typeNames.join(" | ")));
    }
    function za(e, r) {
      if (r.kind === "object") for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new me(t.name, t.typeNames.join(" | ")));
    }
    function Pn(e) {
      let r = [...e], t = r.pop();
      if (!t) throw new Error("unexpected empty path");
      return [r, t];
    }
    function xt({ green: e, enabled: r }) {
      return "Available options are " + (r ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function vn(e, r) {
      if (r.length === 1) return r[0];
      let t = [...r], n = t.pop();
      return `${t.join(", ")} ${e} ${n}`;
    }
    var $m = 3;
    function qm(e, r) {
      let t = 1 / 0, n;
      for (let i of r) {
        let o = (0, Ha.default)(e, i);
        o > $m || o < t && (t = o, n = i);
      }
      return n;
    }
    function Tn({ args: e, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = an(e);
      for (let p of r) wn(p, s);
      let a = t === "pretty" ? Ss : nn, l = s.renderAllMessages(a), u = new br(0, { colors: a }).write(s).toString(), c = Ar({ message: l, callsite: n, originalMethod: i, showColors: t === "pretty", callArguments: u });
      throw new W(c, { clientVersion: o });
    }
    var jm = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Za({ modelName: e, action: r, args: t, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u }) {
      let c = new Ki({ runtimeDataModel: n, modelName: e, action: r, rootArgs: t, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u });
      return { modelName: e, action: jm[r], query: Yi(t, c) };
    }
    function Yi({ select: e, include: r, ...t } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = t.omit, delete t.omit), { arguments: el(t, n), selection: Vm(e, r, i, n) };
    }
    function Vm(e, r, t, n) {
      return e ? (r ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : t && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Gm(e, n)) : Bm(n, r, t);
    }
    function Bm(e, r, t) {
      let n = {};
      return e.model && !e.isRawAction() && (n.$composites = true, n.$scalars = true), r && Um(n, r, e), t && e.isPreviewFeatureOn("omitApi") && Qm(n, t, e), n;
    }
    function Um(e, r, t) {
      for (let [n, i] of Object.entries(r)) {
        let o = t.findField(n);
        o && o?.kind !== "object" && t.throwValidationError({ kind: "IncludeOnScalar", selectionPath: t.getSelectionPath().concat(n), outputType: t.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = Yi(i, t.nestSelection(n)));
      }
    }
    function Qm(e, r, t) {
      let n = t.getComputedFields(), i = ua(r, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        n?.[o] && !a || (e[o] = !s);
      }
    }
    function Gm(e, r) {
      let t = {}, n = r.getComputedFields(), i = la(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = r.findField(o);
        n?.[o] && !a || (s === true ? t[o] = true : typeof s == "object" && (t[o] = Yi(s, r.nestSelection(o))));
      }
      return t;
    }
    function Xa(e, r) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (wr(e)) {
        if (Ht(e)) return { $type: "DateTime", value: e.toISOString() };
        r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Tr(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return Jm(e, r);
      if (ArrayBuffer.isView(e)) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (Hm(e)) return e.values;
      if (vr(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Le) {
        if (e !== Qt.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Wm(e)) return e.toJSON();
      if (typeof e == "object") return el(e, r);
      r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function el(e, r) {
      if (e.$type) return { $type: "Raw", value: e };
      let t = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (t[n] = Xa(i, r.nestArgument(n)));
      }
      return t;
    }
    function Jm(e, r) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let i = r.nestArgument(String(n)), o = e[n];
        o === void 0 && r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${r.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), t.push(Xa(o, i));
      }
      return t;
    }
    function Hm(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Wm(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var Ki = class e {
      constructor(r) {
        this.params = r;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(r) {
        Tn({ errors: [r], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model)) return { name: this.params.modelName, fields: this.model.fields.map((r) => ({ name: r.name, typeName: "boolean", isRelation: r.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(r) {
        return this.params.previewFeatures.includes(r);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(r) {
        return this.model?.fields.find((t) => t.name === r);
      }
      nestSelection(r) {
        let t = this.findField(r), n = t?.kind === "object" ? t.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(r) });
      }
      nestArgument(r) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(r) });
      }
    };
    var rl = (e) => ({ command: e });
    var tl = (e) => e.strings.reduce((r, t, n) => `${r}@P${n}${t}`);
    function Pt(e) {
      try {
        return nl(e, "fast");
      } catch {
        return nl(e, "slow");
      }
    }
    function nl(e, r) {
      return JSON.stringify(e.map((t) => Km(t, r)));
    }
    function Km(e, r) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : wr(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Te.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Ym(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && r === "slow" ? ol(e) : e;
    }
    function Ym(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function ol(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(il);
      let r = {};
      for (let t of Object.keys(e)) r[t] = il(e[t]);
      return r;
    }
    function il(e) {
      return typeof e == "bigint" ? e.toString() : ol(e);
    }
    var zm = /^(\s*alter\s)/i;
    var sl = L("prisma:client");
    function zi(e, r, t, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && t.length > 0 && zm.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Zi = ({ clientMethod: e, activeProvider: r }) => (t) => {
      let n = "", i;
      if (Array.isArray(t)) {
        let [o, ...s] = t;
        n = o, i = { values: Pt(s || []), __prismaRawParameters__: true };
      } else switch (r) {
        case "sqlite":
        case "mysql": {
          n = t.sql, i = { values: Pt(t.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = t.text, i = { values: Pt(t.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = tl(t), i = { values: Pt(t.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${r} provider does not support ${e}`);
      }
      return i?.values ? sl(`prisma.${e}(${n}, ${i.values})`) : sl(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var al = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [r, ...t] = e;
      return new ie(r, t);
    } };
    var ll = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function Xi(e) {
      return function(t) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ?? (n = ul(t(o))) : ul(t(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function ul(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var cl = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, r) {
      return r();
    } };
    var eo = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(r) {
        return this.getGlobalTracingHelper().getTraceParent(r);
      }
      createEngineSpan(r) {
        return this.getGlobalTracingHelper().createEngineSpan(r);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(r, t) {
        return this.getGlobalTracingHelper().runInChildSpan(r, t);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? cl;
      }
    };
    function pl(e) {
      return e.includes("tracing") ? new eo() : cl;
    }
    function ml(e, r = () => {
    }) {
      let t, n = new Promise((i) => t = i);
      return { then(i) {
        return --e === 0 && t(r()), i?.(n);
      } };
    }
    var Zm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var dl = Zm;
    function fl(e) {
      return typeof e == "string" ? e : e.reduce((r, t) => {
        let n = typeof t == "string" ? t : t.level;
        return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
      }, void 0);
    }
    var Cn = class {
      constructor() {
        this._middlewares = [];
      }
      use(r) {
        this._middlewares.push(r);
      }
      get(r) {
        return this._middlewares[r];
      }
      has(r) {
        return !!this._middlewares[r];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var hl = k(ui());
    function Sn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function Rn(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Rn) : typeof e == "object" ? Xm(e) ? ed(e) : gr(e, Rn) : e;
    }
    function Xm(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function ed({ $type: e, value: r }) {
      switch (e) {
        case "BigInt":
          return BigInt(r);
        case "Bytes":
          return Buffer.from(r, "base64");
        case "DateTime":
          return new Date(r);
        case "Decimal":
          return new Te(r);
        case "Json":
          return JSON.parse(r);
        default:
          rr(r, "Unknown tagged value");
      }
    }
    function gl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let r = [];
      return e.modelName && r.push(e.modelName), e.query.arguments && r.push(ro(e.query.arguments)), r.push(ro(e.query.selection)), r.join("");
    }
    function ro(e) {
      return `(${Object.keys(e).sort().map((t) => {
        let n = e[t];
        return typeof n == "object" && n !== null ? `(${t} ${ro(n)})` : t;
      }).join(" ")})`;
    }
    var rd = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function to(e) {
      return rd[e];
    }
    var An = class {
      constructor(r) {
        this.options = r;
        this.tickActive = false;
        this.batches = {};
      }
      request(r) {
        let t = this.options.batchBy(r);
        return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[t].push({ request: r, resolve: n, reject: i });
        })) : this.options.singleLoader(r);
      }
      dispatchBatches() {
        for (let r in this.batches) {
          let t = this.batches[r];
          delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n) => {
            n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
          }).catch((n) => {
            t[0].reject(n);
          }) : (t.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < t.length; i++) t[i].reject(n);
            else for (let i = 0; i < t.length; i++) {
              let o = n[i];
              o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < t.length; i++) t[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var td = L("prisma:client:request_handler");
    var In = class {
      constructor(r, t) {
        this.logEmitter = t, this.client = r, this.dataloader = new An({ batchLoader: na(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => to(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: nd(o), containsWrite: u, customDataProxyFetch: i })).map((p, m) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[m], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? yl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: to(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : gl(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(r) {
        try {
          return await this.dataloader.request(r);
        } catch (t) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
          this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a });
        }
      }
      mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, r, t);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(r) {
        try {
          this.handleRequestError(r);
        } catch (t) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: r.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
        }
      }
      handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s }) {
        if (td(r), id(r, i) || r instanceof Oe) throw r;
        if (r instanceof V && od(r)) {
          let l = El(r.meta);
          Tn({ args: o, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion });
        }
        let a = r.message;
        if (n && (a = Ar({ callsite: n, originalMethod: t, isPanic: r.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), r.code) {
          let l = s ? { modelName: s, ...r.meta } : r.meta;
          throw new V(a, { code: r.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: r.batchRequestIdx });
        } else {
          if (r.isPanic) throw new le(a, this.client._clientVersion);
          if (r instanceof B) throw new B(a, { clientVersion: this.client._clientVersion, batchRequestIdx: r.batchRequestIdx });
          if (r instanceof R) throw new R(a, this.client._clientVersion);
          if (r instanceof le) throw new le(a, this.client._clientVersion);
        }
        throw r.clientVersion = this.client._clientVersion, r;
      }
      sanitizeMessage(r) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, hl.default)(r) : r;
      }
      unpack(r, t, n) {
        if (!r || (r.data && (r = r.data), !r)) return r;
        let i = Object.values(r)[0], o = t.filter((a) => a !== "select" && a !== "include"), s = Rn(Ii(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function nd(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: yl(e) };
        rr(e, "Unknown transaction kind");
      }
    }
    function yl(e) {
      return { id: e.id, payload: e.payload };
    }
    function id(e, r) {
      return Sn(e) && r?.kind === "batch" && e.batchRequestIdx !== r.index;
    }
    function od(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function El(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(El) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...r] = e.selectionPath;
        return { ...e, selectionPath: r };
      }
      return e;
    }
    var bl = "5.14.0";
    var wl = bl;
    function xl(e) {
      return e.map((r) => {
        let t = {};
        for (let n of Object.keys(r)) t[n] = Pl(r[n]);
        return t;
      });
    }
    function Pl({ prisma__type: e, prisma__value: r }) {
      switch (e) {
        case "bigint":
          return BigInt(r);
        case "bytes":
          return Buffer.from(r, "base64");
        case "decimal":
          return new Te(r);
        case "datetime":
        case "date":
          return new Date(r);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${r}Z`);
        case "array":
          return r.map(Pl);
        default:
          return r;
      }
    }
    var Sl = k(Wi());
    var q = class extends Error {
      constructor(r) {
        super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    w(q, "PrismaClientConstructorValidationError");
    var vl = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "__internal"];
    var Tl = ["pretty", "colorless", "minimal"];
    var Cl = ["info", "query", "warn", "error"];
    var ad = { datasources: (e, { datasourceNames: r }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new q(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [t, n] of Object.entries(e)) {
          if (!r.includes(t)) {
            let i = Or(t, r) || ` Available datasources: ${r.join(", ")}`;
            throw new q(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new q(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new q(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, adapter: (e, r) => {
      if (e === null) return;
      if (e === void 0) throw new q('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!bn(r).includes("driverAdapters")) throw new q('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Ur() === "binary") throw new q('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string") throw new q(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string") throw new q(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Tl.includes(e)) {
          let r = Or(e, Tl);
          throw new q(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`);
        }
      }
    }, log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new q(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function r(t) {
        if (typeof t == "string" && !Cl.includes(t)) {
          let n = Or(t, Cl);
          throw new q(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let t of e) {
        r(t);
        let n = { level: r, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Or(i, o);
            throw new q(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (t && typeof t == "object") for (let [i, o] of Object.entries(t)) if (n[i]) n[i](o);
        else throw new q(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e) return;
      let r = e.maxWait;
      if (r != null && r <= 0) throw new q(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let t = e.timeout;
      if (t != null && t <= 0) throw new q(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, __internal: (e) => {
      if (!e) return;
      let r = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new q(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [t] of Object.entries(e)) if (!r.includes(t)) {
        let n = Or(t, r);
        throw new q(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    } };
    function Rl(e, r) {
      for (let [t, n] of Object.entries(e)) {
        if (!vl.includes(t)) {
          let i = Or(t, vl);
          throw new q(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
        }
        ad[t](n, r);
      }
      if (e.datasourceUrl && e.datasources) throw new q('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Or(e, r) {
      if (r.length === 0 || typeof e != "string") return "";
      let t = ld(e, r);
      return t ? ` Did you mean "${t}"?` : "";
    }
    function ld(e, r) {
      if (r.length === 0) return null;
      let t = r.map((i) => ({ value: i, distance: (0, Sl.default)(e, i) }));
      t.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = t[0];
      return n.distance < 3 ? n.value : null;
    }
    function Al(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((r, t) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? t(i) : r(n)));
        }, l = (u) => {
          o || (o = true, t(u));
        };
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Sn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    var Ye = L("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var ud = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var cd = Symbol.for("prisma.client.transaction.id");
    var pd = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ll(e) {
      class r {
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Cn();
          this._createPrismaPromise = Xi();
          this.$extends = Ks;
          e = n?.__internal?.configOverride?.(e) ?? e, ma(e), n && Rl(n, e);
          let i = n?.adapter ? yi(n.adapter) : void 0, o = new Dl.EventEmitter().on("error", () => {
          });
          this._extensions = dn.empty(), this._previewFeatures = bn(e), this._clientVersion = e.clientVersion ?? wl, this._activeProvider = e.activeProvider, this._tracingHelper = pl(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && vt.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && vt.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = !i && Br(s, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && L.enable("prisma:client");
            let p = vt.default.resolve(e.dirname, e.relativePath);
            Ol.default.existsSync(p) || (p = e.dirname), Ye("dirname", e.dirname), Ye("relativePath", e.relativePath), Ye("cwd", p);
            let m = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: m.allowTriggerPanic, datamodelPath: vt.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: m.binaryPath ?? void 0, engineEndpoint: m.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && fl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: da(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: o, isBundled: e.isBundled, adapter: i }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Ir, getBatchRequestPayload: Er, prismaGraphQLToJSError: or, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V, debug: L("prisma:client:accelerateEngine"), engineVersion: _l.version, clientVersion: e.clientVersion } }, Ye("clientVersion", e.clientVersion), this._engine = Va(e, this._engineConfig), this._requestHandler = new In(this, o), l.log) for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                Jr.log(`${Jr.tags[g] ?? ""}`, h.message || h.query);
              });
            }
            this._metrics = new hr(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = it(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            ho();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Zi({ clientMethod: i, activeProvider: a }), callsite: He(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Il(n, i);
              return zi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new W("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (zi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new W(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: rl, callsite: He(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Zi({ clientMethod: i, activeProvider: a }), callsite: He(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(xl);
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Il(n, i));
            throw new W("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = pd.nextId(), s = ml(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return Al(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return it(Pe(Ws(this), [te("_appliedParent", () => this._appliedParent._createItxClient(n)), te("_createPrismaPromise", () => Xi(n)), te(cd, () => n.id), yr(dl)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? ud, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c) return this._tracingHelper.runInChildSpan(s.middleware, (I) => c(u, (T) => (I?.end(), l(T))));
            let { runInTransaction: p, args: m, ...f } = u, g = { ...n, ...f };
            m && (g.args = i.middlewareArgsToRequestArgs(m)), n.transaction !== void 0 && p === false && delete g.transaction;
            let h = await ta(this, g);
            return g.model ? Zs({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : h;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new kl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: m, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => Za({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures }));
            return L.enabled("prisma:client") && (Ye("Prisma Client call:"), Ye(`prisma.${i}(${_s(n)})`), Ye("Generated request:"), Ye(JSON.stringify(h, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: m, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
          } catch (g) {
            throw g.clientVersion = this._clientVersion, g;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics")) throw new W("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return r;
    }
    function Il(e, r) {
      return md(e) ? [new ie(e, r), al] : [e, ll];
    }
    function md(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var dd = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Fl(e) {
      return new Proxy(e, { get(r, t) {
        if (t in r) return r[t];
        if (!dd.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
      } });
    }
    function Nl(e) {
      Br(e, { conflictCheck: "warn" });
    }
  }
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.14.0",
      engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      email: "email",
      name: "name",
      birth_date: "birth_date",
      password: "password",
      facebookId: "facebookId",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.ProfileScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      name: "name",
      user_id: "user_id",
      color: "color",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.ProfileMovieFavoriteScalarFieldEnum = {
      id: "id",
      profile_id: "profile_id",
      tmdbId: "tmdbId",
      genre_id: "genre_id",
      title: "title",
      overview: "overview",
      watched: "watched",
      favorite: "favorite",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.GenresScalarFieldEnum = {
      id: "id",
      name: "name"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      User: "User",
      Profile: "Profile",
      ProfileMovieFavorite: "ProfileMovieFavorite",
      Genres: "Genres"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/home/otaviosena/repos/jeraflix-node/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "debian-openssl-3.0.x",
            "native": true
          }
        ],
        "previewFeatures": []
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../src/config/prisma",
      "clientVersion": "5.14.0",
      "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mysql",
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'datasource db {\n  provider = "mysql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\nmodel User {\n  id         Int       @id @default(autoincrement())\n  uuid       String\n  email      String    @unique\n  name       String\n  birth_date DateTime\n  password   String\n  facebookId String?   @unique\n  profiles   Profile[]\n  createdAt  DateTime  @default(now())\n  updatedAt  DateTime  @updatedAt\n\n  @@map("users")\n}\n\nmodel Profile {\n  id                    Int                    @id @default(autoincrement())\n  uuid                  String\n  name                  String\n  user                  User                   @relation(fields: [user_id], references: [id], onUpdate: Cascade, onDelete: Cascade)\n  user_id               Int\n  color                 String\n  profileMovieFavorites ProfileMovieFavorite[]\n  createdAt             DateTime               @default(now())\n  updatedAt             DateTime               @updatedAt\n\n  @@map("profiles")\n}\n\nmodel ProfileMovieFavorite {\n  id         Int      @id @default(autoincrement())\n  profile    Profile  @relation(fields: [profile_id], references: [id], onUpdate: Cascade, onDelete: Cascade)\n  profile_id Int\n  tmdbId     Int // O ID do filme na API externa\n  genre      Genres   @relation(fields: [genre_id], references: [id])\n  genre_id   Int\n  title      String\n  overview   String   @db.LongText\n  watched    Boolean\n  favorite   Boolean\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime @updatedAt\n\n  @@unique([tmdbId, profile_id], name: "tmdbId_profile_id")\n  @@index([tmdbId, profile_id], name: "idx_tmdbId_profile_id")\n  @@map("profile_movie_favorite")\n}\n\nmodel Genres {\n  id     Int                    @id @default(autoincrement())\n  name   String\n  movies ProfileMovieFavorite[]\n\n  @@map("genres")\n}\n\n// sudo docker run --name jera-test -e MYSQL_ROOT_PASSWORD=jeratest -e MYSQL_DATABASE=jeraflix_db -p 3306:3306 -d mariadb:latest\n',
      "inlineSchemaHash": "6db0d9d4e51b730e4e8ffd10b9a5c81ddf94503a9d6aa42052cb2f812be245d1",
      "copyEngine": true
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":"users","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"birth_date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"facebookId","kind":"scalar","isList":false,"isRequired":false,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profiles","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Profile","relationName":"ProfileToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Profile":{"dbName":"profiles","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"ProfileToUser","relationFromFields":["user_id"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"user_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"color","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"profileMovieFavorites","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProfileMovieFavorite","relationName":"ProfileToProfileMovieFavorite","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ProfileMovieFavorite":{"dbName":"profile_movie_favorite","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"profile","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Profile","relationName":"ProfileToProfileMovieFavorite","relationFromFields":["profile_id"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"profile_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"tmdbId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"genre","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Genres","relationName":"GenresToProfileMovieFavorite","relationFromFields":["genre_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"genre_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"overview","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"watched","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"favorite","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[["tmdbId","profile_id"]],"uniqueIndexes":[{"name":"tmdbId_profile_id","fields":["tmdbId","profile_id"]}],"isGenerated":false},"Genres":{"dbName":"genres","fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"movies","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ProfileMovieFavorite","relationName":"GenresToProfileMovieFavorite","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    config2.engineWasm = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
    path.join(process.cwd(), "node_modules/.prisma/client/libquery_engine-debian-openssl-3.0.x.so.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "node_modules/.prisma/client/default.js"(exports2, module2) {
    module2.exports = { ...require_client() };
  }
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "node_modules/@prisma/client/default.js"(exports2, module2) {
    module2.exports = {
      ...require_default()
    };
  }
});

// node_modules/dotenv/package.json
var require_package = __commonJS({
  "node_modules/dotenv/package.json"(exports2, module2) {
    module2.exports = {
      name: "dotenv",
      version: "16.4.5",
      description: "Loads environment variables from .env file",
      main: "lib/main.js",
      types: "lib/main.d.ts",
      exports: {
        ".": {
          types: "./lib/main.d.ts",
          require: "./lib/main.js",
          default: "./lib/main.js"
        },
        "./config": "./config.js",
        "./config.js": "./config.js",
        "./lib/env-options": "./lib/env-options.js",
        "./lib/env-options.js": "./lib/env-options.js",
        "./lib/cli-options": "./lib/cli-options.js",
        "./lib/cli-options.js": "./lib/cli-options.js",
        "./package.json": "./package.json"
      },
      scripts: {
        "dts-check": "tsc --project tests/types/tsconfig.json",
        lint: "standard",
        "lint-readme": "standard-markdown",
        pretest: "npm run lint && npm run dts-check",
        test: "tap tests/*.js --100 -Rspec",
        "test:coverage": "tap --coverage-report=lcov",
        prerelease: "npm test",
        release: "standard-version"
      },
      repository: {
        type: "git",
        url: "git://github.com/motdotla/dotenv.git"
      },
      funding: "https://dotenvx.com",
      keywords: [
        "dotenv",
        "env",
        ".env",
        "environment",
        "variables",
        "config",
        "settings"
      ],
      readmeFilename: "README.md",
      license: "BSD-2-Clause",
      devDependencies: {
        "@definitelytyped/dtslint": "^0.0.133",
        "@types/node": "^18.11.3",
        decache: "^4.6.1",
        sinon: "^14.0.1",
        standard: "^17.0.0",
        "standard-markdown": "^7.1.0",
        "standard-version": "^9.5.0",
        tap: "^16.3.0",
        tar: "^6.1.11",
        typescript: "^4.8.4"
      },
      engines: {
        node: ">=12"
      },
      browser: {
        fs: false
      }
    };
  }
});

// node_modules/dotenv/lib/main.js
var require_main = __commonJS({
  "node_modules/dotenv/lib/main.js"(exports2, module2) {
    var fs2 = require("fs");
    var path = require("path");
    var os2 = require("os");
    var crypto2 = require("crypto");
    var packageJson = require_package();
    var version = packageJson.version;
    var LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function parse(src) {
      const obj = {};
      let lines = src.toString();
      lines = lines.replace(/\r\n?/mg, "\n");
      let match;
      while ((match = LINE.exec(lines)) != null) {
        const key = match[1];
        let value = match[2] || "";
        value = value.trim();
        const maybeQuote = value[0];
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        if (maybeQuote === '"') {
          value = value.replace(/\\n/g, "\n");
          value = value.replace(/\\r/g, "\r");
        }
        obj[key] = value;
      }
      return obj;
    }
    function _parseVault(options) {
      const vaultPath = _vaultPath(options);
      const result = DotenvModule.configDotenv({ path: vaultPath });
      if (!result.parsed) {
        const err = new Error(`MISSING_DATA: Cannot parse ${vaultPath} for an unknown reason`);
        err.code = "MISSING_DATA";
        throw err;
      }
      const keys = _dotenvKey(options).split(",");
      const length = keys.length;
      let decrypted;
      for (let i = 0; i < length; i++) {
        try {
          const key = keys[i].trim();
          const attrs = _instructions(result, key);
          decrypted = DotenvModule.decrypt(attrs.ciphertext, attrs.key);
          break;
        } catch (error) {
          if (i + 1 >= length) {
            throw error;
          }
        }
      }
      return DotenvModule.parse(decrypted);
    }
    function _log(message) {
      console.log(`[dotenv@${version}][INFO] ${message}`);
    }
    function _warn(message) {
      console.log(`[dotenv@${version}][WARN] ${message}`);
    }
    function _debug(message) {
      console.log(`[dotenv@${version}][DEBUG] ${message}`);
    }
    function _dotenvKey(options) {
      if (options && options.DOTENV_KEY && options.DOTENV_KEY.length > 0) {
        return options.DOTENV_KEY;
      }
      if (process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0) {
        return process.env.DOTENV_KEY;
      }
      return "";
    }
    function _instructions(result, dotenvKey) {
      let uri;
      try {
        uri = new URL(dotenvKey);
      } catch (error) {
        if (error.code === "ERR_INVALID_URL") {
          const err = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        }
        throw error;
      }
      const key = uri.password;
      if (!key) {
        const err = new Error("INVALID_DOTENV_KEY: Missing key part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environment = uri.searchParams.get("environment");
      if (!environment) {
        const err = new Error("INVALID_DOTENV_KEY: Missing environment part");
        err.code = "INVALID_DOTENV_KEY";
        throw err;
      }
      const environmentKey = `DOTENV_VAULT_${environment.toUpperCase()}`;
      const ciphertext = result.parsed[environmentKey];
      if (!ciphertext) {
        const err = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${environmentKey} in your .env.vault file.`);
        err.code = "NOT_FOUND_DOTENV_ENVIRONMENT";
        throw err;
      }
      return { ciphertext, key };
    }
    function _vaultPath(options) {
      let possibleVaultPath = null;
      if (options && options.path && options.path.length > 0) {
        if (Array.isArray(options.path)) {
          for (const filepath of options.path) {
            if (fs2.existsSync(filepath)) {
              possibleVaultPath = filepath.endsWith(".vault") ? filepath : `${filepath}.vault`;
            }
          }
        } else {
          possibleVaultPath = options.path.endsWith(".vault") ? options.path : `${options.path}.vault`;
        }
      } else {
        possibleVaultPath = path.resolve(process.cwd(), ".env.vault");
      }
      if (fs2.existsSync(possibleVaultPath)) {
        return possibleVaultPath;
      }
      return null;
    }
    function _resolveHome(envPath) {
      return envPath[0] === "~" ? path.join(os2.homedir(), envPath.slice(1)) : envPath;
    }
    function _configVault(options) {
      _log("Loading env from encrypted .env.vault");
      const parsed = DotenvModule._parseVault(options);
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsed, options);
      return { parsed };
    }
    function configDotenv(options) {
      const dotenvPath = path.resolve(process.cwd(), ".env");
      let encoding = "utf8";
      const debug = Boolean(options && options.debug);
      if (options && options.encoding) {
        encoding = options.encoding;
      } else {
        if (debug) {
          _debug("No encoding is specified. UTF-8 is used by default");
        }
      }
      let optionPaths = [dotenvPath];
      if (options && options.path) {
        if (!Array.isArray(options.path)) {
          optionPaths = [_resolveHome(options.path)];
        } else {
          optionPaths = [];
          for (const filepath of options.path) {
            optionPaths.push(_resolveHome(filepath));
          }
        }
      }
      let lastError;
      const parsedAll = {};
      for (const path2 of optionPaths) {
        try {
          const parsed = DotenvModule.parse(fs2.readFileSync(path2, { encoding }));
          DotenvModule.populate(parsedAll, parsed, options);
        } catch (e) {
          if (debug) {
            _debug(`Failed to load ${path2} ${e.message}`);
          }
          lastError = e;
        }
      }
      let processEnv = process.env;
      if (options && options.processEnv != null) {
        processEnv = options.processEnv;
      }
      DotenvModule.populate(processEnv, parsedAll, options);
      if (lastError) {
        return { parsed: parsedAll, error: lastError };
      } else {
        return { parsed: parsedAll };
      }
    }
    function config2(options) {
      if (_dotenvKey(options).length === 0) {
        return DotenvModule.configDotenv(options);
      }
      const vaultPath = _vaultPath(options);
      if (!vaultPath) {
        _warn(`You set DOTENV_KEY but you are missing a .env.vault file at ${vaultPath}. Did you forget to build it?`);
        return DotenvModule.configDotenv(options);
      }
      return DotenvModule._configVault(options);
    }
    function decrypt(encrypted, keyStr) {
      const key = Buffer.from(keyStr.slice(-64), "hex");
      let ciphertext = Buffer.from(encrypted, "base64");
      const nonce = ciphertext.subarray(0, 12);
      const authTag = ciphertext.subarray(-16);
      ciphertext = ciphertext.subarray(12, -16);
      try {
        const aesgcm = crypto2.createDecipheriv("aes-256-gcm", key, nonce);
        aesgcm.setAuthTag(authTag);
        return `${aesgcm.update(ciphertext)}${aesgcm.final()}`;
      } catch (error) {
        const isRange = error instanceof RangeError;
        const invalidKeyLength = error.message === "Invalid key length";
        const decryptionFailed = error.message === "Unsupported state or unable to authenticate data";
        if (isRange || invalidKeyLength) {
          const err = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          err.code = "INVALID_DOTENV_KEY";
          throw err;
        } else if (decryptionFailed) {
          const err = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          err.code = "DECRYPTION_FAILED";
          throw err;
        } else {
          throw error;
        }
      }
    }
    function populate(processEnv, parsed, options = {}) {
      const debug = Boolean(options && options.debug);
      const override = Boolean(options && options.override);
      if (typeof parsed !== "object") {
        const err = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        err.code = "OBJECT_REQUIRED";
        throw err;
      }
      for (const key of Object.keys(parsed)) {
        if (Object.prototype.hasOwnProperty.call(processEnv, key)) {
          if (override === true) {
            processEnv[key] = parsed[key];
          }
          if (debug) {
            if (override === true) {
              _debug(`"${key}" is already defined and WAS overwritten`);
            } else {
              _debug(`"${key}" is already defined and was NOT overwritten`);
            }
          }
        } else {
          processEnv[key] = parsed[key];
        }
      }
    }
    var DotenvModule = {
      configDotenv,
      _configVault,
      _parseVault,
      config: config2,
      decrypt,
      parse,
      populate
    };
    module2.exports.configDotenv = DotenvModule.configDotenv;
    module2.exports._configVault = DotenvModule._configVault;
    module2.exports._parseVault = DotenvModule._parseVault;
    module2.exports.config = DotenvModule.config;
    module2.exports.decrypt = DotenvModule.decrypt;
    module2.exports.parse = DotenvModule.parse;
    module2.exports.populate = DotenvModule.populate;
    module2.exports = DotenvModule;
  }
});

// src/shared/container/index.ts
var import_tsyringe = __toESM(require_cjs());

// src/config/prisma/prisma.ts
var import_client = __toESM(require_default2());
var import_dotenv = __toESM(require_main());
import_dotenv.default.config();
var prisma = new import_client.PrismaClient();
var prisma_default = prisma;

// src/modules/users/repositories/PrismaUserRepository.ts
var PrismaUserRepository = class {
  async create(data) {
    const createdUser = await prisma_default.user.create({
      data
    });
    return createdUser;
  }
  async update(id2, user) {
    const updatedUser = await prisma_default.user.update({
      where: { id: id2 },
      data: user
    });
    return updatedUser;
  }
  async findById(id2) {
    const user = await prisma_default.user.findUnique({
      where: { id: id2 }
    });
    return user;
  }
  async findByEmail(email) {
    const user = prisma_default.user.findUnique({
      where: { email }
    });
    return user;
  }
};

// src/modules/profiles/repositories/PrismaProfileRepository.ts
var PrismaProfileRepository = class {
  update(id2, user) {
    throw new Error("Method not implemented.");
  }
  delete(id2) {
    throw new Error("Method not implemented.");
  }
  findByUserId(user_id) {
    return prisma_default.profile.findMany({
      where: { user_id }
    });
  }
  async create(data) {
    return await prisma_default.profile.create({
      data
    });
  }
  async findByName(name, user_id) {
    return await prisma_default.profile.findFirst({ where: { name, user_id } });
  }
};

// src/modules/movies/repositories/PrismaMovieRepository.ts
var PrismaMovieRepository = class {
  async getWishList(profile_id, page) {
    const pageSize = 20;
    const skip = (page - 1) * pageSize;
    const wishlist = await prisma_default.profileMovieFavorite.findMany({
      where: {
        profile_id,
        favorite: true
      },
      skip,
      take: pageSize,
      include: {
        genre: true
        // Isso vai incluir os dados do gênero
      }
    });
    const totalCount = await prisma_default.profileMovieFavorite.count({
      where: {
        profile_id,
        favorite: true
      }
    });
    return { wishlist, totalCount };
  }
  async getWatched(profile_id, page) {
    const pageSize = 20;
    const skip = (page - 1) * pageSize;
    const wishlist = await prisma_default.profileMovieFavorite.findMany({
      where: {
        profile_id,
        watched: true
      },
      skip,
      take: pageSize,
      include: {
        genre: true
        // Isso vai incluir os dados do gênero
      }
    });
    const totalCount = await prisma_default.profileMovieFavorite.count({
      where: {
        profile_id,
        watched: true
      }
    });
    return { wishlist, totalCount };
  }
  async toogleFavorite(data) {
    console.log(data);
    await prisma_default.profileMovieFavorite.upsert({
      where: {
        tmdbId_profile_id: {
          tmdbId: data.tmdbId,
          profile_id: data.profile_id
        }
      },
      update: {
        favorite: data.favorite
      },
      create: {
        ...data
      }
    });
  }
  async toogleWatched(data) {
    await prisma_default.profileMovieFavorite.upsert({
      where: {
        tmdbId_profile_id: {
          tmdbId: data.tmdbId,
          profile_id: data.profile_id
        }
      },
      update: {
        watched: data.watched
      },
      create: {
        ...data
      }
    });
  }
  async findByTmdbId(id2) {
    return await prisma_default.profileMovieFavorite.findFirst({
      where: { tmdbId: id2 }
    });
  }
  async findByProfileId(profile_id) {
    return await prisma_default.profileMovieFavorite.findMany({
      where: { profile_id }
    });
  }
  async findGenreById(id2) {
    return await prisma_default.genres.findFirst({
      where: { id: id2 }
    });
  }
  async find(profile_id, tmdb_id) {
    return await prisma_default.profileMovieFavorite.findFirst({
      where: {
        profile_id,
        tmdbId: tmdb_id
      }
    });
  }
};

// src/shared/container/index.ts
import_tsyringe.container.registerSingleton(
  "UserRepository",
  PrismaUserRepository
);
import_tsyringe.container.registerSingleton(
  "ProfileRepository",
  PrismaProfileRepository
);
import_tsyringe.container.registerSingleton(
  "MovieRepository",
  PrismaMovieRepository
);
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
