let a = 10
let b = 25
let c = null

console.log("O valor de a é:", a)
console.log("O valor de b é:", b)

c = b
b = a
a = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10