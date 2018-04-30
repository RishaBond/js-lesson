
function sum(a, b) {
    return a + b > 10;
}
sum(2,2);

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

let each = function(startArr, f){return f(startArr)};
let arr = [64, 49, 36, 25, 16];
let myFunc = function(a){
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        newArr[i]=Math.sqrt(a[i]);
    }
    return newArr;
};
console.log(each(arr, myFunc));

