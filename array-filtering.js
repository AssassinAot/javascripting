// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var filtered;
// filtered = numbers.filter(
//     function evenNumbers(number){
//         return number % 2 === 0;
//     } 
// );
// console.log(filtered);

// var filterbyForLoop = [];
// for (var i = 0; i <  numbers.length ; i ++){
//      var num = numbers[i];
//      if(num % 2 === 0){
//         filterbyForLoop.push(num);
//      }
// }
// console.log(filterbyForLoop);

var numbers = [1,2,4,5,6,7,8,9,100];
var explan;
for (var i = 0; i < numbers.length; i++) {
    explan = (numbers[i] === 100 ? numbers[i] : 0);
}
console.log([explan]);