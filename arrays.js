const book = {
  author: "J.K. Rowling",
  title: "Harry Potter and the Philosopher's Stone",
  publisher: "Bloomsbury Pub Ltd.",
  ISBN: 9780747532743,
};

// 1 argument: book
//displayBook(book);
//console.log (book.title)

//const arrayLenght = book.length
//console.log(arrayLenght)

//const title = book ["publisher"]
//console.log (title)

//const propertyStoredInVariable = "author"
//const author = book [propertyStoredInVariable]
//console.log (author)

//const fansite = book ["fan site"]
//const adaptation = book ["film-adaptation"]

const { author, title, publisher, ISBN} = book;
console.log (author, title)

// we declare an array of strings
const names = ["David", "Rein", "Jeroen"];

// we declare a function that takes a name
function greet(name) {
  console.log(`Hi ${name}`);
}

// we use the forEach method to tell javascript
// we pass the greet function to forEach as an argument:
// execute the greet function for every element of the array
names.forEach(greet);