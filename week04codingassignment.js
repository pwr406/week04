
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
let totalLetters = 0 //created totalLetters variable as a global variable to use outside of the loop. Set to zero to start - will store the number of letters in each name
for (let i = 0; i < names.length; i++) { //for loop to iterate through the names array
    totalLetters += names[i].length; // adding the value for the length of each name into the totalLetters variable. names[i] goes through each name in the variable and .length checks the length of the value at each element.
}

console.log (`average number of letters per name: ${totalLetters / names.length}`); //console.log to show the average length of the names. Used variable declared earlier and divided by names.length to divide by the number of elements in the array.
console.log ("b:")
let newNames = '' //created global variable newNames to store concatenated names - set to an empty value using ' '. 
for (let i = 0; i < names.length; i++) { //for loop to iterate through the names array.
   newNames += (names[i] + " " ); // adding array values to newNames using += added a space by using + " " 
}
   console.log (newNames); //console.log of newNames variable.


console.log ("#3---------------------------------------")
console.log (`To access the last element of any array you use array.length - 1`)

console.log ("#4-----------------------------------------")
console.log ("to access the first element of any array you use array[0]")

console.log ("#5------------------------------------------")
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log (nameLengths);

console.log("#6------------------------------------------")
let nameSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
    nameSum += nameLengths[i];
}
console.log (`Sum of all the elements in the nameLengths array: ${nameSum}`);

console.log (`#7------------------------------------------`);
const wordCombine = (word, n) => {
    let finalCombo = '';
    for (let i = 0; i < n; i++) {
        finalCombo += word;
    }
    return finalCombo;
}
console.log (wordCombine('Hello', 3));

console.log(`#8----------------------------------------`);
let fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log (fullName('Paul', 'Ryan'))

console.log( `#9--------------------------------------`);

let over100 = (array1) => {
    let result = 0;    
    for (let i = 0; i <array1.length; i++) {
        result += array1[i];
    }
if (result > 100){
    return true;
    } else {
        return false;
    }
}
console.log(over100([4, 5, 6, 9, 10]));
console.log(over100([80, 90, 100]));

console.log (`#10-------------------------------------`);

let arrayAverage = (array2) => {
    let average = 0;
    for (let i = 0; i < array2.length; i++) {
    average += array2[i];
    return average / array2.length ;
}

}
console.log (arrayAverage([1, 2, 3, 10, 10]));
