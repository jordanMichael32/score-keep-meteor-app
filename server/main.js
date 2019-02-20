import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {





  // //creating ES6 classes
  // class Person {
  //   //creating constructor for Person
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //
  //   //creating methods
  //   getGreeting() {
  //     //Hi! I am Andrew.
  //     //return 'Hi! I am ' + this.name + '.';
  //     //practicing with template strings
  //     return `Hi! I am ${this.name}.`;
  //   }
  //
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // }
  //
  // //extending the class Person, creating subclasses
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //
  //   //methods
  //   getGreeting() {
  //     if (this.title) {
  //       return `Hi! I am ${this.name}. I work as a ${this.title}.`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //
  //   getGreeting() {
  //     if (this.preferredLanguage) {
  //       return `H!! I am ${this.name}. I am a ${this.preferredLanguage} developer.`
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // let me2 = new Programmer();
  // console.log(me2.getGreeting());
});

// //Object Spead Operator
// //Allows you to copy all properties from one object to another
// let user = {
//   name: 'Andrew',
//   location: 'Philadelphia'
// };
//
// let person = {
//   //These three dots allow you to use all of the properties of the user object
//   ...user,
//   age: 25
// };
//
// console.log(person);
//
// //Object Property Shorthand
// //Define object properties when you have a variable of the same name
// let bike = 'Scott';
// let stuff = {
//   bike
// };
//
// console.log(stuff);
//
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
//
// let yearBuilt = 1992;
//
// let fullHouse = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// };
//
// console.log(fullHouse);
