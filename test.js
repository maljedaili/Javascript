function divise(a, b) {
    if (b == 0)
        return null
    return a / b
}

console.log(divise(4,2))
console.log(divise(4,0))


function numberSum(N) {
    var total = 0;
      for(var i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  console.log(numberSum(N))