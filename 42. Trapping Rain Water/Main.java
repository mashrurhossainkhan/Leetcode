public class main {
        public static int trap(int[] height) {
            int max=0, n=height.length;

            for(int i=0; i<n; i++){
                if(height[max] < height[i]){
                    max=i;
                }
            }
    
            int sum=0, leftMax=0;
    
            for(int i=0; i<max; i++){
                if(height[leftMax] < height[i]){
                    leftMax = i;
                }
                sum+=Math.min(height[leftMax], height[max]) - height[i];
            }
            int rightMax=n-1;
            for(int i= n-1; i>max; i--){
                if(height[rightMax] < height[i]){
                    rightMax = i;
                }
                sum+=Math.min(height[max], height[rightMax]) - height[i];
            }
    
            return sum;
        }
    
        public static void main(String[] args) {
            int[] data = {0,1,0,2,1,0,1,3,2,1,2,1};//{0,1,0,2,1,0,1,3,2,1,2,1};
            int answer = trap(data);
            System.out.println("ANS: " + answer);
        }
    
    }

