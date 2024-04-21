class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        //define pointers
        int L=0, R=0;
        //define sum,length, min
        int sum=0,  n = nums.length, min = Integer.MAX_VALUE;
        //min sub arr length
        while(R<n){
            sum+=nums[R];
            while(target<=sum){
                min = Math.min(min, R-L+1);
                sum -= nums[L];
                L++;
            }
            R++;
        }
        return min == Integer.MAX_VALUE ? 0 : min;
    }
}