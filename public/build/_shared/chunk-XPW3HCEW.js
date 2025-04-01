import {
  require_jsx_runtime
} from "/build/_shared/chunk-2QJY4JOV.js";
import {
  clsx_m_default
} from "/build/_shared/chunk-PKAD657O.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  Form,
  init_esm,
  init_esm2,
  json,
  useActionData,
  useMatches,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-BPVN3YYS.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-KP6QTVYU.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/remeda/dist/es/purry.js
function purry(fn2, args, lazy) {
  var diff = fn2.length - args.length;
  var arrayArgs = Array.from(args);
  if (diff === 0) {
    return fn2.apply(void 0, arrayArgs);
  }
  if (diff === 1) {
    var ret = function(data) {
      return fn2.apply(void 0, __spreadArray([data], arrayArgs, false));
    };
    if (lazy || fn2.lazy) {
      ret.lazy = lazy || fn2.lazy;
      ret.lazyArgs = args;
    }
    return ret;
  }
  throw new Error("Wrong number of arguments");
}
var __spreadArray;
var init_purry = __esm({
  "node_modules/remeda/dist/es/purry.js"() {
    __spreadArray = function(to, from2, pack) {
      if (pack || arguments.length === 2)
        for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
          if (ar || !(i2 in from2)) {
            if (!ar)
              ar = Array.prototype.slice.call(from2, 0, i2);
            ar[i2] = from2[i2];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from2));
    };
  }
});

// node_modules/remeda/dist/es/addProp.js
var init_addProp = __esm({
  "node_modules/remeda/dist/es/addProp.js"() {
  }
});

// node_modules/remeda/dist/es/allPass.js
var init_allPass = __esm({
  "node_modules/remeda/dist/es/allPass.js"() {
  }
});

// node_modules/remeda/dist/es/anyPass.js
var init_anyPass = __esm({
  "node_modules/remeda/dist/es/anyPass.js"() {
  }
});

// node_modules/remeda/dist/es/chunk.js
var init_chunk = __esm({
  "node_modules/remeda/dist/es/chunk.js"() {
  }
});

// node_modules/remeda/dist/es/clamp.js
var init_clamp = __esm({
  "node_modules/remeda/dist/es/clamp.js"() {
  }
});

// node_modules/remeda/dist/es/type.js
var init_type = __esm({
  "node_modules/remeda/dist/es/type.js"() {
  }
});

// node_modules/remeda/dist/es/clone.js
var init_clone = __esm({
  "node_modules/remeda/dist/es/clone.js"() {
  }
});

// node_modules/remeda/dist/es/isTruthy.js
var init_isTruthy = __esm({
  "node_modules/remeda/dist/es/isTruthy.js"() {
  }
});

// node_modules/remeda/dist/es/compact.js
var init_compact = __esm({
  "node_modules/remeda/dist/es/compact.js"() {
  }
});

// node_modules/remeda/dist/es/concat.js
var init_concat = __esm({
  "node_modules/remeda/dist/es/concat.js"() {
  }
});

// node_modules/remeda/dist/es/countBy.js
function countBy() {
  return purry(_countBy(false), arguments);
}
var _countBy;
var init_countBy = __esm({
  "node_modules/remeda/dist/es/countBy.js"() {
    init_purry();
    _countBy = function(indexed) {
      return function(array, fn2) {
        return array.reduce(function(ret, item, index) {
          var value = indexed ? fn2(item, index, array) : fn2(item);
          return ret + (value ? 1 : 0);
        }, 0);
      };
    };
    (function(countBy2) {
      function indexed() {
        return purry(_countBy(true), arguments);
      }
      countBy2.indexed = indexed;
    })(countBy || (countBy = {}));
  }
});

// node_modules/remeda/dist/es/pipe.js
var init_pipe = __esm({
  "node_modules/remeda/dist/es/pipe.js"() {
  }
});

// node_modules/remeda/dist/es/createPipe.js
var init_createPipe = __esm({
  "node_modules/remeda/dist/es/createPipe.js"() {
  }
});

// node_modules/remeda/dist/es/_reduceLazy.js
function _reduceLazy(array, lazy, indexed) {
  return array.reduce(function(acc, item, index) {
    var result = indexed ? lazy(item, index, array) : lazy(item);
    if (result.hasMany === true) {
      acc.push.apply(acc, result.next);
    } else if (result.hasNext) {
      acc.push(result.next);
    }
    return acc;
  }, []);
}
var init_reduceLazy = __esm({
  "node_modules/remeda/dist/es/_reduceLazy.js"() {
  }
});

// node_modules/remeda/dist/es/difference.js
function difference() {
  return purry(_difference, arguments, difference.lazy);
}
function _difference(array, other) {
  var lazy = difference.lazy(other);
  return _reduceLazy(array, lazy);
}
var init_difference = __esm({
  "node_modules/remeda/dist/es/difference.js"() {
    init_purry();
    init_reduceLazy();
    (function(difference2) {
      function lazy(other) {
        var set = new Set(other);
        return function(value) {
          if (!set.has(value)) {
            return {
              done: false,
              hasNext: true,
              next: value
            };
          }
          return {
            done: false,
            hasNext: false
          };
        };
      }
      difference2.lazy = lazy;
    })(difference || (difference = {}));
  }
});

// node_modules/remeda/dist/es/differenceWith.js
function differenceWith() {
  return purry(_differenceWith, arguments, differenceWith.lazy);
}
function _differenceWith(array, other, isEquals) {
  var lazy = differenceWith.lazy(other, isEquals);
  return _reduceLazy(array, lazy);
}
var init_differenceWith = __esm({
  "node_modules/remeda/dist/es/differenceWith.js"() {
    init_purry();
    init_reduceLazy();
    (function(differenceWith2) {
      function lazy(other, isEquals) {
        return function(value) {
          if (other.every(function(otherValue) {
            return !isEquals(value, otherValue);
          })) {
            return {
              done: false,
              hasNext: true,
              next: value
            };
          }
          return {
            done: false,
            hasNext: false
          };
        };
      }
      differenceWith2.lazy = lazy;
    })(differenceWith || (differenceWith = {}));
  }
});

// node_modules/remeda/dist/es/drop.js
function drop() {
  return purry(_drop, arguments, drop.lazy);
}
function _drop(array, n2) {
  return _reduceLazy(array, drop.lazy(n2));
}
var init_drop = __esm({
  "node_modules/remeda/dist/es/drop.js"() {
    init_purry();
    init_reduceLazy();
    (function(drop2) {
      function lazy(n2) {
        var left = n2;
        return function(value) {
          if (left > 0) {
            left--;
            return {
              done: false,
              hasNext: false
            };
          }
          return {
            done: false,
            hasNext: true,
            next: value
          };
        };
      }
      drop2.lazy = lazy;
    })(drop || (drop = {}));
  }
});

// node_modules/remeda/dist/es/dropLast.js
var init_dropLast = __esm({
  "node_modules/remeda/dist/es/dropLast.js"() {
  }
});

// node_modules/remeda/dist/es/equals.js
function equals() {
  return purry(_equals, arguments);
}
function _equals(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (a2 && b2 && typeof a2 === "object" && typeof b2 === "object") {
    var arrA = isArray(a2);
    var arrB = isArray(b2);
    var i2 = void 0;
    var length = void 0;
    var key = void 0;
    if (arrA && arrB) {
      length = a2.length;
      if (length !== b2.length) {
        return false;
      }
      for (i2 = length; i2-- !== 0; ) {
        if (!equals(a2[i2], b2[i2])) {
          return false;
        }
      }
      return true;
    }
    if (arrA !== arrB) {
      return false;
    }
    var dateA = a2 instanceof Date;
    var dateB = b2 instanceof Date;
    if (dateA !== dateB) {
      return false;
    }
    if (dateA && dateB) {
      return a2.getTime() === b2.getTime();
    }
    var regexpA = a2 instanceof RegExp;
    var regexpB = b2 instanceof RegExp;
    if (regexpA !== regexpB) {
      return false;
    }
    if (regexpA && regexpB) {
      return a2.toString() === b2.toString();
    }
    var keys2 = keyList(a2);
    length = keys2.length;
    if (length !== keyList(b2).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      key = keys2[i2];
      if (!equals(a2[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
var isArray, keyList;
var init_equals = __esm({
  "node_modules/remeda/dist/es/equals.js"() {
    init_purry();
    isArray = Array.isArray;
    keyList = Object.keys;
  }
});

// node_modules/remeda/dist/es/_toLazyIndexed.js
var _toLazyIndexed;
var init_toLazyIndexed = __esm({
  "node_modules/remeda/dist/es/_toLazyIndexed.js"() {
    _toLazyIndexed = function(fn2) {
      fn2.indexed = true;
      return fn2;
    };
  }
});

// node_modules/remeda/dist/es/filter.js
function filter() {
  return purry(_filter(false), arguments, filter.lazy);
}
var _filter, _lazy;
var init_filter = __esm({
  "node_modules/remeda/dist/es/filter.js"() {
    init_purry();
    init_reduceLazy();
    init_toLazyIndexed();
    _filter = function(indexed) {
      return function(array, fn2) {
        return _reduceLazy(array, indexed ? filter.lazyIndexed(fn2) : filter.lazy(fn2), indexed);
      };
    };
    _lazy = function(indexed) {
      return function(fn2) {
        return function(value, index, array) {
          var valid = indexed ? fn2(value, index, array) : fn2(value);
          if (valid) {
            return {
              done: false,
              hasNext: true,
              next: value
            };
          }
          return {
            done: false,
            hasNext: false
          };
        };
      };
    };
    (function(filter2) {
      function indexed() {
        return purry(_filter(true), arguments, filter2.lazyIndexed);
      }
      filter2.indexed = indexed;
      filter2.lazy = _lazy(false);
      filter2.lazyIndexed = _toLazyIndexed(_lazy(true));
    })(filter || (filter = {}));
  }
});

// node_modules/remeda/dist/es/_toSingle.js
var _toSingle;
var init_toSingle = __esm({
  "node_modules/remeda/dist/es/_toSingle.js"() {
    _toSingle = function(fn2) {
      fn2.single = true;
      return fn2;
    };
  }
});

// node_modules/remeda/dist/es/find.js
function find() {
  return purry(_find(false), arguments, find.lazy);
}
var _find, _lazy2;
var init_find = __esm({
  "node_modules/remeda/dist/es/find.js"() {
    init_purry();
    init_toLazyIndexed();
    init_toSingle();
    _find = function(indexed) {
      return function(array, fn2) {
        if (indexed) {
          return array.find(fn2);
        }
        return array.find(function(x2) {
          return fn2(x2);
        });
      };
    };
    _lazy2 = function(indexed) {
      return function(fn2) {
        return function(value, index, array) {
          var valid = indexed ? fn2(value, index, array) : fn2(value);
          return {
            done: valid,
            hasNext: valid,
            next: value
          };
        };
      };
    };
    (function(find2) {
      function indexed() {
        return purry(_find(true), arguments, find2.lazyIndexed);
      }
      find2.indexed = indexed;
      find2.lazy = _toSingle(_lazy2(false));
      find2.lazyIndexed = _toSingle(_toLazyIndexed(_lazy2(true)));
    })(find || (find = {}));
  }
});

// node_modules/remeda/dist/es/findIndex.js
function findIndex() {
  return purry(_findIndex(false), arguments, findIndex.lazy);
}
var _findIndex, _lazy3;
var init_findIndex = __esm({
  "node_modules/remeda/dist/es/findIndex.js"() {
    init_purry();
    init_toLazyIndexed();
    init_toSingle();
    _findIndex = function(indexed) {
      return function(array, fn2) {
        if (indexed) {
          return array.findIndex(fn2);
        }
        return array.findIndex(function(x2) {
          return fn2(x2);
        });
      };
    };
    _lazy3 = function(indexed) {
      return function(fn2) {
        var i2 = 0;
        return function(value, index, array) {
          var valid = indexed ? fn2(value, index, array) : fn2(value);
          if (valid) {
            return {
              done: true,
              hasNext: true,
              next: i2
            };
          }
          i2++;
          return {
            done: false,
            hasNext: false
          };
        };
      };
    };
    (function(findIndex2) {
      function indexed() {
        return purry(_findIndex(true), arguments, findIndex2.lazyIndexed);
      }
      findIndex2.indexed = indexed;
      findIndex2.lazy = _toSingle(_lazy3(false));
      findIndex2.lazyIndexed = _toSingle(_toLazyIndexed(_lazy3(true)));
    })(findIndex || (findIndex = {}));
  }
});

// node_modules/remeda/dist/es/findLast.js
function findLast() {
  return purry(_findLast(false), arguments);
}
var _findLast;
var init_findLast = __esm({
  "node_modules/remeda/dist/es/findLast.js"() {
    init_purry();
    _findLast = function(indexed) {
      return function(array, fn2) {
        for (var i2 = array.length - 1; i2 >= 0; i2--) {
          if (indexed ? fn2(array[i2], i2, array) : fn2(array[i2])) {
            return array[i2];
          }
        }
      };
    };
    (function(findLast2) {
      function indexed() {
        return purry(_findLast(true), arguments);
      }
      findLast2.indexed = indexed;
    })(findLast || (findLast = {}));
  }
});

// node_modules/remeda/dist/es/findLastIndex.js
function findLastIndex() {
  return purry(_findLastIndex(false), arguments);
}
var _findLastIndex;
var init_findLastIndex = __esm({
  "node_modules/remeda/dist/es/findLastIndex.js"() {
    init_purry();
    _findLastIndex = function(indexed) {
      return function(array, fn2) {
        for (var i2 = array.length - 1; i2 >= 0; i2--) {
          if (indexed ? fn2(array[i2], i2, array) : fn2(array[i2])) {
            return i2;
          }
        }
        return -1;
      };
    };
    (function(findLastIndex2) {
      function indexed() {
        return purry(_findLastIndex(true), arguments);
      }
      findLastIndex2.indexed = indexed;
    })(findLastIndex || (findLastIndex = {}));
  }
});

// node_modules/remeda/dist/es/first.js
function first() {
  return purry(_first, arguments, first.lazy);
}
function _first(array) {
  return array[0];
}
var init_first = __esm({
  "node_modules/remeda/dist/es/first.js"() {
    init_purry();
    (function(first2) {
      function lazy() {
        return function(value) {
          return {
            done: true,
            hasNext: true,
            next: value
          };
        };
      }
      first2.lazy = lazy;
      (function(lazy2) {
        lazy2.single = true;
      })(lazy = first2.lazy || (first2.lazy = {}));
    })(first || (first = {}));
  }
});

// node_modules/remeda/dist/es/flatten.js
function flatten() {
  return purry(_flatten, arguments, flatten.lazy);
}
function _flatten(items) {
  return _reduceLazy(items, flatten.lazy());
}
var init_flatten = __esm({
  "node_modules/remeda/dist/es/flatten.js"() {
    init_reduceLazy();
    init_purry();
    (function(flatten2) {
      function lazy() {
        return function(next) {
          if (Array.isArray(next)) {
            return {
              done: false,
              hasNext: true,
              hasMany: true,
              next
            };
          }
          return {
            done: false,
            hasNext: true,
            next
          };
        };
      }
      flatten2.lazy = lazy;
    })(flatten || (flatten = {}));
  }
});

// node_modules/remeda/dist/es/flatMap.js
function flatMap() {
  return purry(_flatMap, arguments, flatMap.lazy);
}
function _flatMap(array, fn2) {
  return flatten(array.map(function(item) {
    return fn2(item);
  }));
}
var init_flatMap = __esm({
  "node_modules/remeda/dist/es/flatMap.js"() {
    init_flatten();
    init_purry();
    (function(flatMap2) {
      function lazy(fn2) {
        return function(value) {
          var next = fn2(value);
          if (Array.isArray(next)) {
            return {
              done: false,
              hasNext: true,
              hasMany: true,
              next
            };
          }
          return {
            done: false,
            hasNext: true,
            next
          };
        };
      }
      flatMap2.lazy = lazy;
    })(flatMap || (flatMap = {}));
  }
});

// node_modules/remeda/dist/es/flatMapToObj.js
function flatMapToObj() {
  return purry(_flatMapToObj(false), arguments);
}
var _flatMapToObj;
var init_flatMapToObj = __esm({
  "node_modules/remeda/dist/es/flatMapToObj.js"() {
    init_purry();
    _flatMapToObj = function(indexed) {
      return function(array, fn2) {
        return array.reduce(function(result, element, index) {
          var items = indexed ? fn2(element, index, array) : fn2(element);
          items.forEach(function(_a) {
            var key = _a[0], value = _a[1];
            result[key] = value;
          });
          return result;
        }, {});
      };
    };
    (function(flatMapToObj2) {
      function indexed() {
        return purry(_flatMapToObj(true), arguments);
      }
      flatMapToObj2.indexed = indexed;
    })(flatMapToObj || (flatMapToObj = {}));
  }
});

// node_modules/remeda/dist/es/flattenDeep.js
function flattenDeep() {
  return purry(_flattenDeep, arguments, flattenDeep.lazy);
}
function _flattenDeep(items) {
  return _reduceLazy(items, flattenDeep.lazy());
}
function _flattenDeepValue(value) {
  if (!Array.isArray(value)) {
    return value;
  }
  var ret = [];
  value.forEach(function(item) {
    if (Array.isArray(item)) {
      ret.push.apply(ret, flattenDeep(item));
    } else {
      ret.push(item);
    }
  });
  return ret;
}
var init_flattenDeep = __esm({
  "node_modules/remeda/dist/es/flattenDeep.js"() {
    init_reduceLazy();
    init_purry();
    (function(flattenDeep2) {
      function lazy() {
        return function(value) {
          var next = _flattenDeepValue(value);
          if (Array.isArray(next)) {
            return {
              done: false,
              hasNext: true,
              hasMany: true,
              next
            };
          }
          return {
            done: false,
            hasNext: true,
            next
          };
        };
      }
      flattenDeep2.lazy = lazy;
    })(flattenDeep || (flattenDeep = {}));
  }
});

// node_modules/remeda/dist/es/forEach.js
function forEach() {
  return purry(_forEach(false), arguments, forEach.lazy);
}
var _forEach, _lazy4;
var init_forEach = __esm({
  "node_modules/remeda/dist/es/forEach.js"() {
    init_purry();
    init_reduceLazy();
    init_toLazyIndexed();
    _forEach = function(indexed) {
      return function(array, fn2) {
        return _reduceLazy(array, indexed ? forEach.lazyIndexed(fn2) : forEach.lazy(fn2), indexed);
      };
    };
    _lazy4 = function(indexed) {
      return function(fn2) {
        return function(value, index, array) {
          if (indexed) {
            fn2(value, index, array);
          } else {
            fn2(value);
          }
          return {
            done: false,
            hasNext: true,
            next: value
          };
        };
      };
    };
    (function(forEach2) {
      function indexed() {
        return purry(_forEach(true), arguments, forEach2.lazyIndexed);
      }
      forEach2.indexed = indexed;
      forEach2.lazy = _lazy4(false);
      forEach2.lazyIndexed = _toLazyIndexed(_lazy4(true));
    })(forEach || (forEach = {}));
  }
});

// node_modules/remeda/dist/es/forEachObj.js
function forEachObj() {
  return purry(_forEachObj(false), arguments);
}
var _forEachObj;
var init_forEachObj = __esm({
  "node_modules/remeda/dist/es/forEachObj.js"() {
    init_purry();
    _forEachObj = function(indexed) {
      return function(object, fn2) {
        for (var key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            var val = object[key];
            if (indexed)
              fn2(val, key, object);
            else
              fn2(val);
          }
        }
        return object;
      };
    };
    (function(forEachObj2) {
      function indexed() {
        return purry(_forEachObj(true), arguments);
      }
      forEachObj2.indexed = indexed;
    })(forEachObj || (forEachObj = {}));
  }
});

// node_modules/remeda/dist/es/fromPairs.js
var init_fromPairs = __esm({
  "node_modules/remeda/dist/es/fromPairs.js"() {
  }
});

// node_modules/remeda/dist/es/groupBy.js
function groupBy() {
  return purry(_groupBy(false), arguments);
}
var _groupBy;
var init_groupBy = __esm({
  "node_modules/remeda/dist/es/groupBy.js"() {
    init_purry();
    _groupBy = function(indexed) {
      return function(array, fn2) {
        var ret = {};
        array.forEach(function(item, index) {
          var value = indexed ? fn2(item, index, array) : fn2(item);
          var key = String(value);
          if (!ret[key]) {
            ret[key] = [];
          }
          ret[key].push(item);
        });
        return ret;
      };
    };
    (function(groupBy2) {
      function indexed() {
        return purry(_groupBy(true), arguments);
      }
      groupBy2.indexed = indexed;
      function strict() {
        return purry(_groupBy(false), arguments);
      }
      groupBy2.strict = strict;
      (function(strict2) {
        function indexed2() {
          return purry(_groupBy(true), arguments);
        }
        strict2.indexed = indexed2;
      })(strict = groupBy2.strict || (groupBy2.strict = {}));
    })(groupBy || (groupBy = {}));
  }
});

// node_modules/remeda/dist/es/identity.js
var init_identity = __esm({
  "node_modules/remeda/dist/es/identity.js"() {
  }
});

// node_modules/remeda/dist/es/indexBy.js
function indexBy() {
  return purry(_indexBy(false), arguments);
}
var _indexBy;
var init_indexBy = __esm({
  "node_modules/remeda/dist/es/indexBy.js"() {
    init_purry();
    _indexBy = function(indexed) {
      return function(array, fn2) {
        return array.reduce(function(ret, item, index) {
          var value = indexed ? fn2(item, index, array) : fn2(item);
          var key = String(value);
          ret[key] = item;
          return ret;
        }, {});
      };
    };
    (function(indexBy2) {
      function indexed() {
        return purry(_indexBy(true), arguments);
      }
      indexBy2.indexed = indexed;
    })(indexBy || (indexBy = {}));
  }
});

// node_modules/remeda/dist/es/intersection.js
function intersection() {
  return purry(_intersection, arguments, intersection.lazy);
}
function _intersection(array, other) {
  var lazy = intersection.lazy(other);
  return _reduceLazy(array, lazy);
}
var init_intersection = __esm({
  "node_modules/remeda/dist/es/intersection.js"() {
    init_purry();
    init_reduceLazy();
    (function(intersection2) {
      function lazy(other) {
        return function(value) {
          var set = new Set(other);
          if (set.has(value)) {
            return {
              done: false,
              hasNext: true,
              next: value
            };
          }
          return {
            done: false,
            hasNext: false
          };
        };
      }
      intersection2.lazy = lazy;
    })(intersection || (intersection = {}));
  }
});

// node_modules/remeda/dist/es/isArray.js
var init_isArray = __esm({
  "node_modules/remeda/dist/es/isArray.js"() {
  }
});

// node_modules/remeda/dist/es/isBoolean.js
var init_isBoolean = __esm({
  "node_modules/remeda/dist/es/isBoolean.js"() {
  }
});

// node_modules/remeda/dist/es/isDate.js
var init_isDate = __esm({
  "node_modules/remeda/dist/es/isDate.js"() {
  }
});

// node_modules/remeda/dist/es/isDefined.js
var init_isDefined = __esm({
  "node_modules/remeda/dist/es/isDefined.js"() {
  }
});

// node_modules/remeda/dist/es/isError.js
var init_isError = __esm({
  "node_modules/remeda/dist/es/isError.js"() {
  }
});

// node_modules/remeda/dist/es/isFunction.js
var init_isFunction = __esm({
  "node_modules/remeda/dist/es/isFunction.js"() {
  }
});

// node_modules/remeda/dist/es/isNil.js
var init_isNil = __esm({
  "node_modules/remeda/dist/es/isNil.js"() {
  }
});

// node_modules/remeda/dist/es/isNot.js
var init_isNot = __esm({
  "node_modules/remeda/dist/es/isNot.js"() {
  }
});

// node_modules/remeda/dist/es/isNumber.js
var init_isNumber = __esm({
  "node_modules/remeda/dist/es/isNumber.js"() {
  }
});

// node_modules/remeda/dist/es/isObject.js
var init_isObject = __esm({
  "node_modules/remeda/dist/es/isObject.js"() {
  }
});

// node_modules/remeda/dist/es/isPromise.js
var init_isPromise = __esm({
  "node_modules/remeda/dist/es/isPromise.js"() {
  }
});

// node_modules/remeda/dist/es/isString.js
var init_isString = __esm({
  "node_modules/remeda/dist/es/isString.js"() {
  }
});

// node_modules/remeda/dist/es/keys.js
function keys(source) {
  return Object.keys(source);
}
var init_keys = __esm({
  "node_modules/remeda/dist/es/keys.js"() {
    (function(keys2) {
      function strict(source) {
        return keys2(source);
      }
      keys2.strict = strict;
    })(keys || (keys = {}));
  }
});

// node_modules/remeda/dist/es/last.js
var init_last = __esm({
  "node_modules/remeda/dist/es/last.js"() {
  }
});

// node_modules/remeda/dist/es/map.js
function map() {
  return purry(_map(false), arguments, map.lazy);
}
var _map, _lazy5;
var init_map = __esm({
  "node_modules/remeda/dist/es/map.js"() {
    init_purry();
    init_reduceLazy();
    init_toLazyIndexed();
    _map = function(indexed) {
      return function(array, fn2) {
        return _reduceLazy(array, indexed ? map.lazyIndexed(fn2) : map.lazy(fn2), indexed);
      };
    };
    _lazy5 = function(indexed) {
      return function(fn2) {
        return function(value, index, array) {
          return {
            done: false,
            hasNext: true,
            next: indexed ? fn2(value, index, array) : fn2(value)
          };
        };
      };
    };
    (function(map2) {
      function indexed() {
        return purry(_map(true), arguments, map2.lazyIndexed);
      }
      map2.indexed = indexed;
      map2.lazy = _lazy5(false);
      map2.lazyIndexed = _toLazyIndexed(_lazy5(true));
    })(map || (map = {}));
  }
});

// node_modules/remeda/dist/es/mapKeys.js
var init_mapKeys = __esm({
  "node_modules/remeda/dist/es/mapKeys.js"() {
  }
});

// node_modules/remeda/dist/es/mapToObj.js
function mapToObj() {
  return purry(_mapToObj(false), arguments);
}
var _mapToObj;
var init_mapToObj = __esm({
  "node_modules/remeda/dist/es/mapToObj.js"() {
    init_purry();
    _mapToObj = function(indexed) {
      return function(array, fn2) {
        return array.reduce(function(result, element, index) {
          var _a = indexed ? fn2(element, index, array) : fn2(element), key = _a[0], value = _a[1];
          result[key] = value;
          return result;
        }, {});
      };
    };
    (function(mapToObj2) {
      function indexed() {
        return purry(_mapToObj(true), arguments);
      }
      mapToObj2.indexed = indexed;
    })(mapToObj || (mapToObj = {}));
  }
});

// node_modules/remeda/dist/es/mapValues.js
var init_mapValues = __esm({
  "node_modules/remeda/dist/es/mapValues.js"() {
  }
});

// node_modules/remeda/dist/es/maxBy.js
function maxBy() {
  return purry(_maxBy(false), arguments);
}
var _maxBy;
var init_maxBy = __esm({
  "node_modules/remeda/dist/es/maxBy.js"() {
    init_purry();
    _maxBy = function(indexed) {
      return function(array, fn2) {
        var ret = void 0;
        var retMax = void 0;
        array.forEach(function(item, i2) {
          var max = indexed ? fn2(item, i2, array) : fn2(item);
          if (retMax === void 0 || max > retMax) {
            ret = item;
            retMax = max;
          }
        });
        return ret;
      };
    };
    (function(maxBy2) {
      function indexed() {
        return purry(_maxBy(true), arguments);
      }
      maxBy2.indexed = indexed;
    })(maxBy || (maxBy = {}));
  }
});

// node_modules/remeda/dist/es/meanBy.js
function meanBy() {
  return purry(_meanBy(false), arguments);
}
var _meanBy;
var init_meanBy = __esm({
  "node_modules/remeda/dist/es/meanBy.js"() {
    init_purry();
    _meanBy = function(indexed) {
      return function(array, fn2) {
        if (array.length === 0) {
          return NaN;
        }
        var sum = 0;
        array.forEach(function(item, i2) {
          sum += indexed ? fn2(item, i2, array) : fn2(item);
        });
        return sum / array.length;
      };
    };
    (function(meanBy2) {
      function indexed() {
        return purry(_meanBy(true), arguments);
      }
      meanBy2.indexed = indexed;
    })(meanBy || (meanBy = {}));
  }
});

// node_modules/remeda/dist/es/merge.js
var init_merge = __esm({
  "node_modules/remeda/dist/es/merge.js"() {
  }
});

// node_modules/remeda/dist/es/mergeAll.js
var init_mergeAll = __esm({
  "node_modules/remeda/dist/es/mergeAll.js"() {
  }
});

// node_modules/remeda/dist/es/minBy.js
function minBy() {
  return purry(_minBy(false), arguments);
}
var _minBy;
var init_minBy = __esm({
  "node_modules/remeda/dist/es/minBy.js"() {
    init_purry();
    _minBy = function(indexed) {
      return function(array, fn2) {
        var ret = void 0;
        var retMin = void 0;
        array.forEach(function(item, i2) {
          var min = indexed ? fn2(item, i2, array) : fn2(item);
          if (retMin === void 0 || min < retMin) {
            ret = item;
            retMin = min;
          }
        });
        return ret;
      };
    };
    (function(minBy2) {
      function indexed() {
        return purry(_minBy(true), arguments);
      }
      minBy2.indexed = indexed;
    })(minBy || (minBy = {}));
  }
});

// node_modules/remeda/dist/es/noop.js
var init_noop = __esm({
  "node_modules/remeda/dist/es/noop.js"() {
  }
});

// node_modules/remeda/dist/es/objOf.js
var init_objOf = __esm({
  "node_modules/remeda/dist/es/objOf.js"() {
  }
});

// node_modules/remeda/dist/es/omit.js
function omit() {
  return purry(_omit, arguments);
}
function _omit(object, names) {
  var set = new Set(names);
  return Object.entries(object).reduce(function(acc, _a) {
    var name = _a[0], value = _a[1];
    if (!set.has(name)) {
      acc[name] = value;
    }
    return acc;
  }, {});
}
var init_omit = __esm({
  "node_modules/remeda/dist/es/omit.js"() {
    init_purry();
  }
});

// node_modules/remeda/dist/es/omitBy.js
function omitBy() {
  return purry(_omitBy, arguments);
}
function _omitBy(object, fn2) {
  return Object.keys(object).reduce(function(acc, key) {
    if (!fn2(object[key], key)) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
}
var init_omitBy = __esm({
  "node_modules/remeda/dist/es/omitBy.js"() {
    init_purry();
  }
});

// node_modules/remeda/dist/es/once.js
var init_once = __esm({
  "node_modules/remeda/dist/es/once.js"() {
  }
});

// node_modules/remeda/dist/es/partition.js
function partition() {
  return purry(_partition(false), arguments);
}
var _partition;
var init_partition = __esm({
  "node_modules/remeda/dist/es/partition.js"() {
    init_purry();
    _partition = function(indexed) {
      return function(array, fn2) {
        var ret = [[], []];
        array.forEach(function(item, index) {
          var matches = indexed ? fn2(item, index, array) : fn2(item);
          ret[matches ? 0 : 1].push(item);
        });
        return ret;
      };
    };
    (function(partition2) {
      function indexed() {
        return purry(_partition(true), arguments);
      }
      partition2.indexed = indexed;
    })(partition || (partition = {}));
  }
});

// node_modules/remeda/dist/es/pathOr.js
var init_pathOr = __esm({
  "node_modules/remeda/dist/es/pathOr.js"() {
  }
});

// node_modules/remeda/dist/es/pick.js
var init_pick = __esm({
  "node_modules/remeda/dist/es/pick.js"() {
  }
});

// node_modules/remeda/dist/es/pickBy.js
var init_pickBy = __esm({
  "node_modules/remeda/dist/es/pickBy.js"() {
  }
});

// node_modules/remeda/dist/es/prop.js
var init_prop = __esm({
  "node_modules/remeda/dist/es/prop.js"() {
  }
});

// node_modules/remeda/dist/es/range.js
var init_range = __esm({
  "node_modules/remeda/dist/es/range.js"() {
  }
});

// node_modules/remeda/dist/es/randomString.js
var init_randomString = __esm({
  "node_modules/remeda/dist/es/randomString.js"() {
  }
});

// node_modules/remeda/dist/es/reduce.js
function reduce() {
  return purry(_reduce(false), arguments);
}
var _reduce;
var init_reduce = __esm({
  "node_modules/remeda/dist/es/reduce.js"() {
    init_purry();
    _reduce = function(indexed) {
      return function(items, fn2, initialValue) {
        return items.reduce(function(acc, item, index) {
          return indexed ? fn2(acc, item, index, items) : fn2(acc, item);
        }, initialValue);
      };
    };
    (function(reduce2) {
      function indexed() {
        return purry(_reduce(true), arguments);
      }
      reduce2.indexed = indexed;
    })(reduce || (reduce = {}));
  }
});

// node_modules/remeda/dist/es/reject.js
function reject() {
  return purry(_reject(false), arguments, reject.lazy);
}
var _reject, _lazy6;
var init_reject = __esm({
  "node_modules/remeda/dist/es/reject.js"() {
    init_purry();
    init_reduceLazy();
    init_toLazyIndexed();
    _reject = function(indexed) {
      return function(array, fn2) {
        return _reduceLazy(array, indexed ? reject.lazyIndexed(fn2) : reject.lazy(fn2), indexed);
      };
    };
    _lazy6 = function(indexed) {
      return function(fn2) {
        return function(value, index, array) {
          var valid = indexed ? fn2(value, index, array) : fn2(value);
          if (!valid) {
            return {
              done: false,
              hasNext: true,
              next: value
            };
          }
          return {
            done: false,
            hasNext: false
          };
        };
      };
    };
    (function(reject2) {
      function indexed() {
        return purry(_reject(true), arguments, reject2.lazyIndexed);
      }
      reject2.indexed = indexed;
      reject2.lazy = _lazy6(false);
      reject2.lazyIndexed = _toLazyIndexed(_lazy6(true));
    })(reject || (reject = {}));
  }
});

// node_modules/remeda/dist/es/reverse.js
var init_reverse = __esm({
  "node_modules/remeda/dist/es/reverse.js"() {
  }
});

// node_modules/remeda/dist/es/set.js
var init_set = __esm({
  "node_modules/remeda/dist/es/set.js"() {
  }
});

// node_modules/remeda/dist/es/sort.js
var init_sort = __esm({
  "node_modules/remeda/dist/es/sort.js"() {
  }
});

// node_modules/remeda/dist/es/sortBy.js
var init_sortBy = __esm({
  "node_modules/remeda/dist/es/sortBy.js"() {
  }
});

// node_modules/remeda/dist/es/splitAt.js
var init_splitAt = __esm({
  "node_modules/remeda/dist/es/splitAt.js"() {
  }
});

// node_modules/remeda/dist/es/splitWhen.js
var init_splitWhen = __esm({
  "node_modules/remeda/dist/es/splitWhen.js"() {
  }
});

// node_modules/remeda/dist/es/sumBy.js
function sumBy() {
  return purry(_sumBy(false), arguments);
}
var _sumBy;
var init_sumBy = __esm({
  "node_modules/remeda/dist/es/sumBy.js"() {
    init_purry();
    _sumBy = function(indexed) {
      return function(array, fn2) {
        var sum = 0;
        array.forEach(function(item, i2) {
          var summand = indexed ? fn2(item, i2, array) : fn2(item);
          sum += summand;
        });
        return sum;
      };
    };
    (function(sumBy2) {
      function indexed() {
        return purry(_sumBy(true), arguments);
      }
      sumBy2.indexed = indexed;
    })(sumBy || (sumBy = {}));
  }
});

// node_modules/remeda/dist/es/take.js
function take() {
  return purry(_take, arguments, take.lazy);
}
function _take(array, n2) {
  return _reduceLazy(array, take.lazy(n2));
}
var init_take = __esm({
  "node_modules/remeda/dist/es/take.js"() {
    init_purry();
    init_reduceLazy();
    (function(take2) {
      function lazy(n2) {
        return function(value) {
          if (n2 === 0) {
            return {
              done: true,
              hasNext: false
            };
          }
          n2--;
          if (n2 === 0) {
            return {
              done: true,
              hasNext: true,
              next: value
            };
          }
          return {
            done: false,
            hasNext: true,
            next: value
          };
        };
      }
      take2.lazy = lazy;
    })(take || (take = {}));
  }
});

// node_modules/remeda/dist/es/takeWhile.js
var init_takeWhile = __esm({
  "node_modules/remeda/dist/es/takeWhile.js"() {
  }
});

// node_modules/remeda/dist/es/times.js
var init_times = __esm({
  "node_modules/remeda/dist/es/times.js"() {
  }
});

// node_modules/remeda/dist/es/toPairs.js
function toPairs(object) {
  return Object.entries(object);
}
var init_toPairs = __esm({
  "node_modules/remeda/dist/es/toPairs.js"() {
    (function(toPairs2) {
      function strict(object) {
        return Object.entries(object);
      }
      toPairs2.strict = strict;
    })(toPairs || (toPairs = {}));
  }
});

// node_modules/remeda/dist/es/uniq.js
function uniq() {
  return purry(_uniq, arguments, uniq.lazy);
}
function _uniq(array) {
  return _reduceLazy(array, uniq.lazy());
}
var init_uniq = __esm({
  "node_modules/remeda/dist/es/uniq.js"() {
    init_purry();
    init_reduceLazy();
    (function(uniq2) {
      function lazy() {
        var set = /* @__PURE__ */ new Set();
        return function(value) {
          if (set.has(value)) {
            return {
              done: false,
              hasNext: false
            };
          }
          set.add(value);
          return {
            done: false,
            hasNext: true,
            next: value
          };
        };
      }
      uniq2.lazy = lazy;
    })(uniq || (uniq = {}));
  }
});

// node_modules/remeda/dist/es/uniqBy.js
var init_uniqBy = __esm({
  "node_modules/remeda/dist/es/uniqBy.js"() {
  }
});

// node_modules/remeda/dist/es/uniqWith.js
function uniqWith() {
  return purry(_uniqWith, arguments, uniqWith.lazy);
}
function _uniqWith(array, isEquals) {
  var lazy = uniqWith.lazy(isEquals);
  return _reduceLazy(array, lazy, true);
}
function _lazy7(isEquals) {
  return function(value, index, array) {
    if (array && array.findIndex(function(otherValue) {
      return isEquals(value, otherValue);
    }) === index) {
      return {
        done: false,
        hasNext: true,
        next: value
      };
    }
    return {
      done: false,
      hasNext: false
    };
  };
}
var init_uniqWith = __esm({
  "node_modules/remeda/dist/es/uniqWith.js"() {
    init_purry();
    init_reduceLazy();
    init_toLazyIndexed();
    (function(uniqWith2) {
      uniqWith2.lazy = _toLazyIndexed(_lazy7);
    })(uniqWith || (uniqWith = {}));
  }
});

// node_modules/remeda/dist/es/values.js
var init_values = __esm({
  "node_modules/remeda/dist/es/values.js"() {
  }
});

// node_modules/remeda/dist/es/zip.js
var init_zip = __esm({
  "node_modules/remeda/dist/es/zip.js"() {
  }
});

// node_modules/remeda/dist/es/zipWith.js
var init_zipWith = __esm({
  "node_modules/remeda/dist/es/zipWith.js"() {
  }
});

// node_modules/remeda/dist/es/index.js
var init_es = __esm({
  "node_modules/remeda/dist/es/index.js"() {
    init_addProp();
    init_allPass();
    init_anyPass();
    init_chunk();
    init_clamp();
    init_clone();
    init_compact();
    init_concat();
    init_countBy();
    init_createPipe();
    init_difference();
    init_differenceWith();
    init_drop();
    init_dropLast();
    init_equals();
    init_filter();
    init_find();
    init_findIndex();
    init_findLast();
    init_findLastIndex();
    init_first();
    init_flatMap();
    init_flatMapToObj();
    init_flatten();
    init_flattenDeep();
    init_forEach();
    init_forEachObj();
    init_fromPairs();
    init_groupBy();
    init_identity();
    init_indexBy();
    init_intersection();
    init_isArray();
    init_isBoolean();
    init_isDate();
    init_isDefined();
    init_isError();
    init_isFunction();
    init_isNil();
    init_isNot();
    init_isNumber();
    init_isObject();
    init_isPromise();
    init_isString();
    init_isTruthy();
    init_keys();
    init_last();
    init_map();
    init_mapKeys();
    init_mapToObj();
    init_mapValues();
    init_maxBy();
    init_meanBy();
    init_merge();
    init_mergeAll();
    init_minBy();
    init_noop();
    init_objOf();
    init_omit();
    init_omitBy();
    init_once();
    init_partition();
    init_pathOr();
    init_pick();
    init_pickBy();
    init_pipe();
    init_prop();
    init_purry();
    init_randomString();
    init_range();
    init_reduce();
    init_reject();
    init_reverse();
    init_set();
    init_sort();
    init_sortBy();
    init_splitAt();
    init_splitWhen();
    init_sumBy();
    init_take();
    init_takeWhile();
    init_times();
    init_toPairs();
    init_type();
    init_uniq();
    init_uniqBy();
    init_uniqWith();
    init_values();
    init_zip();
    init_zipWith();
  }
});

// node_modules/lodash.get/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.get/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var INFINITY = 1 / 0;
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var symbolTag = "[object Symbol]";
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var reLeadingDot = /^\./;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reEscapeChar = /\\(\\)?/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Symbol2 = root.Symbol;
    var splice = arrayProto.splice;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGet(object, path) {
      path = isKey(path, object) ? [path] : castPath(path);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castPath(value) {
      return isArray2(value) ? value : stringToPath(value);
    }
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKey(value, object) {
      if (isArray2(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var stringToPath = memoize(function(string) {
      string = toString(string);
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, string2) {
        result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArray2 = Array.isArray;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});

// node_modules/tiny-invariant/dist/esm/tiny-invariant.js
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}
var isProduction, prefix;
var init_tiny_invariant = __esm({
  "node_modules/tiny-invariant/dist/esm/tiny-invariant.js"() {
    isProduction = false;
    prefix = "Invariant failed";
  }
});

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl, createStore;
var init_vanilla = __esm({
  "node_modules/zustand/esm/vanilla.mjs"() {
    createStoreImpl = (createState) => {
      let state;
      const listeners = /* @__PURE__ */ new Set();
      const setState = (partial, replace2) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
          const previousState = state;
          state = (replace2 != null ? replace2 : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
          listeners.forEach((listener) => listener(state, previousState));
        }
      };
      const getState = () => state;
      const subscribe = (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      };
      const destroy = () => {
        if ((import.meta.env && import.meta.env.MODE) !== "production") {
          console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          );
        }
        listeners.clear();
      };
      const api = { setState, getState, subscribe, destroy };
      state = createState(setState, getState, api);
      return api;
    };
    createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = require_react();
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x2, y2) {
          return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState2 = React.useState, useEffect6 = React.useEffect, useLayoutEffect2 = React.useLayoutEffect, useDebugValue2 = React.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState2({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect6(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React.useSyncExternalStore !== void 0 ? React.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = require_react();
        var shim = require_shim();
        function is(x2, y2) {
          return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef6 = React.useRef, useEffect6 = React.useEffect, useMemo6 = React.useMemo, useDebugValue2 = React.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef6(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo6(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect6(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/zustand/esm/index.mjs
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0, import_react.useDebugValue)(slice);
  return slice;
}
var import_react, import_with_selector, useSyncExternalStoreWithSelector, createImpl, create;
var init_esm3 = __esm({
  "node_modules/zustand/esm/index.mjs"() {
    init_vanilla();
    init_vanilla();
    import_react = __toESM(require_react(), 1);
    import_with_selector = __toESM(require_with_selector(), 1);
    ({ useSyncExternalStoreWithSelector } = import_with_selector.default);
    createImpl = (createState) => {
      if ((import.meta.env && import.meta.env.MODE) !== "production" && typeof createState !== "function") {
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      }
      const api = typeof createState === "function" ? createStore(createState) : createState;
      const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
      Object.assign(useBoundStore, api);
      return useBoundStore;
    };
    create = (createState) => createState ? createImpl(createState) : createImpl;
  }
});

// node_modules/immer/dist/immer.esm.mjs
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
    t2[e - 1] = arguments[e];
  if (true) {
    var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && "symbol" == typeof e || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  2 === e ? n2.set(r2, t2) : 3 === e ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return void 0 === e && (e = false), y(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function _() {
  return U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.O = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e.h.g || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (O(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), O(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u2 = o2, a2 = false;
    3 === e.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2, v2) {
  if (c2 === o2 && n(5), r(c2)) {
    var p2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2))
      return;
    e.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e.h.D && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function R(e) {
  return r(e) || n(22, e), function n2(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = D(r2, c2), u2.I = false;
    } else
      e2 = D(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
    }), 3 === c2 ? new Set(e2) : e2;
  }(e);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G, U, W, X, q, B, H, L, Q, Y, Z, nn, rn, tn, en, on, un, an, fn, cn, sn, vn, pn, ln, dn;
var init_immer_esm = __esm({
  "node_modules/immer/dist/immer.esm.mjs"() {
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
    X = "undefined" != typeof Map;
    q = "undefined" != typeof Set;
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
    Q = W ? Symbol.for("immer-state") : "__$immer_state";
    Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
    }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
      return "Cannot apply patch, path doesn't resolve: " + n2;
    }, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
      return "Unsupported patch operation: " + n2;
    }, 18: function(n2) {
      return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
    }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
      return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
    }, 22: function(n2) {
      return "'current' expects a draft, got: " + n2;
    }, 23: function(n2) {
      return "'original' expects a draft, got: " + n2;
    }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
    Z = "" + Object.prototype.constructor;
    nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
      return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
    } : Object.getOwnPropertyNames;
    rn = Object.getOwnPropertyDescriptors || function(n2) {
      var r2 = {};
      return nn(n2).forEach(function(t2) {
        r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
      }), r2;
    };
    tn = {};
    en = { get: function(n2, r2) {
      if (r2 === Q)
        return n2;
      var e = p(n2);
      if (!u(e, r2))
        return function(n3, r3, t2) {
          var e2, i3 = I(r3, t2);
          return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
        }(n2, e, r2);
      var i2 = e[r2];
      return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
    }, has: function(n2, r2) {
      return r2 in p(n2);
    }, ownKeys: function(n2) {
      return Reflect.ownKeys(p(n2));
    }, set: function(n2, r2, t2) {
      var e = I(p(n2), r2);
      if (null == e ? void 0 : e.set)
        return e.set.call(n2.k, t2), true;
      if (!n2.P) {
        var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
        if (o2 && o2.t === t2)
          return n2.o[r2] = t2, n2.R[r2] = false, true;
        if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
          return true;
        E(n2), k(n2);
      }
      return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
    }, deleteProperty: function(n2, r2) {
      return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
    }, getOwnPropertyDescriptor: function(n2, r2) {
      var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
      return e ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e.enumerable, value: t2[r2] } : e;
    }, defineProperty: function() {
      n(11);
    }, getPrototypeOf: function(n2) {
      return Object.getPrototypeOf(n2.t);
    }, setPrototypeOf: function() {
      n(12);
    } };
    on = {};
    i(en, function(n2, r2) {
      on[n2] = function() {
        return arguments[0] = arguments[0][0], r2.apply(this, arguments);
      };
    }), on.deleteProperty = function(r2, t2) {
      return isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
    }, on.set = function(r2, t2, e) {
      return "length" !== t2 && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
    };
    un = function() {
      function e(r2) {
        var e2 = this;
        this.g = B, this.D = true, this.produce = function(r3, i3, o2) {
          if ("function" == typeof r3 && "function" != typeof i3) {
            var u2 = i3;
            i3 = r3;
            var a2 = e2;
            return function(n2) {
              var r4 = this;
              void 0 === n2 && (n2 = u2);
              for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
                e3[o3 - 1] = arguments[o3];
              return a2.produce(n2, function(n3) {
                var t3;
                return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
              });
            };
          }
          var f2;
          if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
            var c2 = w(e2), s2 = N(e2, r3, void 0), v2 = true;
            try {
              f2 = i3(s2), v2 = false;
            } finally {
              v2 ? O(c2) : g(c2);
            }
            return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
              return j(c2, o2), P(n2, c2);
            }, function(n2) {
              throw O(c2), n2;
            }) : (j(c2, o2), P(f2, c2));
          }
          if (!r3 || "object" != typeof r3) {
            if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e2.D && d(f2, true), o2) {
              var p2 = [], l2 = [];
              b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
            }
            return f2;
          }
          n(21, r3);
        }, this.produceWithPatches = function(n2, r3) {
          if ("function" == typeof n2)
            return function(r4) {
              for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
                i4[o3 - 1] = arguments[o3];
              return e2.produceWithPatches(r4, function(r5) {
                return n2.apply(void 0, [r5].concat(i4));
              });
            };
          var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
            t2 = n3, i3 = r4;
          });
          return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
            return [n3, t2, i3];
          }) : [o2, t2, i3];
        }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
      }
      var i2 = e.prototype;
      return i2.createDraft = function(e2) {
        t(e2) || n(8), r(e2) && (e2 = R(e2));
        var i3 = w(this), o2 = N(this, e2, void 0);
        return o2[Q].C = true, g(i3), o2;
      }, i2.finishDraft = function(r2, t2) {
        var e2 = r2 && r2[Q];
        e2 && e2.C || n(9), e2.I && n(10);
        var i3 = e2.A;
        return j(i3, t2), P(void 0, i3);
      }, i2.setAutoFreeze = function(n2) {
        this.D = n2;
      }, i2.setUseProxies = function(r2) {
        r2 && !B && n(20), this.g = r2;
      }, i2.applyPatches = function(n2, t2) {
        var e2;
        for (e2 = t2.length - 1; e2 >= 0; e2--) {
          var i3 = t2[e2];
          if (0 === i3.path.length && "replace" === i3.op) {
            n2 = i3.value;
            break;
          }
        }
        e2 > -1 && (t2 = t2.slice(e2 + 1));
        var o2 = b("Patches").$;
        return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
          return o2(n3, t2);
        });
      }, e;
    }();
    an = new un();
    fn = an.produce;
    cn = an.produceWithPatches.bind(an);
    sn = an.setAutoFreeze.bind(an);
    vn = an.setUseProxies.bind(an);
    pn = an.applyPatches.bind(an);
    ln = an.createDraft.bind(an);
    dn = an.finishDraft.bind(an);
  }
});

// node_modules/zustand/esm/middleware/immer.mjs
var immerImpl, immer;
var init_immer = __esm({
  "node_modules/zustand/esm/middleware/immer.mjs"() {
    init_immer_esm();
    immerImpl = (initializer) => (set, get2, store) => {
      store.setState = (updater, replace2, ...a2) => {
        const nextState = typeof updater === "function" ? fn(updater) : updater;
        return set(nextState, replace2, ...a2);
      };
      return initializer(store.setState, get2, store);
    };
    immer = immerImpl;
  }
});

// node_modules/remix-validated-form/node_modules/nanoid/url-alphabet/index.js
var init_url_alphabet = __esm({
  "node_modules/remix-validated-form/node_modules/nanoid/url-alphabet/index.js"() {
  }
});

// node_modules/remix-validated-form/node_modules/nanoid/index.browser.js
var nanoid;
var init_index_browser = __esm({
  "node_modules/remix-validated-form/node_modules/nanoid/index.browser.js"() {
    init_url_alphabet();
    nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
      byte &= 63;
      if (byte < 36) {
        id += byte.toString(36);
      } else if (byte < 62) {
        id += (byte - 26).toString(36).toUpperCase();
      } else if (byte > 62) {
        id += "-";
      } else {
        id += "_";
      }
      return id;
    }, "");
  }
});

// node_modules/remix-validated-form/dist/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  FieldArray: () => FieldArray,
  ValidatedForm: () => ValidatedForm,
  createValidator: () => createValidator,
  setFormDefaults: () => setFormDefaults,
  useControlField: () => useControlField,
  useField: () => useField,
  useFieldArray: () => useFieldArray,
  useFormContext: () => useFormContext,
  useIsSubmitting: () => useIsSubmitting,
  useIsValid: () => useIsValid,
  useUpdateControlledField: () => useUpdateControlledField,
  validationError: () => validationError
});
function setPath(object, path, defaultValue) {
  return _setPathNormalized(object, stringToPathArray(path), defaultValue);
}
function _setPathNormalized(object, path, value) {
  var _a;
  const leadingSegments = path.slice(0, -1);
  const lastSegment = path[path.length - 1];
  let obj = object;
  for (let i2 = 0; i2 < leadingSegments.length; i2++) {
    const segment = leadingSegments[i2];
    if (obj[segment] === void 0) {
      const nextSegment = (_a = leadingSegments[i2 + 1]) != null ? _a : lastSegment;
      obj[segment] = typeof nextSegment === "number" ? [] : {};
    }
    obj = obj[segment];
  }
  obj[lastSegment] = value;
  return object;
}
function validateSubmitter(element, submitter) {
  const isHtmlElement = submitter instanceof HTMLElement;
  if (!isHtmlElement) {
    raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
  }
  const hasSubmitType = "type" in submitter && submitter.type === "submit";
  if (!hasSubmitType)
    raise(TypeError, "The specified element is not a submit button");
  const isForCorrectForm = "form" in submitter && submitter.form === element;
  if (!isForCorrectForm)
    raise(
      DOMException,
      "The specified element is not owned by this form element",
      "NotFoundError"
    );
}
function raise(errorConstructor, message, name) {
  throw new errorConstructor(
    "Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".",
    name
  );
}
function sparseSplice(array, start, deleteCount, item) {
  if (array.length < start && item) {
    array.length = start;
  }
  if (arguments.length === 4)
    return array.splice(start, deleteCount, item);
  else if (arguments.length === 3)
    return array.splice(start, deleteCount);
  return array.splice(start);
}
function useErrorResponseForForm({
  fetcher,
  subaction,
  formId
}) {
  var _a;
  const actionData = useActionData();
  if (fetcher) {
    if ((_a = fetcher.data) == null ? void 0 : _a.fieldErrors)
      return fetcher.data;
    return null;
  }
  if (!(actionData == null ? void 0 : actionData.fieldErrors))
    return null;
  if (typeof formId === "string" && actionData.formId)
    return actionData.formId === formId ? actionData : null;
  if (!subaction && !actionData.subaction || actionData.subaction === subaction)
    return actionData;
  return null;
}
function validationError(error, repopulateFields, init) {
  return json(
    {
      fieldErrors: error.fieldErrors,
      subaction: error.subaction,
      repopulateFields,
      formId: error.formId
    },
    { status: 422, ...init }
  );
}
function useSubmitComplete(isSubmitting, callback) {
  const isPending = (0, import_react10.useRef)(false);
  (0, import_react10.useEffect)(() => {
    if (isSubmitting) {
      isPending.current = true;
    }
    if (!isSubmitting && isPending.current) {
      isPending.current = false;
      callback();
    }
  });
}
function nonNull(value) {
  return value !== null;
}
function formEventProxy(event) {
  let defaultPrevented = false;
  return new Proxy(event, {
    get: (target, prop) => {
      if (prop === "preventDefault") {
        return () => {
          defaultPrevented = true;
        };
      }
      if (prop === "defaultPrevented") {
        return defaultPrevented;
      }
      return target[prop];
    }
  });
}
function ValidatedForm({
  validator,
  onSubmit,
  children,
  fetcher,
  action,
  defaultValues: unMemoizedDefaults,
  formRef: formRefProp,
  onReset,
  subaction,
  resetAfterSubmit = false,
  disableFocusOnError,
  method,
  replace: replace2,
  id,
  preventScrollReset,
  relative,
  encType,
  ...rest
}) {
  var _a;
  const formId = useFormId(id);
  const providedDefaultValues = useDeepEqualsMemo(unMemoizedDefaults);
  const contextValue = (0, import_react8.useMemo)(
    () => ({
      formId,
      action,
      subaction,
      defaultValuesProp: providedDefaultValues,
      fetcher
    }),
    [action, fetcher, formId, providedDefaultValues, subaction]
  );
  const backendError = useErrorResponseForForm(contextValue);
  const backendDefaultValues = useDefaultValuesFromLoader(contextValue);
  const hasActiveSubmission = useHasActiveFormSubmit(contextValue);
  const formRef = (0, import_react8.useRef)(null);
  const Form2 = (_a = fetcher == null ? void 0 : fetcher.Form) != null ? _a : Form;
  const submit = useSubmit();
  const setFieldErrors = useSetFieldErrors(formId);
  const setFieldError = useFormStore(formId, (state) => state.setFieldError);
  const reset = useFormStore(formId, (state) => state.reset);
  const startSubmit = useFormStore(formId, (state) => state.startSubmit);
  const endSubmit = useFormStore(formId, (state) => state.endSubmit);
  const syncFormProps = useFormStore(formId, (state) => state.syncFormProps);
  const setFormElementInState = useFormStore(
    formId,
    (state) => state.setFormElement
  );
  const cleanupForm = useRootFormStore((state) => state.cleanupForm);
  const registerForm = useRootFormStore((state) => state.registerForm);
  const customFocusHandlers = useMultiValueMap();
  const registerReceiveFocus = (0, import_react8.useCallback)(
    (fieldName, handler) => {
      customFocusHandlers().add(fieldName, handler);
      return () => {
        customFocusHandlers().remove(fieldName, handler);
      };
    },
    [customFocusHandlers]
  );
  useIsomorphicLayoutEffect(() => {
    registerForm(formId);
    return () => cleanupForm(formId);
  }, [cleanupForm, formId, registerForm]);
  useIsomorphicLayoutEffect(() => {
    var _a2;
    syncFormProps({
      action,
      defaultValues: (_a2 = providedDefaultValues != null ? providedDefaultValues : backendDefaultValues) != null ? _a2 : {},
      subaction,
      registerReceiveFocus,
      validator
    });
  }, [
    action,
    providedDefaultValues,
    registerReceiveFocus,
    subaction,
    syncFormProps,
    backendDefaultValues,
    validator
  ]);
  useIsomorphicLayoutEffect(() => {
    setFormElementInState(formRef.current);
  }, [setFormElementInState]);
  (0, import_react8.useEffect)(() => {
    var _a2;
    setFieldErrors((_a2 = backendError == null ? void 0 : backendError.fieldErrors) != null ? _a2 : {});
    if (!disableFocusOnError && (backendError == null ? void 0 : backendError.fieldErrors)) {
      focusFirstInvalidInput(
        backendError.fieldErrors,
        customFocusHandlers(),
        formRef.current
      );
    }
  }, [
    backendError == null ? void 0 : backendError.fieldErrors,
    customFocusHandlers,
    disableFocusOnError,
    setFieldErrors,
    setFieldError
  ]);
  useSubmitComplete(hasActiveSubmission, () => {
    endSubmit();
  });
  const handleSubmit = async (e, target, nativeEvent) => {
    startSubmit();
    const submitter = nativeEvent.submitter;
    const formMethod = (submitter == null ? void 0 : submitter.formMethod) || method;
    const formData = getDataFromForm(target);
    if (submitter == null ? void 0 : submitter.name) {
      formData.append(submitter.name, submitter.value);
    }
    const result = await validator.validate(formData);
    if (result.error) {
      setFieldErrors(result.error.fieldErrors);
      endSubmit();
      if (!disableFocusOnError) {
        focusFirstInvalidInput(
          result.error.fieldErrors,
          customFocusHandlers(),
          formRef.current
        );
      }
    } else {
      setFieldErrors({});
      const eventProxy = formEventProxy(e);
      await (onSubmit == null ? void 0 : onSubmit(result.data, eventProxy));
      if (eventProxy.defaultPrevented) {
        endSubmit();
        return;
      }
      const opts = {
        method: formMethod,
        replace: replace2,
        preventScrollReset,
        relative,
        action,
        encType
      };
      if (fetcher)
        fetcher.submit(formData, opts);
      else
        submit(formData, opts);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Form2,
    {
      ref: mergeRefs([formRef, formRefProp]),
      ...rest,
      id,
      action,
      method,
      encType,
      replace: replace2,
      preventScrollReset,
      relative,
      onSubmit: (e) => {
        e.preventDefault();
        handleSubmit(
          e,
          e.currentTarget,
          e.nativeEvent
        );
      },
      onReset: (event) => {
        onReset == null ? void 0 : onReset(event);
        if (event.defaultPrevented)
          return;
        reset();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InternalFormContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormResetter, { formRef, resetAfterSubmit }),
        subaction && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "hidden", value: subaction, name: "subaction" }),
        id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "hidden", value: id, name: FORM_ID_FIELD }),
        children
      ] }) })
    }
  );
}
function createValidator(validator) {
  return {
    validate: async (value) => {
      const data = preprocessFormData(value);
      const result = await validator.validate(omitInternalFields(data));
      if (result.error) {
        return {
          data: void 0,
          error: {
            fieldErrors: result.error,
            subaction: data.subaction,
            formId: data[FORM_ID_FIELD]
          },
          submittedData: data,
          formId: data[FORM_ID_FIELD]
        };
      }
      return {
        data: result.data,
        error: void 0,
        submittedData: data,
        formId: data[FORM_ID_FIELD]
      };
    },
    validateField: (data, field) => validator.validateField(preprocessFormData(data), field)
  };
}
function useFieldArray(name, { formId, validationBehavior } = {}) {
  const context = useInternalFormContext(formId, "FieldArray");
  return useInternalFieldArray(context, name, validationBehavior);
}
function FieldArray({
  name,
  children,
  formId,
  validationBehavior
}) {
  const context = useInternalFormContext(formId, "FieldArray");
  const [value, helpers, error] = useInternalFieldArray(
    context,
    name,
    validationBehavior
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: children(value, helpers, error) });
}
var import_react2, import_react4, import_lodash, import_react5, import_react6, import_react8, import_react9, import_react10, import_react11, import_jsx_runtime, import_react12, import_react13, import_react14, import_react15, import_jsx_runtime2, getCheckboxChecked, getRadioChecked, defaultValidationBehavior, createGetInputProps, stringToPathArray, getPath, FORM_ID_FIELD, FORM_DEFAULTS_FIELD, formDefaultValuesKey, InternalFormContext, serverData, hydratedData, from, hydratable, requestSubmit, getArray, swap, move, insert, insertEmpty, remove, replace, mutateAsArray, getDeepArrayPaths, noOp, defaultFormState, createFormState, useRootFormStore, useFormStore, useInternalFormContext, useFieldErrorsForForm, useDefaultValuesFromLoader, useDefaultValuesForForm, useHasActiveFormSubmit, useFieldTouched, useFieldError, useClearError, useCurrentDefaultValueForField, useFieldDefaultValue, useInternalIsSubmitting, useInternalIsValid, useInternalHasBeenSubmitted, useSmartValidate, useValidate, noOpReceiver, useRegisterReceiveFocus, defaultDefaultValues, useSyncedDefaultValues, useSetTouched, useTouchedFields, useFieldErrors, useSetFieldErrors, useResetFormElement, useSubmitForm, useFormActionProp, useFormSubactionProp, useFormValues, useControlledFieldValue, useRegisterControlledField, useControllableValue, useUpdateControllableValue, useIsSubmitting, useIsValid, useField, useControlField, useUpdateControlledField, setFormDefaults, MultiValueMap, useMultiValueMap, mergeRefs, useIsomorphicLayoutEffect, useDeepEqualsMemo, getDataFromForm, focusFirstInvalidInput, useFormId, FormResetter, objectFromPathEntries, preprocessFormData, omitInternalFields, useFormState, useFormHelpers, useFormContext, useInternalFieldArray;
var init_index_esm = __esm({
  "node_modules/remix-validated-form/dist/index.esm.js"() {
    import_react2 = __toESM(require_react());
    init_es();
    init_esm2();
    import_react4 = __toESM(require_react());
    import_lodash = __toESM(require_lodash());
    init_tiny_invariant();
    import_react5 = __toESM(require_react());
    init_tiny_invariant();
    init_esm3();
    init_immer();
    init_tiny_invariant();
    import_react6 = __toESM(require_react());
    init_esm();
    init_esm2();
    import_react8 = __toESM(require_react());
    init_es();
    import_react9 = __toESM(require_react());
    import_react10 = __toESM(require_react());
    import_react11 = __toESM(require_react());
    init_es();
    import_jsx_runtime = __toESM(require_jsx_runtime());
    init_es();
    import_react12 = __toESM(require_react());
    import_react13 = __toESM(require_react());
    init_index_browser();
    import_react14 = __toESM(require_react());
    import_react15 = __toESM(require_react());
    init_tiny_invariant();
    import_jsx_runtime2 = __toESM(require_jsx_runtime());
    getCheckboxChecked = (checkboxValue = "on", newValue) => {
      if (Array.isArray(newValue))
        return newValue.some((val) => val === true || val === checkboxValue);
      if (typeof newValue === "boolean")
        return newValue;
      if (typeof newValue === "string")
        return newValue === checkboxValue;
      return void 0;
    };
    getRadioChecked = (radioValue = "on", newValue) => {
      if (typeof newValue === "string")
        return newValue === radioValue;
      return void 0;
    };
    if (void 0) {
      const { it, expect } = void 0;
      it("getRadioChecked", () => {
        expect(getRadioChecked("on", "on")).toBe(true);
        expect(getRadioChecked("on", void 0)).toBe(void 0);
        expect(getRadioChecked("trueValue", void 0)).toBe(void 0);
        expect(getRadioChecked("trueValue", "bob")).toBe(false);
        expect(getRadioChecked("trueValue", "trueValue")).toBe(true);
      });
    }
    defaultValidationBehavior = {
      initial: "onBlur",
      whenTouched: "onChange",
      whenSubmitted: "onChange"
    };
    createGetInputProps = ({
      clearError,
      validate,
      defaultValue,
      touched,
      setTouched,
      hasBeenSubmitted,
      validationBehavior,
      name
    }) => {
      const validationBehaviors = {
        ...defaultValidationBehavior,
        ...validationBehavior
      };
      return (props = {}) => {
        const behavior = hasBeenSubmitted ? validationBehaviors.whenSubmitted : touched ? validationBehaviors.whenTouched : validationBehaviors.initial;
        const inputProps = {
          ...props,
          onChange: (...args) => {
            var _a;
            if (behavior === "onChange")
              validate();
            else
              clearError();
            return (_a = props == null ? void 0 : props.onChange) == null ? void 0 : _a.call(props, ...args);
          },
          onBlur: (...args) => {
            var _a;
            if (behavior === "onBlur")
              validate();
            setTouched(true);
            return (_a = props == null ? void 0 : props.onBlur) == null ? void 0 : _a.call(props, ...args);
          },
          name
        };
        if (props.type === "checkbox") {
          inputProps.defaultChecked = getCheckboxChecked(props.value, defaultValue);
        } else if (props.type === "radio") {
          inputProps.defaultChecked = getRadioChecked(props.value, defaultValue);
        } else if (props.value === void 0) {
          inputProps.defaultValue = defaultValue;
        }
        return omitBy(inputProps, (value) => value === void 0);
      };
    };
    stringToPathArray = (path) => {
      if (path.length === 0)
        return [];
      const match = path.match(/^\[(.+?)\](.*)$/) || path.match(/^\.?([^\.\[\]]+)(.*)$/);
      if (match) {
        const [_2, key, rest] = match;
        return [/^\d+$/.test(key) ? Number(key) : key, ...stringToPathArray(rest)];
      }
      return [path];
    };
    getPath = (object, path) => {
      return (0, import_lodash.default)(object, path);
    };
    FORM_ID_FIELD = "__rvfInternalFormId";
    FORM_DEFAULTS_FIELD = "__rvfInternalFormDefaults";
    formDefaultValuesKey = (formId) => `${FORM_DEFAULTS_FIELD}_${formId}`;
    InternalFormContext = (0, import_react5.createContext)(null);
    serverData = (data) => ({
      hydrateTo: () => data,
      map: (fn2) => serverData(fn2(data))
    });
    hydratedData = () => ({
      hydrateTo: (hydratedData2) => hydratedData2,
      map: () => hydratedData()
    });
    from = (data, hydrated) => hydrated ? hydratedData() : serverData(data);
    hydratable = {
      serverData,
      hydratedData,
      from
    };
    requestSubmit = (element, submitter) => {
      if (typeof Object.getPrototypeOf(element).requestSubmit === "function" && true) {
        element.requestSubmit(submitter);
        return;
      }
      if (submitter) {
        validateSubmitter(element, submitter);
        submitter.click();
        return;
      }
      const dummySubmitter = document.createElement("input");
      dummySubmitter.type = "submit";
      dummySubmitter.hidden = true;
      element.appendChild(dummySubmitter);
      dummySubmitter.click();
      element.removeChild(dummySubmitter);
    };
    if (void 0) {
      const { it, expect } = void 0;
      it("should validate the submitter", () => {
        const form = document.createElement("form");
        document.body.appendChild(form);
        const submitter = document.createElement("input");
        expect(() => validateSubmitter(null, null)).toThrow();
        expect(() => validateSubmitter(form, null)).toThrow();
        expect(() => validateSubmitter(form, submitter)).toThrow();
        expect(
          () => validateSubmitter(form, document.createElement("div"))
        ).toThrow();
        submitter.type = "submit";
        expect(() => validateSubmitter(form, submitter)).toThrow();
        form.appendChild(submitter);
        expect(() => validateSubmitter(form, submitter)).not.toThrow();
        form.removeChild(submitter);
        expect(() => validateSubmitter(form, submitter)).toThrow();
        document.body.appendChild(submitter);
        form.id = "test-form";
        submitter.setAttribute("form", "test-form");
        expect(() => validateSubmitter(form, submitter)).not.toThrow();
        const button = document.createElement("button");
        button.type = "submit";
        form.appendChild(button);
        expect(() => validateSubmitter(form, button)).not.toThrow();
      });
    }
    getArray = (values, field) => {
      const value = getPath(values, field);
      if (value === void 0 || value === null) {
        const newValue = [];
        setPath(values, field, newValue);
        return newValue;
      }
      invariant(
        Array.isArray(value),
        `FieldArray: defaultValue value for ${field} must be an array, null, or undefined`
      );
      return value;
    };
    swap = (array, indexA, indexB) => {
      const itemA = array[indexA];
      const itemB = array[indexB];
      const hasItemA = indexA in array;
      const hasItemB = indexB in array;
      if (hasItemA) {
        array[indexB] = itemA;
      } else {
        delete array[indexB];
      }
      if (hasItemB) {
        array[indexA] = itemB;
      } else {
        delete array[indexA];
      }
    };
    move = (array, from2, to) => {
      const [item] = sparseSplice(array, from2, 1);
      sparseSplice(array, to, 0, item);
    };
    insert = (array, index, value) => {
      sparseSplice(array, index, 0, value);
    };
    insertEmpty = (array, index) => {
      const tail = sparseSplice(array, index);
      tail.forEach((item, i2) => {
        sparseSplice(array, index + i2 + 1, 0, item);
      });
    };
    remove = (array, index) => {
      sparseSplice(array, index, 1);
    };
    replace = (array, index, value) => {
      sparseSplice(array, index, 1, value);
    };
    mutateAsArray = (field, obj, mutate) => {
      const beforeKeys = /* @__PURE__ */ new Set();
      const arr = [];
      for (const [key, value] of Object.entries(obj)) {
        if (key.startsWith(field) && key !== field) {
          beforeKeys.add(key);
          setPath(arr, key.substring(field.length), value);
        }
      }
      mutate(arr);
      for (const key of beforeKeys) {
        delete obj[key];
      }
      const newKeys = getDeepArrayPaths(arr);
      for (const key of newKeys) {
        const val = getPath(arr, key);
        if (val !== void 0) {
          obj[`${field}${key}`] = val;
        }
      }
    };
    getDeepArrayPaths = (obj, basePath = "") => {
      if (Array.isArray(obj)) {
        return obj.flatMap(
          (item, index) => getDeepArrayPaths(item, `${basePath}[${index}]`)
        );
      }
      if (typeof obj === "object") {
        return Object.keys(obj).flatMap(
          (key) => getDeepArrayPaths(obj[key], `${basePath}.${key}`)
        );
      }
      return [basePath];
    };
    if (void 0) {
      const { describe, expect, it } = void 0;
      const countArrayItems = (arr) => {
        let count = 0;
        arr.forEach(() => count++);
        return count;
      };
      describe("getArray", () => {
        it("shoud get a deeply nested array that can be mutated to update the nested value", () => {
          const values = {
            d: [
              { foo: "bar", baz: [true, false] },
              { e: true, f: "hi" }
            ]
          };
          const result = getArray(values, "d[0].baz");
          const finalValues = {
            d: [
              { foo: "bar", baz: [true, false, true] },
              { e: true, f: "hi" }
            ]
          };
          expect(result).toEqual([true, false]);
          result.push(true);
          expect(values).toEqual(finalValues);
        });
        it("should return an empty array that can be mutated if result is null or undefined", () => {
          const values = {};
          const result = getArray(values, "a.foo[0].bar");
          const finalValues = {
            a: { foo: [{ bar: ["Bob ross"] }] }
          };
          expect(result).toEqual([]);
          result.push("Bob ross");
          expect(values).toEqual(finalValues);
        });
        it("should throw if the value is defined and not an array", () => {
          const values = { foo: "foo" };
          expect(() => getArray(values, "foo")).toThrow();
        });
      });
      describe("swap", () => {
        it("should swap two items", () => {
          const array = [1, 2, 3];
          swap(array, 0, 1);
          expect(array).toEqual([2, 1, 3]);
        });
        it("should work for sparse arrays", () => {
          const arr = [];
          arr[0] = true;
          swap(arr, 0, 2);
          expect(countArrayItems(arr)).toEqual(1);
          expect(0 in arr).toBe(false);
          expect(2 in arr).toBe(true);
          expect(arr[2]).toEqual(true);
        });
      });
      describe("move", () => {
        it("should move an item to a new index", () => {
          const array = [1, 2, 3];
          move(array, 0, 1);
          expect(array).toEqual([2, 1, 3]);
        });
        it("should work with sparse arrays", () => {
          const array = [1];
          move(array, 0, 2);
          expect(countArrayItems(array)).toEqual(1);
          expect(array).toEqual([void 0, void 0, 1]);
        });
      });
      describe("insert", () => {
        it("should insert an item at a new index", () => {
          const array = [1, 2, 3];
          insert(array, 1, 4);
          expect(array).toEqual([1, 4, 2, 3]);
        });
        it("should be able to insert falsey values", () => {
          const array = [1, 2, 3];
          insert(array, 1, null);
          expect(array).toEqual([1, null, 2, 3]);
        });
        it("should handle sparse arrays", () => {
          const array = [];
          array[2] = true;
          insert(array, 0, true);
          expect(countArrayItems(array)).toEqual(2);
          expect(array).toEqual([true, void 0, void 0, true]);
        });
      });
      describe("insertEmpty", () => {
        it("should insert an empty item at a given index", () => {
          const array = [1, 2, 3];
          insertEmpty(array, 1);
          expect(array).toStrictEqual([1, , 2, 3]);
          expect(array).not.toStrictEqual([1, void 0, 2, 3]);
        });
        it("should work with already sparse arrays", () => {
          const array = [, , 1, , 2, , 3];
          insertEmpty(array, 3);
          expect(array).toStrictEqual([, , 1, , , 2, , 3]);
          expect(array).not.toStrictEqual([
            void 0,
            void 0,
            1,
            void 0,
            void 0,
            2,
            void 0,
            3
          ]);
        });
      });
      describe("remove", () => {
        it("should remove an item at a given index", () => {
          const array = [1, 2, 3];
          remove(array, 1);
          expect(array).toEqual([1, 3]);
        });
        it("should handle sparse arrays", () => {
          const array = [];
          array[2] = true;
          remove(array, 0);
          expect(countArrayItems(array)).toEqual(1);
          expect(array).toEqual([void 0, true]);
        });
      });
      describe("replace", () => {
        it("should replace an item at a given index", () => {
          const array = [1, 2, 3];
          replace(array, 1, 4);
          expect(array).toEqual([1, 4, 3]);
        });
        it("should handle sparse arrays", () => {
          const array = [];
          array[2] = true;
          replace(array, 0, true);
          expect(countArrayItems(array)).toEqual(2);
          expect(array).toEqual([true, void 0, true]);
        });
      });
      describe("mutateAsArray", () => {
        it("should handle swap", () => {
          const values = {
            myField: "something",
            "myField[0]": "foo",
            "myField[2]": "bar",
            otherField: "baz",
            "otherField[0]": "something else"
          };
          mutateAsArray("myField", values, (arr) => {
            swap(arr, 0, 2);
          });
          expect(values).toEqual({
            myField: "something",
            "myField[0]": "bar",
            "myField[2]": "foo",
            otherField: "baz",
            "otherField[0]": "something else"
          });
        });
        it("should swap sparse arrays", () => {
          const values = {
            myField: "something",
            "myField[0]": "foo",
            otherField: "baz",
            "otherField[0]": "something else"
          };
          mutateAsArray("myField", values, (arr) => {
            swap(arr, 0, 2);
          });
          expect(values).toEqual({
            myField: "something",
            "myField[2]": "foo",
            otherField: "baz",
            "otherField[0]": "something else"
          });
        });
        it("should handle arrays with nested values", () => {
          const values = {
            myField: "something",
            "myField[0].title": "foo",
            "myField[0].note": "bar",
            "myField[2].title": "other",
            "myField[2].note": "other",
            otherField: "baz",
            "otherField[0]": "something else"
          };
          mutateAsArray("myField", values, (arr) => {
            swap(arr, 0, 2);
          });
          expect(values).toEqual({
            myField: "something",
            "myField[0].title": "other",
            "myField[0].note": "other",
            "myField[2].title": "foo",
            "myField[2].note": "bar",
            otherField: "baz",
            "otherField[0]": "something else"
          });
        });
        it("should handle move", () => {
          const values = {
            myField: "something",
            "myField[0]": "foo",
            "myField[1]": "bar",
            "myField[2]": "baz",
            "otherField[0]": "something else"
          };
          mutateAsArray("myField", values, (arr) => {
            move(arr, 0, 2);
          });
          expect(values).toEqual({
            myField: "something",
            "myField[0]": "bar",
            "myField[1]": "baz",
            "myField[2]": "foo",
            "otherField[0]": "something else"
          });
        });
        it("should not create keys for `undefined`", () => {
          const values = {
            "myField[0]": "foo"
          };
          mutateAsArray("myField", values, (arr) => {
            arr.unshift(void 0);
          });
          expect(Object.keys(values)).toHaveLength(1);
          expect(values).toEqual({
            "myField[1]": "foo"
          });
        });
        it("should handle remove", () => {
          const values = {
            myField: "something",
            "myField[0]": "foo",
            "myField[1]": "bar",
            "myField[2]": "baz",
            "otherField[0]": "something else"
          };
          mutateAsArray("myField", values, (arr) => {
            remove(arr, 1);
          });
          expect(values).toEqual({
            myField: "something",
            "myField[0]": "foo",
            "myField[1]": "baz",
            "otherField[0]": "something else"
          });
          expect("myField[2]" in values).toBe(false);
        });
      });
      describe("getDeepArrayPaths", () => {
        it("should return all paths recursively", () => {
          const obj = [
            true,
            true,
            [true, true],
            { foo: true, bar: { baz: true, test: [true] } }
          ];
          expect(getDeepArrayPaths(obj, "myField")).toEqual([
            "myField[0]",
            "myField[1]",
            "myField[2][0]",
            "myField[2][1]",
            "myField[3].foo",
            "myField[3].bar.baz",
            "myField[3].bar.test[0]"
          ]);
        });
      });
    }
    noOp = () => {
    };
    defaultFormState = {
      isHydrated: false,
      isSubmitting: false,
      hasBeenSubmitted: false,
      touchedFields: {},
      fieldErrors: {},
      formElement: null,
      isValid: () => true,
      startSubmit: noOp,
      endSubmit: noOp,
      setTouched: noOp,
      setFieldError: noOp,
      setFieldErrors: noOp,
      clearFieldError: noOp,
      currentDefaultValues: {},
      reset: () => noOp,
      syncFormProps: noOp,
      setFormElement: noOp,
      validate: async () => {
        throw new Error("Validate called before form was initialized.");
      },
      smartValidate: async () => {
        throw new Error("Validate called before form was initialized.");
      },
      submit: async () => {
        throw new Error("Submit called before form was initialized.");
      },
      resetFormElement: noOp,
      getValues: () => new FormData(),
      controlledFields: {
        values: {},
        refCounts: {},
        valueUpdatePromises: {},
        valueUpdateResolvers: {},
        register: noOp,
        unregister: noOp,
        setValue: noOp,
        getValue: noOp,
        kickoffValueUpdate: noOp,
        awaitValueUpdate: async () => {
          throw new Error("AwaitValueUpdate called before form was initialized.");
        },
        array: {
          push: noOp,
          swap: noOp,
          move: noOp,
          insert: noOp,
          unshift: noOp,
          remove: noOp,
          pop: noOp,
          replace: noOp
        }
      }
    };
    createFormState = (set, get2) => ({
      isHydrated: false,
      isSubmitting: false,
      hasBeenSubmitted: false,
      touchedFields: {},
      fieldErrors: {},
      formElement: null,
      currentDefaultValues: {},
      isValid: () => Object.keys(get2().fieldErrors).length === 0,
      startSubmit: () => set((state) => {
        state.isSubmitting = true;
        state.hasBeenSubmitted = true;
      }),
      endSubmit: () => set((state) => {
        state.isSubmitting = false;
      }),
      setTouched: (fieldName, touched) => set((state) => {
        state.touchedFields[fieldName] = touched;
      }),
      setFieldError: (fieldName, error) => set((state) => {
        state.fieldErrors[fieldName] = error;
      }),
      setFieldErrors: (errors) => set((state) => {
        state.fieldErrors = errors;
      }),
      clearFieldError: (fieldName) => set((state) => {
        delete state.fieldErrors[fieldName];
      }),
      reset: () => set((state) => {
        var _a, _b;
        state.fieldErrors = {};
        state.touchedFields = {};
        state.hasBeenSubmitted = false;
        const nextDefaults = (_b = (_a = state.formProps) == null ? void 0 : _a.defaultValues) != null ? _b : {};
        state.controlledFields.values = nextDefaults;
        state.currentDefaultValues = nextDefaults;
      }),
      syncFormProps: (props) => set((state) => {
        if (!state.isHydrated) {
          state.controlledFields.values = props.defaultValues;
          state.currentDefaultValues = props.defaultValues;
        }
        state.formProps = props;
        state.isHydrated = true;
      }),
      setFormElement: (formElement) => {
        if (get2().formElement === formElement)
          return;
        set((state) => {
          state.formElement = formElement;
        });
      },
      validate: async () => {
        var _a;
        const formElement = get2().formElement;
        invariant(
          formElement,
          "Cannot find reference to form. This is probably a bug in remix-validated-form."
        );
        const validator = (_a = get2().formProps) == null ? void 0 : _a.validator;
        invariant(
          validator,
          "Cannot find validator. This is probably a bug in remix-validated-form."
        );
        const result = await validator.validate(new FormData(formElement));
        if (result.error)
          get2().setFieldErrors(result.error.fieldErrors);
        return result;
      },
      smartValidate: async ({ alwaysIncludeErrorsFromFields = [] } = {}) => {
        var _a;
        const formElement = get2().formElement;
        invariant(
          formElement,
          "Cannot find reference to form. This is probably a bug in remix-validated-form."
        );
        const validator = (_a = get2().formProps) == null ? void 0 : _a.validator;
        invariant(
          validator,
          "Cannot find validator. This is probably a bug in remix-validated-form."
        );
        await Promise.all(
          alwaysIncludeErrorsFromFields.map(
            (field) => {
              var _a2, _b;
              return (_b = (_a2 = get2().controlledFields).awaitValueUpdate) == null ? void 0 : _b.call(_a2, field);
            }
          )
        );
        const validationResult = await validator.validate(
          new FormData(formElement)
        );
        if (!validationResult.error) {
          const hadErrors = Object.keys(get2().fieldErrors).length > 0;
          if (hadErrors)
            get2().setFieldErrors({});
          return validationResult;
        }
        const {
          error: { fieldErrors }
        } = validationResult;
        const errorFields = /* @__PURE__ */ new Set();
        const incomingErrors = /* @__PURE__ */ new Set();
        const prevErrors = /* @__PURE__ */ new Set();
        Object.keys(fieldErrors).forEach((field) => {
          errorFields.add(field);
          incomingErrors.add(field);
        });
        Object.keys(get2().fieldErrors).forEach((field) => {
          errorFields.add(field);
          prevErrors.add(field);
        });
        const fieldsToUpdate = /* @__PURE__ */ new Set();
        const fieldsToDelete = /* @__PURE__ */ new Set();
        errorFields.forEach((field) => {
          if (!incomingErrors.has(field)) {
            fieldsToDelete.add(field);
            return;
          }
          if (prevErrors.has(field) && incomingErrors.has(field)) {
            if (fieldErrors[field] !== get2().fieldErrors[field])
              fieldsToUpdate.add(field);
            return;
          }
          if (alwaysIncludeErrorsFromFields.includes(field)) {
            fieldsToUpdate.add(field);
            return;
          }
          if (!prevErrors.has(field)) {
            const fieldTouched = get2().touchedFields[field];
            const formHasBeenSubmitted = get2().hasBeenSubmitted;
            if (fieldTouched || formHasBeenSubmitted)
              fieldsToUpdate.add(field);
            return;
          }
        });
        if (fieldsToDelete.size === 0 && fieldsToUpdate.size === 0) {
          return { ...validationResult, error: { fieldErrors: get2().fieldErrors } };
        }
        set((state) => {
          fieldsToDelete.forEach((field) => {
            delete state.fieldErrors[field];
          });
          fieldsToUpdate.forEach((field) => {
            state.fieldErrors[field] = fieldErrors[field];
          });
        });
        return { ...validationResult, error: { fieldErrors: get2().fieldErrors } };
      },
      submit: () => {
        const formElement = get2().formElement;
        invariant(
          formElement,
          "Cannot find reference to form. This is probably a bug in remix-validated-form."
        );
        requestSubmit(formElement);
      },
      getValues: () => {
        var _a;
        return new FormData((_a = get2().formElement) != null ? _a : void 0);
      },
      resetFormElement: () => {
        var _a;
        return (_a = get2().formElement) == null ? void 0 : _a.reset();
      },
      controlledFields: {
        values: {},
        refCounts: {},
        valueUpdatePromises: {},
        valueUpdateResolvers: {},
        register: (fieldName) => {
          set((state) => {
            var _a;
            const current = (_a = state.controlledFields.refCounts[fieldName]) != null ? _a : 0;
            state.controlledFields.refCounts[fieldName] = current + 1;
          });
        },
        unregister: (fieldName) => {
          if (get2() === null || get2() === void 0)
            return;
          set((state) => {
            var _a, _b, _c2;
            const current = (_a = state.controlledFields.refCounts[fieldName]) != null ? _a : 0;
            if (current > 1) {
              state.controlledFields.refCounts[fieldName] = current - 1;
              return;
            }
            const isNested = Object.keys(state.controlledFields.refCounts).some(
              (key) => fieldName.startsWith(key) && key !== fieldName
            );
            if (!isNested) {
              setPath(
                state.controlledFields.values,
                fieldName,
                getPath((_b = state.formProps) == null ? void 0 : _b.defaultValues, fieldName)
              );
              setPath(
                state.currentDefaultValues,
                fieldName,
                getPath((_c2 = state.formProps) == null ? void 0 : _c2.defaultValues, fieldName)
              );
            }
            delete state.controlledFields.refCounts[fieldName];
          });
        },
        getValue: (fieldName) => getPath(get2().controlledFields.values, fieldName),
        setValue: (fieldName, value) => {
          set((state) => {
            setPath(state.controlledFields.values, fieldName, value);
          });
          get2().controlledFields.kickoffValueUpdate(fieldName);
        },
        kickoffValueUpdate: (fieldName) => {
          const clear = () => set((state) => {
            delete state.controlledFields.valueUpdateResolvers[fieldName];
            delete state.controlledFields.valueUpdatePromises[fieldName];
          });
          set((state) => {
            const promise = new Promise((resolve) => {
              state.controlledFields.valueUpdateResolvers[fieldName] = resolve;
            }).then(clear);
            state.controlledFields.valueUpdatePromises[fieldName] = promise;
          });
        },
        awaitValueUpdate: async (fieldName) => {
          await get2().controlledFields.valueUpdatePromises[fieldName];
        },
        array: {
          push: (fieldName, item) => {
            set((state) => {
              getArray(state.controlledFields.values, fieldName).push(item);
              getArray(state.currentDefaultValues, fieldName).push(item);
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          },
          swap: (fieldName, indexA, indexB) => {
            set((state) => {
              swap(
                getArray(state.controlledFields.values, fieldName),
                indexA,
                indexB
              );
              swap(
                getArray(state.currentDefaultValues, fieldName),
                indexA,
                indexB
              );
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => swap(array, indexA, indexB)
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => swap(array, indexA, indexB)
              );
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          },
          move: (fieldName, from2, to) => {
            set((state) => {
              move(
                getArray(state.controlledFields.values, fieldName),
                from2,
                to
              );
              move(
                getArray(state.currentDefaultValues, fieldName),
                from2,
                to
              );
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => move(array, from2, to)
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => move(array, from2, to)
              );
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          },
          insert: (fieldName, index, item) => {
            set((state) => {
              insert(
                getArray(state.controlledFields.values, fieldName),
                index,
                item
              );
              insert(
                getArray(state.currentDefaultValues, fieldName),
                index,
                item
              );
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => insertEmpty(array, index)
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => insertEmpty(array, index)
              );
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          },
          remove: (fieldName, index) => {
            set((state) => {
              remove(
                getArray(state.controlledFields.values, fieldName),
                index
              );
              remove(
                getArray(state.currentDefaultValues, fieldName),
                index
              );
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => remove(array, index)
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => remove(array, index)
              );
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          },
          pop: (fieldName) => {
            set((state) => {
              getArray(state.controlledFields.values, fieldName).pop();
              getArray(state.currentDefaultValues, fieldName).pop();
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => array.pop()
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => array.pop()
              );
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          },
          unshift: (fieldName, value) => {
            set((state) => {
              getArray(state.controlledFields.values, fieldName).unshift(value);
              getArray(state.currentDefaultValues, fieldName).unshift(value);
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => insertEmpty(array, 0)
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => insertEmpty(array, 0)
              );
            });
          },
          replace: (fieldName, index, item) => {
            set((state) => {
              replace(
                getArray(state.controlledFields.values, fieldName),
                index,
                item
              );
              replace(
                getArray(state.currentDefaultValues, fieldName),
                index,
                item
              );
              mutateAsArray(
                fieldName,
                state.touchedFields,
                (array) => replace(array, index, item)
              );
              mutateAsArray(
                fieldName,
                state.fieldErrors,
                (array) => replace(array, index, item)
              );
            });
            get2().controlledFields.kickoffValueUpdate(fieldName);
          }
        }
      }
    });
    useRootFormStore = create()(
      immer((set, get2) => ({
        forms: {},
        form: (formId) => {
          var _a;
          return (_a = get2().forms[formId]) != null ? _a : defaultFormState;
        },
        cleanupForm: (formId) => {
          set((state) => {
            delete state.forms[formId];
          });
        },
        registerForm: (formId) => {
          if (get2().forms[formId])
            return;
          set((state) => {
            state.forms[formId] = createFormState(
              (setter) => set((state2) => setter(state2.forms[formId])),
              () => get2().forms[formId]
            );
          });
        }
      }))
    );
    useFormStore = (formId, selector) => {
      return useRootFormStore((state) => selector(state.form(formId)));
    };
    useInternalFormContext = (formId, hookName) => {
      const formContext = (0, import_react4.useContext)(InternalFormContext);
      if (formId)
        return { formId };
      if (formContext)
        return formContext;
      throw new Error(
        `Unable to determine form for ${hookName}. Please use it inside a ValidatedForm or pass a 'formId'.`
      );
    };
    useFieldErrorsForForm = (context) => {
      const response = useErrorResponseForForm(context);
      const hydrated = useFormStore(context.formId, (state) => state.isHydrated);
      return hydratable.from(response == null ? void 0 : response.fieldErrors, hydrated);
    };
    useDefaultValuesFromLoader = ({
      formId
    }) => {
      const matches = useMatches();
      if (typeof formId === "string") {
        const dataKey = formDefaultValuesKey(formId);
        const match = matches.reverse().find(
          (match2) => match2.data && typeof match2.data === "object" && dataKey in match2.data
        );
        return match == null ? void 0 : match.data[dataKey];
      }
      return null;
    };
    useDefaultValuesForForm = (context) => {
      const { formId, defaultValuesProp } = context;
      const hydrated = useFormStore(formId, (state) => state.isHydrated);
      const errorResponse = useErrorResponseForForm(context);
      const defaultValuesFromLoader = useDefaultValuesFromLoader(context);
      if (hydrated)
        return hydratable.hydratedData();
      if (errorResponse == null ? void 0 : errorResponse.repopulateFields) {
        invariant(
          typeof errorResponse.repopulateFields === "object",
          "repopulateFields returned something other than an object"
        );
        return hydratable.serverData(errorResponse.repopulateFields);
      }
      if (defaultValuesProp)
        return hydratable.serverData(defaultValuesProp);
      return hydratable.serverData(defaultValuesFromLoader);
    };
    useHasActiveFormSubmit = ({
      fetcher
    }) => {
      let navigation = useNavigation();
      const hasActiveSubmission = fetcher ? fetcher.state === "submitting" : navigation.state === "submitting" || navigation.state === "loading";
      return hasActiveSubmission;
    };
    useFieldTouched = (field, { formId }) => {
      const touched = useFormStore(formId, (state) => state.touchedFields[field]);
      const setFieldTouched = useFormStore(formId, (state) => state.setTouched);
      const setTouched = (0, import_react4.useCallback)(
        (touched2) => setFieldTouched(field, touched2),
        [field, setFieldTouched]
      );
      return [touched, setTouched];
    };
    useFieldError = (name, context) => {
      const fieldErrors = useFieldErrorsForForm(context);
      const state = useFormStore(
        context.formId,
        (state2) => state2.fieldErrors[name]
      );
      return fieldErrors.map((fieldErrors2) => fieldErrors2 == null ? void 0 : fieldErrors2[name]).hydrateTo(state);
    };
    useClearError = (context) => {
      const { formId } = context;
      return useFormStore(formId, (state) => state.clearFieldError);
    };
    useCurrentDefaultValueForField = (formId, field) => useFormStore(formId, (state) => getPath(state.currentDefaultValues, field));
    useFieldDefaultValue = (name, context) => {
      const defaultValues = useDefaultValuesForForm(context);
      const state = useCurrentDefaultValueForField(context.formId, name);
      return defaultValues.map((val) => getPath(val, name)).hydrateTo(state);
    };
    useInternalIsSubmitting = (formId) => useFormStore(formId, (state) => state.isSubmitting);
    useInternalIsValid = (formId) => useFormStore(formId, (state) => state.isValid());
    useInternalHasBeenSubmitted = (formId) => useFormStore(formId, (state) => state.hasBeenSubmitted);
    useSmartValidate = (formId) => useFormStore(formId, (state) => state.smartValidate);
    useValidate = (formId) => useFormStore(formId, (state) => state.validate);
    noOpReceiver = () => () => {
    };
    useRegisterReceiveFocus = (formId) => useFormStore(
      formId,
      (state) => {
        var _a, _b;
        return (_b = (_a = state.formProps) == null ? void 0 : _a.registerReceiveFocus) != null ? _b : noOpReceiver;
      }
    );
    defaultDefaultValues = {};
    useSyncedDefaultValues = (formId) => useFormStore(
      formId,
      (state) => {
        var _a, _b;
        return (_b = (_a = state.formProps) == null ? void 0 : _a.defaultValues) != null ? _b : defaultDefaultValues;
      }
    );
    useSetTouched = ({ formId }) => useFormStore(formId, (state) => state.setTouched);
    useTouchedFields = (formId) => useFormStore(formId, (state) => state.touchedFields);
    useFieldErrors = (formId) => useFormStore(formId, (state) => state.fieldErrors);
    useSetFieldErrors = (formId) => useFormStore(formId, (state) => state.setFieldErrors);
    useResetFormElement = (formId) => useFormStore(formId, (state) => state.resetFormElement);
    useSubmitForm = (formId) => useFormStore(formId, (state) => state.submit);
    useFormActionProp = (formId) => useFormStore(formId, (state) => {
      var _a;
      return (_a = state.formProps) == null ? void 0 : _a.action;
    });
    useFormSubactionProp = (formId) => useFormStore(formId, (state) => {
      var _a;
      return (_a = state.formProps) == null ? void 0 : _a.subaction;
    });
    useFormValues = (formId) => useFormStore(formId, (state) => state.getValues);
    useControlledFieldValue = (context, field) => {
      const value = useFormStore(
        context.formId,
        (state) => state.controlledFields.getValue(field)
      );
      const isFormHydrated = useFormStore(
        context.formId,
        (state) => state.isHydrated
      );
      const defaultValue = useFieldDefaultValue(field, context);
      return isFormHydrated ? value : defaultValue;
    };
    useRegisterControlledField = (context, field) => {
      const resolveUpdate = useFormStore(
        context.formId,
        (state) => state.controlledFields.valueUpdateResolvers[field]
      );
      (0, import_react6.useEffect)(() => {
        resolveUpdate == null ? void 0 : resolveUpdate();
      }, [resolveUpdate]);
      const register = useFormStore(
        context.formId,
        (state) => state.controlledFields.register
      );
      const unregister = useFormStore(
        context.formId,
        (state) => state.controlledFields.unregister
      );
      (0, import_react6.useEffect)(() => {
        register(field);
        return () => unregister(field);
      }, [context.formId, field, register, unregister]);
    };
    useControllableValue = (context, field) => {
      useRegisterControlledField(context, field);
      const setControlledFieldValue = useFormStore(
        context.formId,
        (state) => state.controlledFields.setValue
      );
      const setValue = (0, import_react6.useCallback)(
        (value2) => setControlledFieldValue(field, value2),
        [field, setControlledFieldValue]
      );
      const value = useControlledFieldValue(context, field);
      return [value, setValue];
    };
    useUpdateControllableValue = (formId) => {
      const setValue = useFormStore(
        formId,
        (state) => state.controlledFields.setValue
      );
      return (0, import_react6.useCallback)(
        (field, value) => setValue(field, value),
        [setValue]
      );
    };
    useIsSubmitting = (formId) => {
      const formContext = useInternalFormContext(formId, "useIsSubmitting");
      return useInternalIsSubmitting(formContext.formId);
    };
    useIsValid = (formId) => {
      const formContext = useInternalFormContext(formId, "useIsValid");
      return useInternalIsValid(formContext.formId);
    };
    useField = (name, options) => {
      const { formId: providedFormId, handleReceiveFocus } = options != null ? options : {};
      const formContext = useInternalFormContext(providedFormId, "useField");
      const defaultValue = useFieldDefaultValue(name, formContext);
      const [touched, setTouched] = useFieldTouched(name, formContext);
      const error = useFieldError(name, formContext);
      const clearError = useClearError(formContext);
      const hasBeenSubmitted = useInternalHasBeenSubmitted(formContext.formId);
      const smartValidate = useSmartValidate(formContext.formId);
      const registerReceiveFocus = useRegisterReceiveFocus(formContext.formId);
      (0, import_react2.useEffect)(() => {
        if (handleReceiveFocus)
          return registerReceiveFocus(name, handleReceiveFocus);
      }, [handleReceiveFocus, name, registerReceiveFocus]);
      const field = (0, import_react2.useMemo)(() => {
        const helpers = {
          error,
          clearError: () => clearError(name),
          validate: () => smartValidate({ alwaysIncludeErrorsFromFields: [name] }),
          defaultValue,
          touched,
          setTouched
        };
        const getInputProps = createGetInputProps({
          ...helpers,
          name,
          hasBeenSubmitted,
          validationBehavior: options == null ? void 0 : options.validationBehavior
        });
        return {
          ...helpers,
          getInputProps
        };
      }, [
        error,
        clearError,
        defaultValue,
        touched,
        setTouched,
        name,
        hasBeenSubmitted,
        options == null ? void 0 : options.validationBehavior,
        smartValidate
      ]);
      return field;
    };
    useControlField = (name, formId) => {
      const context = useInternalFormContext(formId, "useControlField");
      const [value, setValue] = useControllableValue(context, name);
      return [value, setValue];
    };
    useUpdateControlledField = (formId) => {
      const context = useInternalFormContext(formId, "useControlField");
      return useUpdateControllableValue(context.formId);
    };
    setFormDefaults = (formId, defaultValues) => ({
      [formDefaultValuesKey(formId)]: defaultValues
    });
    MultiValueMap = class {
      constructor() {
        this.dict = /* @__PURE__ */ new Map();
        this.add = (key, value) => {
          if (this.dict.has(key)) {
            this.dict.get(key).push(value);
          } else {
            this.dict.set(key, [value]);
          }
        };
        this.delete = (key) => {
          this.dict.delete(key);
        };
        this.remove = (key, value) => {
          if (!this.dict.has(key))
            return;
          const array = this.dict.get(key);
          const index = array.indexOf(value);
          if (index !== -1)
            array.splice(index, 1);
          if (array.length === 0)
            this.dict.delete(key);
        };
        this.getAll = (key) => {
          var _a;
          return (_a = this.dict.get(key)) != null ? _a : [];
        };
        this.entries = () => this.dict.entries();
        this.values = () => this.dict.values();
        this.has = (key) => this.dict.has(key);
      }
    };
    useMultiValueMap = () => {
      const ref = (0, import_react9.useRef)(null);
      return (0, import_react9.useCallback)(() => {
        if (ref.current)
          return ref.current;
        ref.current = new MultiValueMap();
        return ref.current;
      }, []);
    };
    mergeRefs = (refs) => {
      return (value) => {
        refs.filter(Boolean).forEach((ref) => {
          if (typeof ref === "function") {
            ref(value);
          } else if (ref != null) {
            ref.current = value;
          }
        });
      };
    };
    useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react11.useLayoutEffect : import_react11.useEffect;
    useDeepEqualsMemo = (item) => {
      const ref = (0, import_react11.useRef)(item);
      const areEqual = ref.current === item || equals(ref.current, item);
      (0, import_react11.useEffect)(() => {
        if (!areEqual) {
          ref.current = item;
        }
      });
      return areEqual ? ref.current : item;
    };
    getDataFromForm = (el) => new FormData(el);
    focusFirstInvalidInput = (fieldErrors, customFocusHandlers, formElement) => {
      var _a;
      const namesInOrder = [...formElement.elements].map((el) => {
        const input = el instanceof RadioNodeList ? el[0] : el;
        if (input instanceof HTMLElement && "name" in input)
          return input.name;
        return null;
      }).filter(nonNull).filter((name) => name in fieldErrors);
      const uniqueNamesInOrder = uniq(namesInOrder);
      for (const fieldName of uniqueNamesInOrder) {
        if (customFocusHandlers.has(fieldName)) {
          customFocusHandlers.getAll(fieldName).forEach((handler) => {
            handler();
          });
          break;
        }
        const elem = formElement.elements.namedItem(fieldName);
        if (!elem)
          continue;
        if (elem instanceof RadioNodeList) {
          const selectedRadio = (_a = [...elem].filter(
            (item) => item instanceof HTMLInputElement
          ).find((item) => item.value === elem.value)) != null ? _a : elem[0];
          if (selectedRadio && selectedRadio instanceof HTMLInputElement) {
            selectedRadio.focus();
            break;
          }
        }
        if (elem instanceof HTMLElement) {
          if (elem instanceof HTMLInputElement && elem.type === "hidden") {
            continue;
          }
          elem.focus();
          break;
        }
      }
    };
    useFormId = (providedId) => {
      const [symbolId] = (0, import_react8.useState)(() => Symbol("remix-validated-form-id"));
      return providedId != null ? providedId : symbolId;
    };
    FormResetter = ({
      resetAfterSubmit,
      formRef
    }) => {
      const isSubmitting = useIsSubmitting();
      const isValid2 = useIsValid();
      useSubmitComplete(isSubmitting, () => {
        var _a;
        if (isValid2 && resetAfterSubmit) {
          (_a = formRef.current) == null ? void 0 : _a.reset();
        }
      });
      return null;
    };
    objectFromPathEntries = (entries) => {
      const map2 = new MultiValueMap();
      entries.forEach(([key, value]) => map2.add(key, value));
      return [...map2.entries()].reduce(
        (acc, [key, value]) => setPath(acc, key, value.length === 1 ? value[0] : value),
        {}
      );
    };
    preprocessFormData = (data) => {
      if ("entries" in data && typeof data.entries === "function")
        return objectFromPathEntries([...data.entries()]);
      return objectFromPathEntries(Object.entries(data));
    };
    omitInternalFields = (data) => omit(data, [FORM_ID_FIELD]);
    useFormState = (formId) => {
      const formContext = useInternalFormContext(formId, "useFormState");
      const isSubmitting = useInternalIsSubmitting(formContext.formId);
      const hasBeenSubmitted = useInternalHasBeenSubmitted(formContext.formId);
      const touchedFields = useTouchedFields(formContext.formId);
      const isValid2 = useInternalIsValid(formContext.formId);
      const action = useFormActionProp(formContext.formId);
      const subaction = useFormSubactionProp(formContext.formId);
      const syncedDefaultValues = useSyncedDefaultValues(formContext.formId);
      const defaultValuesToUse = useDefaultValuesForForm(formContext);
      const hydratedDefaultValues = defaultValuesToUse.hydrateTo(syncedDefaultValues);
      const fieldErrorsFromState = useFieldErrors(formContext.formId);
      const fieldErrorsToUse = useFieldErrorsForForm(formContext);
      const hydratedFieldErrors = fieldErrorsToUse.hydrateTo(fieldErrorsFromState);
      return (0, import_react13.useMemo)(
        () => ({
          action,
          subaction,
          defaultValues: hydratedDefaultValues,
          fieldErrors: hydratedFieldErrors != null ? hydratedFieldErrors : {},
          hasBeenSubmitted,
          isSubmitting,
          touchedFields,
          isValid: isValid2
        }),
        [
          action,
          hasBeenSubmitted,
          hydratedDefaultValues,
          hydratedFieldErrors,
          isSubmitting,
          isValid2,
          subaction,
          touchedFields
        ]
      );
    };
    useFormHelpers = (formId) => {
      const formContext = useInternalFormContext(formId, "useFormHelpers");
      const setTouched = useSetTouched(formContext);
      const validateField = useSmartValidate(formContext.formId);
      const validate = useValidate(formContext.formId);
      const clearError = useClearError(formContext);
      const setFieldErrors = useSetFieldErrors(formContext.formId);
      const reset = useResetFormElement(formContext.formId);
      const submit = useSubmitForm(formContext.formId);
      const getValues = useFormValues(formContext.formId);
      return (0, import_react13.useMemo)(
        () => ({
          setTouched,
          validateField: async (fieldName) => {
            var _a, _b;
            const res = await validateField({
              alwaysIncludeErrorsFromFields: [fieldName]
            });
            return (_b = (_a = res.error) == null ? void 0 : _a.fieldErrors[fieldName]) != null ? _b : null;
          },
          clearError,
          validate,
          clearAllErrors: () => setFieldErrors({}),
          reset,
          submit,
          getValues
        }),
        [
          clearError,
          reset,
          setFieldErrors,
          setTouched,
          submit,
          validate,
          validateField,
          getValues
        ]
      );
    };
    useFormContext = (formId) => {
      const context = useInternalFormContext(formId, "useFormContext");
      const state = useFormState(formId);
      const {
        clearError: internalClearError,
        setTouched,
        validateField,
        clearAllErrors,
        validate,
        reset,
        submit,
        getValues
      } = useFormHelpers(formId);
      const registerReceiveFocus = useRegisterReceiveFocus(context.formId);
      const clearError = (0, import_react12.useCallback)(
        (...names) => {
          names.forEach((name) => {
            internalClearError(name);
          });
        },
        [internalClearError]
      );
      return (0, import_react12.useMemo)(
        () => ({
          ...state,
          setFieldTouched: setTouched,
          validateField,
          clearError,
          registerReceiveFocus,
          clearAllErrors,
          validate,
          reset,
          submit,
          getValues
        }),
        [
          clearAllErrors,
          clearError,
          registerReceiveFocus,
          reset,
          setTouched,
          state,
          submit,
          validate,
          validateField,
          getValues
        ]
      );
    };
    useInternalFieldArray = (context, field, validationBehavior) => {
      const value = useFieldDefaultValue(field, context);
      useRegisterControlledField(context, field);
      const hasBeenSubmitted = useInternalHasBeenSubmitted(context.formId);
      const validateField = useSmartValidate(context.formId);
      const error = useFieldError(field, context);
      const resolvedValidationBehavior = {
        initial: "onSubmit",
        whenSubmitted: "onChange",
        ...validationBehavior
      };
      const behavior = hasBeenSubmitted ? resolvedValidationBehavior.whenSubmitted : resolvedValidationBehavior.initial;
      const maybeValidate = (0, import_react15.useCallback)(() => {
        if (behavior === "onChange") {
          validateField({ alwaysIncludeErrorsFromFields: [field] });
        }
      }, [behavior, field, validateField]);
      invariant(
        value === void 0 || value === null || Array.isArray(value),
        `FieldArray: defaultValue value for ${field} must be an array, null, or undefined`
      );
      const arr = useFormStore(
        context.formId,
        (state) => state.controlledFields.array
      );
      const arrayValue = (0, import_react14.useMemo)(() => value != null ? value : [], [value]);
      const keyRef = (0, import_react14.useRef)([]);
      if (keyRef.current.length !== arrayValue.length) {
        keyRef.current = arrayValue.map(() => nanoid());
      }
      const helpers = (0, import_react14.useMemo)(
        () => ({
          push: (item) => {
            arr.push(field, item);
            keyRef.current.push(nanoid());
            maybeValidate();
          },
          swap: (indexA, indexB) => {
            arr.swap(field, indexA, indexB);
            swap(keyRef.current, indexA, indexB);
            maybeValidate();
          },
          move: (from2, to) => {
            arr.move(field, from2, to);
            move(keyRef.current, from2, to);
            maybeValidate();
          },
          insert: (index, value2) => {
            arr.insert(field, index, value2);
            insert(keyRef.current, index, nanoid());
            maybeValidate();
          },
          unshift: (value2) => {
            arr.unshift(field, value2);
            keyRef.current.unshift(nanoid());
            maybeValidate();
          },
          remove: (index) => {
            arr.remove(field, index);
            remove(keyRef.current, index);
            maybeValidate();
          },
          pop: () => {
            arr.pop(field);
            keyRef.current.pop();
            maybeValidate();
          },
          replace: (index, value2) => {
            arr.replace(field, index, value2);
            keyRef.current[index] = nanoid();
            maybeValidate();
          }
        }),
        [arr, field, maybeValidate]
      );
      const valueWithKeys = (0, import_react14.useMemo)(() => {
        const result = [];
        arrayValue.forEach((item, index) => {
          result[index] = {
            key: keyRef.current[index],
            defaultValue: item
          };
        });
        return result;
      }, [arrayValue]);
      return [valueWithKeys, helpers, error];
    };
  }
});

// node_modules/@remix-validated-form/with-zod/dist/remix-validated-form__with-zod.cjs.js
var require_remix_validated_form_with_zod_cjs = __commonJS({
  "node_modules/@remix-validated-form/with-zod/dist/remix-validated-form__with-zod.cjs.js"(exports) {
    "use strict";
    Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    var h2 = (init_index_esm(), __toCommonJS(index_esm_exports));
    var m = globalThis && globalThis.__spreadArray || function(e, r2, o2) {
      if (o2 || arguments.length === 2)
        for (var t2 = 0, n2 = r2.length, a2; t2 < n2; t2++)
          (a2 || !(t2 in r2)) && (a2 || (a2 = Array.prototype.slice.call(r2, 0, t2)), a2[t2] = r2[t2]);
      return e.concat(a2 || Array.prototype.slice.call(r2));
    };
    function A2(e, r2, o2) {
      var t2 = e.length - r2.length, n2 = Array.from(r2);
      if (t2 === 0)
        return e.apply(void 0, n2);
      if (t2 === 1) {
        var a2 = function(s2) {
          return e.apply(void 0, m([s2], n2, false));
        };
        return (o2 || e.lazy) && (a2.lazy = o2 || e.lazy, a2.lazyArgs = r2), a2;
      }
      throw new Error("Wrong number of arguments");
    }
    var y2 = Array.isArray;
    var p2 = Object.keys;
    var E2 = Object.prototype.hasOwnProperty;
    function u2() {
      return A2(_2, arguments);
    }
    function _2(e, r2) {
      if (e === r2)
        return true;
      if (e && r2 && typeof e == "object" && typeof r2 == "object") {
        var o2 = y2(e), t2 = y2(r2), n2 = void 0, a2 = void 0, s2 = void 0;
        if (o2 && t2) {
          if (a2 = e.length, a2 !== r2.length)
            return false;
          for (n2 = a2; n2-- !== 0; )
            if (!u2(e[n2], r2[n2]))
              return false;
          return true;
        }
        if (o2 !== t2)
          return false;
        var l2 = e instanceof Date, c2 = r2 instanceof Date;
        if (l2 !== c2)
          return false;
        if (l2 && c2)
          return e.getTime() === r2.getTime();
        var v2 = e instanceof RegExp, d2 = r2 instanceof RegExp;
        if (v2 !== d2)
          return false;
        if (v2 && d2)
          return e.toString() === r2.toString();
        var i2 = p2(e);
        if (a2 = i2.length, a2 !== p2(r2).length)
          return false;
        for (n2 = a2; n2-- !== 0; )
          if (!E2.call(r2, i2[n2]))
            return false;
        for (n2 = a2; n2-- !== 0; )
          if (s2 = i2[n2], !u2(e[s2], r2[s2]))
            return false;
        return true;
      }
      return e !== e && r2 !== r2;
    }
    var g2 = (e) => {
      if (e.length === 0)
        return [];
      const r2 = e.match(/^\[(.+?)\](.*)$/) || e.match(/^\.?([^\.\[\]]+)(.*)$/);
      if (r2) {
        const [o2, t2, n2] = r2;
        return [/^\d+$/.test(t2) ? Number(t2) : t2, ...g2(n2)];
      }
      return [e];
    };
    var f2 = (e) => e.issues.flatMap((r2) => "unionErrors" in r2 ? r2.unionErrors.flatMap((o2) => f2(o2)) : [r2]);
    function w2(e) {
      return e.reduce(function(r2, o2) {
        const t2 = r2 === "" ? "" : ".";
        return r2 + (isNaN(Number(o2)) ? t2 + o2 : "[" + o2 + "]");
      }, "");
    }
    function T(e, r2) {
      return h2.createValidator({ validate: async (o2) => {
        const t2 = await e.safeParseAsync(o2, r2);
        if (t2.success)
          return { data: t2.data, error: void 0 };
        const n2 = {};
        return f2(t2.error).forEach((a2) => {
          const s2 = w2(a2.path);
          n2[s2] || (n2[s2] = a2.message);
        }), { error: n2, data: void 0 };
      }, validateField: async (o2, t2) => {
        var a2;
        const n2 = await e.safeParseAsync(o2, r2);
        return n2.success ? { error: void 0 } : { error: (a2 = f2(n2.error).find((s2) => u2(s2.path, g2(t2)))) == null ? void 0 : a2.message };
      } });
    }
    exports.withZod = T;
  }
});

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys2 = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys2.push(key);
      }
    }
    return keys2;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first2, second) => {
    return {
      ...first2,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json2 = JSON.stringify(obj, null, 2);
  return json2.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map2) {
  overrideErrorMap = map2;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map2 of maps) {
    errorMessage = map2(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s2 of results) {
      if (s2.status === "aborted")
        return INVALID;
      if (s2.status === "dirty")
        status.dirty();
      arrayValue.push(s2.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (typeof value.value !== "undefined" || pair.alwaysSet) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x2) => x2.status === "aborted";
var isDirty = (x2) => x2.status === "dirty";
var isValid = (x2) => x2.status === "valid";
var isAsync = (x2) => typeof Promise !== "undefined" && x2 instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /[0-9A-HJKMNP-TV-Z]{26}/;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
var emojiRegex = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
    this.toLowerCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
    this.toUpperCase = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a = options === null || options === void 0 ? void 0 : options.offset) !== null && _a !== void 0 ? _a : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a !== void 0 ? _a : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys2 = util.objectKeys(shape);
    return this._cached = { shape, keys: keys2 };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a, _b, _c2, _d;
          const defaultError = (_c2 = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c2 !== void 0 ? _c2 : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b2) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b2);
  if (a2 === b2) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first2, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first2,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first2,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await fn2(...parsedArgs);
        const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      return OK((...args) => {
        const parsedArgs = this._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = fn2(...parsedArgs.data);
        const parsedReturns = this._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return ZodEnum.create(values);
  }
  exclude(values) {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b2) {
    return new ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      if (!check(data)) {
        const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a = p2.fatal) !== null && _a !== void 0 ? _a : fatal) !== null && _b !== void 0 ? _b : true;
        const p22 = typeof p2 === "string" ? { message: p2 } : p2;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// app/components/FormElement.tsx
init_remix_hmr();
init_index_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FormElement.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FormElement.tsx"
  );
  import.meta.hot.lastModified = "1742363235104.9072";
}
var FormElement = ({
  children,
  label,
  name,
  required = false
}) => {
  _s();
  const {
    error
  } = useField(name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: name, className: clsx_m_default("text-sm text-gray-500"), children: [
      label,
      required && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-rose-500", children: "*" }, void 0, false, {
        fileName: "app/components/FormElement.tsx",
        lineNumber: 38,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: label && "mt-1", children }, void 0, false, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-rose-500 text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: error }, void 0, false, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/FormElement.tsx",
      lineNumber: 41,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FormElement.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(FormElement, "Grbo0SZp65+lt0qzgYUHZcRjA1o=", false, function() {
  return [useField];
});
_c = FormElement;
var FormElement_default = FormElement;
var _c;
$RefreshReg$(_c, "FormElement");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useField,
  ValidatedForm,
  init_index_esm,
  require_remix_validated_form_with_zod_cjs,
  z2 as z,
  FormElement_default
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-XPW3HCEW.js.map
