// // patientByEmail.js
// const patients = require("./patients");
// const email =  process.argv[2]//"radolthineg@mayoclinic.com";

// //console.log(patients);

// const specificPatient = patients.find(function(patient){ 
//     return patient.email === email
// })
// if (specificPatient !== undefined) {
//     console.log( `Output:` , specificPatient)

// }else { 
//     console.log( `Patient with ${email} is not found`)}

// console.log(specificPatient);


// patient by telephoneNUmber

const patients = require("./patients")
const phoneNumber = process.argv[2]

const specificPatient = patients.find (function(patient){ 
    return patient.phoneNumber === phoneNumber
})


if (specificPatient !== undefined){
    console.log (`outuout`, specificPatient)
}else {
    console.log( `patient with: ${phoneNumber} is not found`)
}


