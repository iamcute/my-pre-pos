'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var result = [{key:'a',count:0}];
  var t=0;

  for(var i=0;i<collectionA.length;i++){
    if (result[t].key == collectionA[i]){
      result[t].key = collectionA[i];
      result[t].count++;
    }
    else{
      t++;
      result[t] = new Object();
      result[t].key = collectionA[i];
      result[t].count = 1;
    }
  }



  for (var i=0;i<result.length;i++){

    for(var j=0;j<objectB.value.length;j++){

      if(result[i].key==objectB.value[j]&&result[i].count>=3){

        result[i].count = result[i].count-parseInt(result[i].count/3);
      }
    }
  }

  return result;
  //console.log(collectionA);
}
var  collectionA = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd', 'd', 'd', 'd', 'd'
];

var  objectB = {value: ['a', 'd', 'e', 'f']};

createUpdatedCollection(collectionA, objectB)
