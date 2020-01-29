'use strict';

let arr = ['23', '34', '55', '456', '12', '32', '678'];

arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

let i, b;

let arrNext = function(){
    for ( let i=2; i< 100; i++ ) {
    
        for (let b=2; b < i; b++ ){
            if (i % b == 0) {
                break;
            }
            console.log('Число делится на 1 и', i);
        }
    }
};
console.log(arrNext());