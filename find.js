function find(arr, value) {
 for (n = 0; n < arr.length ; n++){
   if(arr[n] == value)
      return n
 }
 return -1
}

console.log(find([1, 5, 1, 9, 7], 7)) // 4
console.log(find([1, 5, 7, 8, 9], 17)) // -1




