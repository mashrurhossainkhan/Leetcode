class Solution {
    public int[] sortedSquares(int[] nums) {
        int left, right, n = nums.length , index = n - 1;
        left = 0;
        right = n - 1;
        int[] result = new int[n];

        while(0<=index){
            int leftSqr = nums [left] * nums [left];
            int rightSqr = nums [right] * nums [right];

            if(leftSqr >= rightSqr){
                result [index--] = leftSqr;
                left++;
            }else{
                result [index--] = rightSqr;
                right--;
            }
        }
        return result;
    }
}