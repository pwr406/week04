const books = [
    {
        id: 0,
        title: "Jane Eyre",
        genre: "Classic"
    },
    {
        id: 1,
        title: "Ancillary Justice",
        genre: "Science Fiction"
    },
    {
        id: 2,
        title: "Atomic Habits",
        genre: "Nonfiction"
    },
    {
        id: 3,
        title: "Dune",
        genre: "Science Fiction"
    },
]

// Practice Ideas:
// Map - map each book in this style: "Jane Eyre (Classic)"
const map1 = books.map(books => books.title + " (" + books.genre + ")")
console.log(map1);
// Filter - filter for all Science Fiction books (Ancillary Justice, Dune)
const sciFiResult = books.filter (books => books.genre === "Science Fiction");
console.log(sciFiResult);
// Find - find the book with the id of 2 (Atomic Habits)
const idFind = books.find(books => books.id === 2);
console.log (idFind);

const products = [
    {
        id: 0,
        name: "Doritos",
        row: 1,
        price: 1
    },
    {
        id: 1,
        name: "Fruit Snacks",
        row: 1,
        price: 2
    },
    {
        id: 2,
        name: "Water Bottle",
        row: 2,
        price: 1
    },
    {
        id: 3,
        name: "Power Bar",
        row: 2,
        price: 3
    },
    {
        id: 4,
        name: "Sprite",
        row: 3,
        price: 1
    },
    {
        id: 5,
        name: "Poptart",
        row: 3,
        price: 2
    },
]

// Practice Ideas:
// Map - map each product in this style: "Row 1 - $1 Doritos"
console.log(products.map(products => `Row ${products.row} - $${products.price} ${products.name}` ))
// Filter - filter for all products in row 3 (Sprite, Poptart)
console.log(products.filter(products => products.row === 3));
// Filter - filter for all products that are cheaper than $2 (Doritos, Water Bottle, Sprite)
console.log(products.filter(products => products.price < 2));
// Find - find the product with the id of 2 (Water Bottle)
console.log(products.find(products => products.id === 2))
// Find - find the product in row 2 with a price of 3 (Power Bar)
console.log(products.find(products =>products.row === 2 && products.price === 3 ))

const appointments = [
    {
        id: 0,
        startTime: "12 PM",
        endTime: "1 PM",
        date: "Feb 3rd",
        name: "Lunch",
        important: false
    },
    {
        id: 1,
        startTime: "1 PM",
        endTime: "3 PM",
        date: "Feb 3rd",
        name: "Meeting with Boss",
        important: true
    },
    {
        id: 2,
        startTime: "7 PM",
        endTime: "9 PM",
        date: "Feb 4th",
        name: "Date",
        important: true
    },
]

// Practice Ideas:
// Map - map each appointment in this style: "Feb 3rd, 12 PM - 1 PM -- Lunch"
console.log (appointments.map(appointments => ` ${appointments.date}, ${appointments.startTime} - ${appointments.endTime} -- ${appointments.name} `))
// Filter - filter for all important appointments (Meeting with Boss, Date)
// Filter - filter for all appointments on Feb 3rd (Lunch, Meeting with Boss)
// Find - find the appointment with the id of 2 (Date)
// Find - find the appointment on Feb 3rd that starts at 1 PM (Meeting with Boss)





