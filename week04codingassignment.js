

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log (ages[ages.length - 1] - ages[0])
ages.push(100);
console.log ( `this is the new array: ${ages}`) 
console.log (ages[ages.length - 1] - ages[0])

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];

}
console.log (sum / ages.length)
