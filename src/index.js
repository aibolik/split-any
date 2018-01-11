module.exports = function splitAny(any) {
    if (typeof any === 'string') {
      var result = [];
      var list = any.split(' ');
      if (list.length === 1) {
        return list[0].split('');
      }
      else {
        return list.map(function(any) {
          return any.split('');
        });
      }
    }

    if (typeof any === 'number') {
      var result = [];
      var negative = false;
      if (any < 0) {
        negative = true;
        any = any * (-1);
      }
      while(any > 0) {
        result.unshift(any%10);
        any = Math.floor(any / 10);
      }
      if (negative) {
        result.unshift('-');
      }
      return result;
    }

    if (Array.isArray(any)) {
      return any.map(function(item) {
        return splitAny(item);
      });
    }

    if (typeof any === 'object') {
      var result = [];
      Object.keys(any).forEach(function(key) {
        if (key && any.hasOwnProperty(key)) {
          result.push([key, any[key]]);
        }
      });
      return result;
    }

    if (typeof any === 'function') {
      return splitAny(any());
    }

}
