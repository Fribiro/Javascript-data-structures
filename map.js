const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null);

const Kenya = {name:'Kenya', population: 44000000};
//kenya is a valid key despite being an object
resultData.set(Kenya, 1000)

for (const el of resultData){
	console.log(el);
}

//access elements
//dot notation and bracket notation found in objects is not supported
console.log(resultData.get('average'));
console.log(resultData.average);//gives undefined and not an error

//delete
resultData.delete(Kenya);
console.log(resultData);
