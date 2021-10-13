const patients = require("./patients");

// declare function
//function displayFullName(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  //const { firstName, lastName } = patient;

  //const fullName = `${firstName} ${lastName}`;

  //console.log(fullName);
//}

// pass as callback
//patients.forEach(displayFullName);

// pass anonymous function directly
// patients.forEach(function(patient) {
//   HERE IS HOW TO CHECK YOURSELF
//   console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
//  const { firstName, age } = patient;

//   console.log(`${firstName} - age: ${age}`);
// });

// DIY's
// - for each patient log their weight
// - for each patient, log their last name and gender
// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName

// function displayPatientWeight( patient){
//     const {firstName, weight} = patient
//     const patientNameWeight = `${firstName} ${weight}`
//     console.log( patientNameWeight)
// }
// patients.forEach(displayPatientWeight)

// function displayFullName (x){
//     const {firstName, lastName} = x
//     const fullname = `${firstName} ${lastName}`
//     console.log (fullname)
// }

// patients.forEach(displayFullName)

// function displayLastnameGender (patient){
//     const {lastName, gender} = patient
//     const lastNameGender = `${ lastName} ${gender}`
//     console.log(lastNameGender)
// }

// patients.forEach(displayLastnameGender)

// const {lastName,gender} = patient; 

// console.log (lastName,gender)

function basedOnGender (patient){
    if ( patient.gender === "m"){
        console.log("Mr" `${patients.lastName}`)
    }
    else { 
        console.log("Mrs")
    }
}

patients.forEach(basedOnGender)

