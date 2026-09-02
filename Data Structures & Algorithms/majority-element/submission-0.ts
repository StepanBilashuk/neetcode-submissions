class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const n = nums.length;
        let candidate = -1;
        let count = 0;

        for (const num of nums) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }

        count = 0;
        for (const num of nums) {
            if (num === candidate) {
                count++;
            }
        }

        if (count > (n / 2)) {
            return candidate;
        }
    }
}
