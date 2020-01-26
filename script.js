let num = 266219,
    result = [...num.toString()].reduce((a,b) => a*b ),
    cube = (result**3).toString().substring(0 , 2);

console.log(result);
console.log(cube);
