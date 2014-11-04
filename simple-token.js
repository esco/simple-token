var UID = 0;
var UID_KEY = '_simple_token_uid_';

function tokenize(obj) {
  switch (typeof obj) {
    case 'string':
        return JSON.stringify(obj);
    case 'boolean':
    case 'number':
        return ''+obj;
  }

  if (undefined === obj) return 'undefined';
  if (null === obj) return 'null';

  if (!obj[UID_KEY]) {
    obj[UID_KEY] = ++UID;
    if (Object.defineProperty) {
      Object.defineProperty(obj, UID_KEY, {enumerable:false});
    }
  }
  return '$'+obj[UID_KEY];
}

module.exports = tokenize;