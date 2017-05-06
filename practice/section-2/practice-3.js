'use strict';

function isExist(result, colletion) {
  var flag = -1;

  for (var i = 0; i < result.length; i++) {
    if (result[i].name == colletion.charAt(0)) {
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

function getCount(collection) {
  var count;
  var number = [];

  if (collection.length != 1) {
    for (var j = 1; j < collection.length; j++) {
      if (isNaN((collection.charAt(j))) != 1) {

        number.push(j);
      }
    }
    count = parseInt(collection.substring(number[0], number[number.length - 1] + 1));

  }
  else count = 1;

  return count;
}

function builtArray(result, collection) {

  result.push({name: collection.charAt(0), summary: getCount(collection)});

  return result;
}

function countSameElements(collection) {
  var result = [{name: 'a', summary: 0}];
  var t;

  for (var i = 0; i < collection.length; i++) {
    t = isExist(result, collection[i])

    if (t >= 0) {

      result[t].summary += getCount(collection[i]);
    }
    else {
      result = builtArray(result, collection[i]);
    }
  }

  return result;
}
