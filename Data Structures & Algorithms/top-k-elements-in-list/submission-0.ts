class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        let count = 0;
        
        for (let i = 0; i < nums.length; i++) {
            const x = map.get(nums[i]);

            if (x) {
                map.set(nums[i], x + 1);
            } else {
                map.set(nums[i], 1)
            }
        }

        return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map((a, b) => a[0]);
    }
}
