'use strict';

function reset(collectionA) {
  var ret = [];

  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionA[i].key.length; j++) {
      ret.push(collectionA[i].key[j]);
    }
  }

  return ret;
}

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var t = 0;

  collectionA = reset(collectionA);
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.value.length; j++) {
      if (collectionA[i] == collectionB.value[j]) {
        result[t] = collectionA[i];
        t++;
      }
    }
  }
  return result;
}

