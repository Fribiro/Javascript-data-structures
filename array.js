const names = ['Julie','Festus','Frank'];

console.log(names[1]); 
console.log(names.length);

for (const b of names) {
	console.log(b); 
}

names.push('Felix');
names.push(2021);
console.log(names.length);

//now index of value
//problem of findindex is that it has to go through all elements till the one it's looking for
const julieIndex = names.findIndex( b => b === "Julie");
console.log(julieIndex);

//delete
//also is work intensive because items have to be moved a step back once any item is deleted
names.splice(2, 1);
console.log(names);

