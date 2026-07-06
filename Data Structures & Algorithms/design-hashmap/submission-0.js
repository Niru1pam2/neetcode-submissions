class MyHashMap {
    constructor() {
        this.data = {}
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {

        this.data[key] = value
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.data.hasOwnProperty(key) ? this.data[key] : -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.data[key]
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
