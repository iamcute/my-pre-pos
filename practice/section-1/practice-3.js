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

  return result;
}
