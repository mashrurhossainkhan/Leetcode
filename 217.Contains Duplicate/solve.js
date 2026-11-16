var containsDuplicate = function(nums) {
     const seen = new Set();
     for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }
    return false;
};
// Time: O(n) because each number is checked once.
//Space: O(n) in the worst case if all numbers are unique.
//It can return early as soon as it finds a duplicate.