'use strict';
function isExist(result, colletion) {
  var flag = -1;

  for (var i = 0; i < result.length; i++) {
    if (result[i].key == colletion.charAt(0)) {
      flag = i;
      break;
    }
  }

  if (flag >= 0) {
    return flag;
  }
  else {
    return -1;
  }
}

function countSameElements(collection) {
  var result = [{key: 'a', count: 0}];
  var t ;

  for (var i = 0; i < collection.length; i++) {
    t = isExist(result,collection[i]);
    if (t>=0) {
      result[t].count++;
    }
    else {

      result.push( {key: collection[i], count: 1});
    }
  }
  return result;
}

