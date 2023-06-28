
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
const nameLengths = []; //set variable nameLengths to an empty array.
for (let i = 0; i < names.length; i++) { //used a for loop to iterate through the names array that was created earlier.
    nameLengths.push(names[i].length); //used .push to add to the nameLengths array. used names[i].length to add the length of each value in the names array. 
}
console.log (nameLengths);
//maybe use map here? Could be cleaner than for loop?

console.log("#6------------------------------------------")
let nameSum = 0; //created a variable to keep track of the sum of all the elements in the nameLenghts Array.
for (let i = 0; i < nameLengths.length; i++) {
    nameSum += nameLengths[i]; //for loop iterated through the namelengths array and then added each value to the nameSum variable.
}
console.log (`Sum of all the elements in the nameLengths array: ${nameSum}`);

console.log (`#7------------------------------------------`);
const wordCombine = (word, n) => { //used arrow function to create function with two parametns.
    let finalCombo = ''; //created empty string variable 
    for (let i = 0; i < n; i++) { //for loop to iterate through based on n value.
        finalCombo += word; //adding word parameter to finalcombo
    }
    return finalCombo;
}
console.log (wordCombine('Hello', 3)); //called function in console.log

console.log(`#8----------------------------------------`);
const fullName = (firstName, lastName) => `${firstName} ${lastName}` //used one line arrow function with template literals to combine names.
console.log (fullName('Paul', 'Ryan'))

console.log( `#9--------------------------------------`);

const over100 = (array1) => { //created arrow function with one parameter
    let result = 0; // created result variable to use in for loop
    for (let i = 0; i <array1.length; i++) { //for loop to iterate through the array
        result += array1[i]; //adding each element of the array to the result variable. 
    }
if (result > 100){ //if/else statment to return true if result is greater than 100
    return true;
    } else {
        return false;
    }
}
console.log(over100([4, 5, 6, 9, 10])); //testing - expect false
console.log(over100([80, 90, 100]));// testing - expect true

console.log (`#10-------------------------------------`);

const arrayAverage = (array2) => { //arrow function to return average of elements in the array
    let total = 0; //created total variable to store element totals from array
    for (let i = 0; i < array2.length; i++) {
    total += array2[i]; //adding each element value to total
    }
return total / array2.length; //dividing total variable by amount of elements in the array.
}
console.log (arrayAverage([1, 2, 3, 10, 10]));

console.log(`#11------------------------------------`);
const greaterAverage = (firstArray, secondArray) => { //created arrow function with two parameters
    let average1 = 0;
    let average2 = 0;
    let firstArrayAverage = 0;
    let secondArrayAverage = 0;//created empty variables to hold values of loops
    
    for (let i = 0; i < firstArray.length; i++) {
    average1 += firstArray[i];
    firstArrayAverage = average1 / firstArray.length;}//for loop to find average of big array

    for (let i = 0; i < secondArray.length; i++) {
    average2 += secondArray[i];
    secondArrayAverage = average2 / secondArray.length;
    }//for loop to find small loop average
    
        if (firstArrayAverage > secondArrayAverage) { //if statement to compare first array to second array.
        return true;
        } else {
        return false;
      
    }
   
}
console.log(greaterAverage([3,4,7,10,5], [2, 5, 6]));//testing expect true
console.log(greaterAverage([2,3], [3,4,5,7,8,6,7])); //testing expect false

console.log(`#12------------------------------------`);
const willBuyDrink = (isHotOutside, moneyInPocket) => { //created arrow function with two parameters
    if (isHotOutside === true && moneyInPocket > 10.50) {//if statement to see if it is hot outside and money is over 10.50
        return true;
    }else {
        return false;
    }
}
console.log(willBuyDrink (true, 11)); //testing expect true
console.log(willBuyDrink(false, 12));//testing expect false
console.log(willBuyDrink(true, 5));//testing expect false

console.log (`#13--------------------------------`);

//created an arrow function to determing if it was time to work out. There
//are three parameters and the function checks to make sure you have enough time, are motivated and if you worked out yesterday. 
const timeToWorkOut = (timeAvaliable, motivated, workedOutYesterday) => {
    if (timeAvaliable >= 1 && motivated === true && workedOutYesterday === false) {
        console.log ("Time to work out");
    } else {
        console.log("No working out today");
    }
}
timeToWorkOut(2, true, false)
timeToWorkOut(.5, true, false)
 timeToWorkOut(2, false, false)
timeToWorkOut(2, true, true)