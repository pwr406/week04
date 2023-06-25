
console.log("#1------------------------")
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log (ages); //showing the ages array
console.log("Subtract the value of the first element in the array from the value of the last element in the array: " + (ages[ages.length - 1] - ages[0])) //In order to programatically subtract the first element in the array from the last element in the array, I used ages[ages.length -1]. The value in the [] returns the length of they array (8), and then subtracts 1 to give me the value at the 7th index which is what we need since arrays start at the 0 index.
ages.push(100); //ages.push(100) adds 100 to the end of the array 
console.log ( `this is the updated array: ${ages}`) //using console.log to display the updated array. Also used template literals to display with out concatenating values.
console.log ("Subtract the value of the first element in the array from the value of the last element in the array: " + (ages[ages.length - 1] - ages[0])); //showing that my forumla worked with the updated array. 
console.log (`Subtract the value of the first element in the array from the value of the last element in the array: ${(ages[ages.length - 1] - ages[0])}`)
let sum = 0; //declared the sum variable outside of the for loop so I could call it later in the code
for (let i = 0; i < ages.length; i++) { //set the loop to last as long as the ages array by using ages.length
    sum += ages[i]; // sum starts at 0 and then used += to add each value in the array to sum as the loop iterates through it

}
console.log (`Average age: ${sum / ages.length}`) //displayed the average age by dividing the total sum we got from the loop by the length of the array which is how many values we have.

console.log ("#2------------------------------------------")
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log (names);
let totalLetters = 0
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
console.log (totalLetters / names.length)