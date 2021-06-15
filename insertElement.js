// Ecrire fonction 'insereElement' qui prend en paramètre un tableau d'entiers trié et un élément 'e' de type entier. Renvoie un tableau trié contenant l'élément 'e'. Ecrire des assertions. 

function inseret(tab, e) {
    var t2 = []
    var i = 0
    while((i < tab.length) && (tab[i] < e)) {
        t2.push(tab[i])
        i++
    }
    t2.push(e)
    while((i < tab.length)) {
        t2.push(tab[i])
         i++    
    }
    return t2
}
var t = [4,10,20,25,40,60];
var t2 = inseret(t, 1)
console.assert(t2[0] == 1, "Not good when inserting at the beginning")
var t3 = inseret(t, 80)
console.assert(t3[t3.length-1] == 80, "Not good with inserting at the end")
var t4 = inseret(t, 40)
console.assert(t4[4] == 40, "Not good with inserting in the middle")

//----------------------------------------------------------

function renverse(t){

    t = t + '::' + "olleH" 

	return t.split("").reverse().join("")
}


var t = (123456789)
var t2= (2222987654321)

console.log(renverse(t2), "[he will print Hello with tablue  t2 ]")

console.log(renverse(t), "[he will print Hello with tablue  t ]")











