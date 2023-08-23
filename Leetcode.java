//https://leetcode.com/problems/move-zeroes/submissions/
class Leetcode283 {
    public void moveZeroes(int[] nums) {
        int n = nums.length;
        if (n<2) return;
        //define pointer
        int L = 0, R=1;

        while(R<n){
            if(nums[L] !=0){
                L++;
                R++;
            }else if(nums[R] == 0){
                R++;
            }else{
                int temp = nums[R];
                nums [R] = nums[L];
                nums [L] = temp; 
            }
        }
    }
}