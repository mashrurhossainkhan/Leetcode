class Solution {
    public int removeDuplicates(int[] nums) {
        //base case
        int n = nums.length;
        if(n<2) return n;
        //define pointers
        int L=0, R=1; 
        //remove duplicates in place
        while(R<n){
            if(nums[L] != nums[R]){
                L++;
                nums[L] = nums[R];
            }
            R++;
        }
        //retune the size
        return L+1;
    }
}