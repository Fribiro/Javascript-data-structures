const person = {
	firstName: 'Max', 
	age: 31, 
	hobbies: ['sports', 'coding'],
	greet(){
		console.log('Hi I am ' + this.firstName);
	}
};
//every identifier can only be used once eg having a second firstName would overwrite the first one

//can't use for of loop
// for (const el of person){
// 	console.log(el);// error person is not iterable
// }

//can't access elements by index
console.log(person[0]);//gives undefined

//access by key name
console.log(person['firstName']);
//or use dot notation to access the elements
console.log(person.firstName);

//add properties with dot notation
person.lastName = 'Don';
console.log(person);

//use delete operator to delete property
delete person.age;
console.log(person);

person.greet();