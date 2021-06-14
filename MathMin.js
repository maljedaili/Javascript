function tabMin(t) {
    //console.log(t)
    //t = [10, 5, 20]
    return Math.min(...t)
}

var tab = [10, 5, 3, 1, -23]
var test = tabMin(tab)
console.log(test);

function afficheTab(tab) {
    var i;
    for (i = 0; i < tab.length; i++) {
        console.log(tab[i])
    }

    
}
var tab2 = [10, 5, 3, 1, -23]
afficheTab(tab2)

//---------------------------
function tabmain2(tab) {
    
        var i; 
        var min = tab[0];
        for (i = 0; i < tab.length; i++) {
            if (tab[i] < min)
            min = tab[i]
        }
    return min
}
var tab = [10, 5, 3, 1, 2, 3, 5, 6, 17]
console.log("Le minimum est : " + tabmain2(tab))


function tabmax(tab) {

    var i;
    var max = tab[0]
    ;
    for ( i = 0; i < tab.length; i++){
        if (tab[i] > max)
        max = tab[i]
    }
    return max
}
var tab = [10, 5, 3, 1, 2, 3, 5, 6, 17]
console.log("Le maximum est : " + tabmax(tab))


var a = "world", b = "hello"
var tmp = a
a = b;
b = tmp;
console.log(a + " " + b)


var a = "name", b = "my", c = "is"
var ttp = a,
a=b;
b=ttp;
console.log(a + " " + b + " " + c + "")






