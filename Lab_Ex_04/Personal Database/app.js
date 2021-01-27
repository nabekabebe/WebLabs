var height;
var weight;

// height = parseFloat(prompt('enter height in cm'));
// weight = parseFloat(prompt('enter weight in kg'));

var calcBmi = function () {
  let h = parseFloat(this.height);
  let w = parseFloat(this.weight);

  let bmi = (w / Math.pow(h / 100, 2)).toFixed(2);
  if (bmi < 18.0) {
    alert('You are under weight: check the console.');
  } else if (bmi >= 18 && bmi <= 24.9) {
    alert('You are normal: check the console.');
  } else if (bmi > 24.9 && bmi <= 29.9) {
    alert('You are overwieght: check the console.');
  } else if (bmi > 29.9) {
    alert('You are obese: check the console.');
  }
};
// calcBmi(height, weight);

// var firstName;
// var lastName;
// var age;
// var job;
// let tempAge;
// let isEligibleToVote;
// let numberOfFamily;
// var birthYear;

// // Receive the values from input
// firstName = prompt('Enter Your First Name');
// lastName = prompt('Enter Your Last Name');
// job = prompt('What is Your Profession ?');
// age = prompt('Enter Your Age');
// numberOfFamily = prompt('Number of Family  ? ');

// tempAge = parseInt(age);
// let familyMember = new Array();

// // check Eligibility
// if (tempAge >= 18) {
//   isEligibleToVote = true;
// } else {
//   isEligibleToVote = false;
// }

// for (let i = 0; i < parseInt(numberOfFamily); i++) {
//   familyMember[i] = prompt('Your Family  Members ' + (i + 1));
// }

// birthYear = prompt('Enter Your Birth Year');
// let tempAge = ageCalc(birthYear);

// //age calculator function
// function ageCalc(birthYear) {
//   return new Date().getFullYear() - birthYear;
// }

// // Display  the result on console from input
// console.log('Here is your personal info ');
// console.log('Full Name: ' + firstName + ' ' + lastName);
// console.log('Profession : ' + job);
// console.log('Age : ' + age + ' ' + 'years old');
// console.log('Is Eligible to Vote : ' + isEligibleToVote);
// console.log('Family Members: ');
// familyMember.forEach(function (member, i) {
//   console.log('Family Member  ' + (i + 1) + ' : ' + member);
// });
// console.log('Age : ' + tempAge + ' ' + 'years old');
