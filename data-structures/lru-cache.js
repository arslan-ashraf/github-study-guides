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
            this._remove(node)
            this._add(node)
            return node.value
        }
        return -1
    }

    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key))
        }
        
        const newNode = new Node(key, value)
        this._add(newNode)
        this.map.set(key, newNode)

        if (this.map.size > this.capacity) {
            const lru = this.tail.previous
            this._remove(lru)
            this.map.delete(lru.key)
        }
    }

    _remove(node) {
        node.previous.next = node.next
        node.next.previous = node.previous
    }

    _add(node) {
        const headNext = this.head.next
        this.head.next = node
        node.previous = this.head
        node.next = headNext
        headNext.previous = node
    }
}