class SuperType {
	constructor(name) {
		this.name = name;
		this.colors = ['red', 'blue', 'green'];
	}
	
	sayName() {
		console.log(this.name);
	}
}

class SubType extends SuperType {
	constructor(name, age) {
		// 相当于SuperType.call(this, name);
		super(name);
		this.age = age;
	}

	sayAge() {
		console.log(this.age);
	}
}

let instance1 = new SubType('Bill', 25);
instance1.sayName(); // Bill
instance1.sayAge(); // 25

