class Twitter {
    constructor() {
        this.count = 0
        this.tweetMap = new Map()
        this.followMap = new Map()
    }


    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, [])
        }

        this.tweetMap.get(userId).push([this.count, tweetId])
        this.count += 1
    }


    getNewsFeed(userId) {
        const res = []

        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set())
        }

        this.followMap.get(userId).add(userId)

        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0])

        for (const followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)) {
                const tweets = this.tweetMap.get(followeeId)
                const idx = tweets.length - 1
                const [count, tweetId] = tweets[idx]
                maxHeap.enqueue([count, tweetId, followeeId, idx - 1])
            }
        }

        while (!maxHeap.isEmpty() && res.length < 10) {
            const [count, tweetId, followeeId, nextIdx] = maxHeap.dequeue()
            res.push(tweetId)

            if (nextIdx >= 0) {
                const [prevCount, prevTweetId] = this.tweetMap.get(followeeId)[nextIdx]
                maxHeap.enqueue([prevCount, prevTweetId, followeeId, nextIdx - 1])
            }
        }

        return res
    }


    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set())
        }

        this.followMap.get(followerId).add(followeeId)
    }


    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId)
        }
    }
}
