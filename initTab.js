// function inittab(n, v){
//     return n + v;
// }
// console.log(inittab(3,4));


// function add(n) {
//     return function(v) {
//       return n + v;
//     };
//   };
  
//   var add_5 = add(5);
//   var add_10 = add(10);
  
//   console.log(add_5(2));  // 7
//   console.log(add_10(2)); // 12


  function inittab(n , v)
{
  var result = []
  for(i = 0; i < n ; i++){
    result.push(v)
  }
  return result
}
console.log(inittab(20 , "Moinv"))


