class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.previous = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()        // Stores key -> Node reference
        this.head = new Node(0, 0)  // Dummy head
        this.tail = new Node(0, 0)  // Dummy tail
        this.head.next = this.tail
        this.tail.previous = this.head
    }

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.remove(node)
            this.add_to_front(node)
            return node.value
        }
        return -1
    }

    put(key, value) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key))
        }
        
        const node = new Node(key, value)
        this.add_to_front(node)
        this.map.set(key, node)

        if (this.map.size > this.capacity) {
            const lru_node = this.tail.previous
            this.remove(lru_node)
            this.map.delete(lru_node.key)
        }
    }

    remove(node) {
        node.previous.next = node.next
        node.next.previous = node.previous
    }

    add_to_front(node) {
        const head_next = this.head.next
        this.head.next = node
        node.previous = this.head
        node.next = head_next
        head_next.previous = node
    }
}