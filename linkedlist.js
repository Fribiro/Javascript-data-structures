class LinkedList {
	constructor() {
		//initially both are null because we have no element
		this.head = null;//first element of the list
		this.tail = null;//last element of the list
	}

	//add element to the end
	append(value) {
		const newNode = {
			value: value, 
			next: null
		};//node must be an object because every element is linked to the next one also because the list does not know about its values hence if a value is used it will be lost

		if (this.tail) {
		this.tail.next = newNode;//newnode is stored in the next property of the previously last node
		}//check if you have a tail
		this.tail = newNode;//replace the old tail with our newnode
		if (!this.head) {
			this.head = newNode;
		}
	}

	//add element at the beginning
	prepend(value) {
		const newNode = {
			value: value, 
			next: this.head//previous first head, stores it to prevent deletion from garbage collection
		};

		this.head = newNode;
		if (!this.tail) {
			this.tail = newNode;
		}
	}

	//insert a value after a specified one
	insertAfter(value, afterValue) {
		const existingNode = this.find(afterValue);

		if (existingNode) {
			const newNode = {
			value: value, 
			next: existingNode.next
		};
		existingNode.next = newNode;
		}
	}

	//find first occurrence of an element
	find(value) {
		if (!this.head) {
			return;
		}

		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	//delete
	delete(value) {
		if (!this.head) {
			return;
		}

		//to delete first value
		while (this.head && this.head.value === value) {
			this.head = this.head.next;
		}

		let currentNode = this.head;

		while (currentNode.next) {
			if (currentNode.next.value === value) {
				currentNode.next = currentNode.next.next;
			}else {
				currentNode = currentNode.next;
			}
		}

		//update tail if you delete the last node
		if (this.tail.value === value) {
			this.tail = currentNode;
		}
	}

	//output list
	toArray() {
		const elements = [];

		let currentNode = this.head;
		while (currentNode) {
			elements.push(currentNode);
			currentNode = currentNode.next;
		}

		return elements;
	}
}

const LinkedList1 = new LinkedList(); 
LinkedList1.append(1);
LinkedList1.append('Hello');
LinkedList1.append('Festus');
LinkedList1.append('Festus');
LinkedList1.append(true);
LinkedList1.append(20.21);
LinkedList1.append('Kenya');
LinkedList1.prepend('First value');
LinkedList1.prepend('First value');

console.log(LinkedList1.toArray());

LinkedList1.delete('Festus');
LinkedList1.delete('First value');
LinkedList1.delete('Kenya');

console.log(LinkedList1.toArray());
console.log(LinkedList1.find('Festus'));
console.log(LinkedList1.find('Hello'));

LinkedList1.insertAfter('new value -1', 1);
LinkedList1.insertAfter('new value 2', 'Hello');

console.log(LinkedList1.toArray());
