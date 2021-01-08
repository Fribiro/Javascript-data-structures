const ids = new Set( );

ids.add('abc');
ids.add(1);
ids.add('bb2');
ids.add(1);//not displayed

console.log(ids);
for (const b of ids) {
	console.log(b); 
}

console.log(ids[1]);//won't work and gives undefined

//to get/retrieve a value you use has
console.log(ids.has('abc'));

ids.delete('bb2');

console.log(ids);

 