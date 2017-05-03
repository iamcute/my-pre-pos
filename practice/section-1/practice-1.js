'use strict';
 /*选出两个集合中相同的元素*/
function collectSameElements(collectionA, collectionB) {
    var result = [];
    var t = 0;

    for(var i = 0;i<collectionA.length;i++){

        for(var j = 0;j<collectionB.length;j++){

            if(collectionA[i]==collectionB[j]){
                result[t] = collectionA[i];
                t++;
            }
        }


    }

    //console.log(result);
    return result;
}
var collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
var collectionB = ['a', 'd', 'e', 'f'];
collectSameElements(collectionA, collectionB);
