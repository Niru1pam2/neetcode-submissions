class MedianFinder {
    constructor() {
        this.arr = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.arr.push(num)
        this.arr.sort((a, b) => a - b)
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.arr.length % 2 === 0) {
            let first = this.arr[this.arr.length / 2]
            let second = this.arr[(this.arr.length / 2) - 1]
            return (first + second) / 2
        } else {
            return this.arr[Math.floor(this.arr.length / 2)]
        }
    }
}

//1, 2, 3, 4, 5, 6