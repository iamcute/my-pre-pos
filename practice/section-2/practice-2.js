'use strict';

function countSameElements(collection) {
  var result = [{key:'a',count:0}];
  var t=0;

  for(var i=0;i<collection.length;i++){
    if (result[t].key == collection[i].charAt(0)){
      result[t].key = collection[i].charAt(0);
      result[t].count++;
    }
    else{
      t++;
      result[t] = new Object();
      result[t].key = collection[i].charAt(0);
      if(collection[i].length!=1){
        result[t].count = parseInt(collection[i].substring(collection[i].length-1));
      }
      else result[t].count = 1;
    }
  }
  //console.log(result);
  return result;
}
var collection = [
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];
countSameElements(collection);
