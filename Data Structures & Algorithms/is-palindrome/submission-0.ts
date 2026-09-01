class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        let result = true;
        while (left < right) {
            if (!/[a-z0-9]/.test(s[left].toLowerCase())) { 
                left++; continue; 
                }
            if (!/[a-z0-9]/.test(s[right].toLowerCase())) { 
                right--; continue; 
                }
            if (s[right].toLocaleLowerCase() === s[left].toLocaleLowerCase()) {
                left++;
                right--;
                result = true;
                continue;
            } else {
                result = false;
                break;
            }
        }
        return result;
    }
}
