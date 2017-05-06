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

function getCount(collection) {
  var count;

  if (collection.length != 1) {
    count = parseInt(collection.substring(collection.length - 1));
  }
  else count = 1;

  return count;
}

function builtArray(result, collection) {

  result.push({key: collection.charAt(0), count: getCount(collection)});

  return result;
}

function countSameElements(collection) {
  var result = [{key: 'a', count: 0}];
  var t;

  for (var i = 0; i < collection.length; i++) {
    t = isExist(result, collection[i]);
    if (t >= 0) {
      result[t].count++;
    }
    else {
      result = builtArray(result, collection[i]);
    }
  }

  return result;
}

function createUpdatedCollection(collectionA, objectB) {

  var collectionC;

  collectionC = countSameElements(collectionA);
  for (var i = 0; i < collectionC.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (collectionC[i].key == objectB.value[j] && collectionC[i].count >= 3) {
        collectionC[i].count = collectionC[i].count - parseInt(collectionC[i].count / 3);
      }
    }
  }

  return collectionC;
}
