class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(node) {
        if (this.length === 0) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    shift() {
        if (!this.head) return null;
        const node = this.head;
        this.removeNode(node);
        return node;
    }

    removeNode(node) {
        if (!node) return;

        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        node.prev = null;
        node.next = null;

        this.length--;
    }

    moveToEnd(node) {
        this.removeNode(node);
        this.push(node);
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.list = new DoublyLinkedList();
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);
        this.list.moveToEnd(node); // MRU -> end
        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this.list.moveToEnd(node); // Update MRU
        } else {
            if (this.map.size >= this.capacity) {
                const lru = this.list.shift(); // Remove from head (LRU)
                this.map.delete(lru.key);
            }
            const newNode = new Node(key, value);
            this.list.push(newNode); // MRU at tail
            this.map.set(key, newNode);
        }
    }
}
