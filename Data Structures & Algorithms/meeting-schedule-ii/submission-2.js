/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.map((i) => i.start).sort((a, b) => a - b)
        const end = intervals.map((i) => i.end).sort((a, b) => a - b)

        let rooms = 0
        let maxRooms = 0
        let s = 0
        let e = 0

        while (s < intervals.length) {
            if (start[s] < end[e]) {
                rooms++
                s++
            } else {
                rooms--
                e++
            }

            maxRooms = Math.max(maxRooms, rooms)
        }

        return maxRooms

    }
}
