"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

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
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
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
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
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
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function(v) {
      return new Promise(function(a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
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
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
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
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
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
      registerType(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(to)) {
          return this.register(from, {
            useToken: to
          });
        }
        return this.register(from, {
          useClass: to
        });
      }
      registerInstance(token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
          useValue: instance
        });
      }
      registerSingleton(from, to) {
        this.ensureNotDisposed();
        if (providers_1.isNormalToken(from)) {
          if (providers_1.isNormalToken(to)) {
            return this.register(from, {
              useToken: to
            }, { lifecycle: lifecycle_1.default.Singleton });
          } else if (to) {
            return this.register(from, {
              useClass: to
            }, { lifecycle: lifecycle_1.default.Singleton });
          }
          throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        let useClass = from;
        if (to && !providers_1.isNormalToken(to)) {
          useClass = to;
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
    function inject2(token) {
      return reflection_helpers_1.defineInjectionTokenMetadata(token);
    }
    exports2.default = inject2;
  }
});

// node_modules/tsyringe/dist/cjs/decorators/injectable.js
var require_injectable = __commonJS({
  "node_modules/tsyringe/dist/cjs/decorators/injectable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var reflection_helpers_1 = require_reflection_helpers();
    var dependency_container_1 = require_dependency_container();
    function injectable2() {
      return function(target) {
        dependency_container_1.typeInfo.set(target, reflection_helpers_1.getParamInfo(target));
      };
    }
    exports2.default = injectable2;
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
        registrations.forEach((_a) => {
          var { token, options } = _a, provider = tslib_1.__rest(_a, ["token", "options"]);
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

// src/modules/movies/services/MoviesServiceCrud.ts
var MoviesServiceCrud_exports = {};
__export(MoviesServiceCrud_exports, {
  default: () => MoviesServiceCrud
});
module.exports = __toCommonJS(MoviesServiceCrud_exports);
var import_tsyringe = __toESM(require_cjs());

// src/modules/utils/error.ts
var AppError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "AppError";
  }
};

// src/modules/movies/services/MoviesServiceCrud.ts
var MoviesServiceCrud = class {
  constructor(moviesRepository) {
    this.moviesRepository = moviesRepository;
  }
  async toogleFavorite(data) {
    let watched = false;
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId);
    if (movieExist && movieExist.watched) {
      watched = true;
    } else {
      watched = false;
    }
    data.watched = watched;
    data.profile_id = Number(data.profile_id);
    const profile = await this.moviesRepository.toogleFavorite(data);
    return profile;
  }
  async toogleWatched(data) {
    let favorite = false;
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId);
    if (movieExist && movieExist.watched) {
      favorite = true;
    } else {
      favorite = false;
    }
    data.favorite = favorite;
    data.profile_id = Number(data.profile_id);
    delete data.user_id;
    const profile = await this.moviesRepository.toogleWatched(data);
    return profile;
  }
  async getWishlist(profile_id, page) {
    const movies = await this.moviesRepository.getWishList(profile_id, page);
    return movies;
  }
  async getWatched(profile_id, page) {
    const movies = await this.moviesRepository.getWatched(profile_id, page);
    return movies;
  }
  async addFavoriteDirect(data) {
    let watched = false;
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId);
    if (movieExist && movieExist.watched) {
      watched = true;
    } else {
      watched = false;
    }
    data.watched = watched;
    const profileFavorite = await this.moviesRepository.find(
      data.profile_id,
      data.tmdbId
    );
    if (profileFavorite?.favorite) {
      throw new AppError("Filme j\xE1 est\xE1 na sua lista de desejos");
    }
    await this.moviesRepository.toogleFavorite(data);
  }
  async addWatchedDirect(data) {
    let favorite = false;
    const movieExist = await this.moviesRepository.findByTmdbId(data.tmdbId);
    if (movieExist && movieExist.watched) {
      favorite = true;
    } else {
      favorite = false;
    }
    data.favorite = favorite;
    delete data.user_id;
    const profileFavorite = await this.moviesRepository.find(
      data.profile_id,
      data.tmdbId
    );
    if (profileFavorite?.watched) {
      throw new AppError("Filme j\xE1 est\xE1 na sua lista de assistidos");
    }
    await this.moviesRepository.toogleWatched(data);
  }
};
MoviesServiceCrud = __decorateClass([
  (0, import_tsyringe.injectable)(),
  __decorateParam(0, (0, import_tsyringe.inject)("MovieRepository"))
], MoviesServiceCrud);
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
*/
