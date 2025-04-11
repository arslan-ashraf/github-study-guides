class User {
	constructor(name) {
		this.name = name
		this.age = null
		this.phone = null
		this.address = null
	}

	set_age(age) {
		this.age = age
		return this
	}

	set_phone(phone) {
		this.phone = phone
		return this
	}

	set_address(address) {
		this.address = address
		return this
	}

	build() {
		return this
	}
}


// Usage
const user1 = new User("abc").set_age(30).set_phone("123-456-7890").build()
const user2 = new User("def").set_address("123 Main St").build()
const user3 = new User("ghi").set_age(25).build()

console.log(user1)
console.log(user2)
console.log(user3)