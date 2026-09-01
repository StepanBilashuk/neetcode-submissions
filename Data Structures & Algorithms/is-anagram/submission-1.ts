class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>();

        if (s.length !== t.length) {
            return false;
        };

        for (let i = 0; i < s.length; i++) {
            let x = map.get(s[i]);
            if (x) {
                map.set(s[i], x + 1);
            } else {
                 map.set(s[i], 1);
            }
        }

        for (let y = 0; y < t.length; y++) {
            let x = map.get(t[y]);
            if (x) {
                map.set(t[y], x - 1);
            }
        }

        return [...map.values()].every(value => value === 0);
        
    }
}
