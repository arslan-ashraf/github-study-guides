class SomeSingletonObject {
	constructor() {
		// If an instance already exists, return it
		if (SomeSingletonObject.instance) {
			return SomeSingletonObject.instance
		}

		// If an instance doesn't already exist, 
		// then initialize it with a random value
		this.value = Math.random() // Example property
		SomeSingletonObject.instance = this  // Store the instance for future use
	}

	getValue() {
		return this.value
	}
}


const instance1 = new SomeSingletonObject()
const instance2 = new SomeSingletonObject()

console.log(instance1 === instance2) // true, since both are the same instance
console.log(instance1.getValue()) // e.g., 0.123456
console.log(instance2.getValue()) // Same value as instance1