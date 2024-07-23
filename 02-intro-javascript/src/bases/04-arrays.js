
//Array en JS
const array = [1,2,3,4];

let array2 = [...array,5];

console.log(array,array2);

const array3 = array2.map(function(valor){
    return valor*2;
});

console.log(array3)