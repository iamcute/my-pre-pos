'use strict';

/* measure 1

 function resetMessure(collectionB,ret) {

 for (var i = 0, j = collectionB.length; i < j; i++) {

 if (collectionB[i].length != 1) {
  resetMessure(collectionB[i], ret);
 }
 else {
  ret.push(collectionB[i]);
 }

 }
 }
 function reset(collectionB) {

 var ret = [];
 resetMessure(collectionB, ret);
 return ret;
 }

 */

//measure 2

function reset(collectionB) {

  return collectionB.join().split(',');

}

function collectSameElements(collectionA, collectionB) {
  var result = [];
  var t = 0;

  collectionB = reset(collectionB);
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionB.length; j++) {
      if (collectionA[i] == collectionB[j]) {
        result[t] = collectionA[i];
        t++;
      }
    }

  }

  return result;
}
