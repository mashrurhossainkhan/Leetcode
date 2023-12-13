class Solution {
    public int maxArea(int[] height) {
        //Define pointers
        int n = height.length;
        int L = 0, R = n-1;
        int maxArea = Integer.MIN_VALUE;

        //find max area
        while(L<R){
            int area = (R-L) * Math.min (height[R], height[L]);
            maxArea = Math.max(maxArea , area);
            if(height[R] > height[L]){
                L++;
            }else{
                R--;
            }
        }
        return maxArea;
    }
}