class Solution {
    public int removeDuplicates(int[] nums) {
        //base case
        int n=nums.length;
        if(n<2) return n;
        //define pointers and counter
        int L=0, R=1, counter =0;
       
        //remove duplicates
        while(R<n){
            if(nums[L] != nums [R]){
                L++;
                nums[L] = nums [R];
                counter=0;
            }else if(nums[L] == nums[R] && counter < 1) {
                counter++;
                nums[++L] =  nums[R];
            }
            R++;
        }
        //return length
        return L+1;
    }
}