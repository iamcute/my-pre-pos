'use strict';


function collectSameElements(collectionA, collectionB) {
  var result = [];
  var t = 0;


  for(var i = 0;i<collectionA.length;i++){

    for(var j = 0;j<collectionB.value.length;j++){

      if(collectionA[i]==collectionB.value[j]){
        result[t] = collectionA[i];
        t++;
      }
    }


  }

  //console.log(result);
  return result;
}
var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
var collectionB = collectionB = {value: ['a', 'd', 'e', 'f']};
collectSameElements(collectionA, collectionB);
