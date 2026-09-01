class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dubl = new Set(nums);

        return dubl.size !== nums.length;

    }
}
