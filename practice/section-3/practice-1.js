'use strict';

function createUpdatedCollection(collectionA, objectB) {

  for (var i=0;i<collectionA.length;i++){

    for(var j=0;j<objectB.value.length;j++){

      if(collectionA[i].key==objectB.value[j]){

        collectionA[i].count--;
      }
    }
  }
 // console.log(collectionA);
  return collectionA;
}
var  collectionA = [
  {key: 'a', count: 2},
  {key: 'e', count: 2},
  {key: 'h', count: 2},
  {key: 't', count: 2},
  {key: 'f', count: 2},
  {key: 'c', count: 2},
  {key: 'g', count: 2},
  {key: 'b', count: 2},
  {key: 'd', count: 2}
];
var  objectB = {value: ['a', 'd', 'e', 'f']};

createUpdatedCollection(collectionA, objectB)
