'use strict';
function greaterThan(arr,num){
  var greaterNum = 0 ;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]>num){
      greaterNum++;
    }

  }
  return greaterNum;
}
console.log(greaterThan([1,2,3,4],2));
console.log(greaterThan([2,4,8],8));
