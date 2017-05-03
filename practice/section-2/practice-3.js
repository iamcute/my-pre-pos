'use strict';

function countSameElements(collection) {
  var result = [{key:'a',count:0}];
  var t=0;

  var k=0;
  for(var i=0;i<collection.length;i++){

    if (result[t].key == collection[i].charAt(0)){

      if(collection[i].length!=1){
        for(var j=1;j<collection[i].length;j++){


          if(isNaN((collection[i].charAt(j)))!=1){

            if(collection[i].charAt(j-1)=='[') {

              result[t].count += parseInt(collection[i].substring(j,collection.length));
              j=collection[i].length;
            }
            else   result[t].count += parseInt(collection[i].charAt(j));
          }
        }
      }
      else result[t].count++;
    }

    else{
      t++;
      result[t] = new Object();
      result[t].key = collection[i].charAt(0);
      if(collection[i].length!=1){

        for(var j=1;j<collection[i].length;j++){

          if(isNaN((collection[i].charAt(j)))!=1){

            if(collection[i].charAt(j-1)=='[') {

              result[t].count = parseInt(collection[i].substring(j,collection.length));
            }
            else result[t].count = parseInt(collection[i].charAt(j));
          }
        }
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
  'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
  't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c:8',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd-5'
];
countSameElements(collection);
