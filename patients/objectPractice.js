const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"

//const {weight , age, height} = firstPatient
//console.log(weight, age, height)



const { firstName, lastName } = firstPatient
const fullName = `${firstName}  ${lastName}`
console.log (fullName)

const {dailyExercise} = firstPatient

if  (dailyExercise === "yes"){
    console.log("this patient exercises")
} else {
    console.log("does not exercise")
}

//loop
 for (let index = 0 ; index<patients.length ; index++)
 //console.log ( "what is index?", index)
 console.log ( patients[index].firstName , patients[index].lastName)

