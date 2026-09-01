class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let fixed = 0;

        while (fixed < nums.length) {
            for (let i = fixed + 1; i < nums.length; i++) {
                if (nums[fixed] + nums[i] === target) {
                    return [fixed, i];
                }
            }

            fixed++;
        }

        return [];
    }
}