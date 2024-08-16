var arr = [
    5,
    'Elisio', 
    true,
    {name: 'Eli', number: 1}
] 
console.log(arr)
console.log(arr.length);

var arr2 = [10, 20, 30, 0]
console.log(arr2[2])
arr.forEach(function(item) {
    console.log(item)
})

arr.concat(arr2)
console.log(arr);
arr.push(10)
console.log(arr)
arr.copyWithin(8, 10)
console.log(arr)
arr.lastIndexOf(5)
console.log(arr);
arr.reverse()
console.log(arr)
arr.toString()
console.log(arr)
arr.reduce(function(acc, item) {
    console.log(acc + 10)
})
arr.sort()
console.log(arr)
arr.values()
console.log(arr)
arr.length = 0
console.log(arr)
arr = ['x', "y", "z", 'f', 'g', 'h', 'r', 
    's', 'p', 'x', 'd', 'e', 'f', 'g', 'h',
    'r', 'k', "l", "m", "n", "o", "p", "q",
    'a', "b", "c", "d", "e", "f", "g"]
console.log(arr)
console.log(arr.length);
arr.sort()
console.log(arr);
arr.reverse();
console.log(arr);