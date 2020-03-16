'use strict';
function stars(line){
  var strStar = '';
  for (let index = 1; index <= line; index++) {
    strStar += '*';
    console.log(strStar);

  }
}
stars(5);
