
//F(n) = F(n-1) + F(n-2)
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...



function fibonacci(num) {
    var i = 1, N = 0
    while (num >= 1) {
    N = i + N
    i = N - i
    num--
    console.log(N)
    }
    //return (N)
    }
    
    function Person(name) {
        this.name = name;
        this.greeting = function() {
          alert('Hi! I\'m ' + this.name + '.');
        };
        console.log (person(name)) 
      }