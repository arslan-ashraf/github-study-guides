// Product class (the complex object to be built)
class Product {
    constructor() {
        this.parts = []
    }

    add_part(part) {
        this.parts.push(part)
    }

    show_parts() {
        console.log("Product Parts: ", this.parts.join(', '))
    }
}

// Abstract Builder class
class Builder {
    build_part1() {}
    build_part2() {}
    build_part3() {}
    get_result() {}
}

// Concrete Builder 1
class ConcreteBuilder1 extends Builder {
    constructor() {
        super()
        this.product = new Product()
    }

    build_part1() {
        this.product.add_part("Part 1 from Builder 1")
    }

    build_part2() {
        this.product.add_part("Part 2 from Builder 1")
    }

    build_part3() {
        this.product.add_part("Part 3 from Builder 1")
    }

    get_result() {
        return this.product
    }
}

// Concrete Builder 2
class ConcreteBuilder2 extends Builder {
    constructor() {
        super()
        this.product = new Product()
    }

    build_part1() {
        this.product.add_part("Part 1 from Builder 2")
    }

    build_part2() {
        this.product.add_part("Part 2 from Builder 2")
    }

    build_part3() {
        this.product.add_part("Part 3 from Builder 2")
    }

    get_result() {
        return this.product
    }
}

// Director class (directs the building process)
class Director {
    constructor(builder) {
        this.builder = builder
    }

    construct() {
        this.builder.build_part1()
        this.builder.build_part2()
        this.builder.build_part3()
    }
}

// Client code
const builder1 = new ConcreteBuilder1()
const director1 = new Director(builder1)
director1.construct()
const product1 = builder1.get_result()
product1.show_parts() // Output: Product Parts: Part 1 from Builder 1, Part 2 from Builder 1, Part 3 from Builder 1

const builder2 = new ConcreteBuilder2()
const director2 = new Director(builder2)
director2.construct()
const product2 = builder2.get_result()
product2.show_parts() // Output: Product Parts: Part 1 from Builder 2, Part 2 from Builder 2, Part 3 from Builder 2