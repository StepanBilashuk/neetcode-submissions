class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dubl = new Set(nums);

        if (dubl.size !== nums.length) {
            return true;
        }

        return false;

    }
}
