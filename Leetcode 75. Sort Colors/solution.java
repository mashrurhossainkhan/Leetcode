public class solution {
    public static  void sortColors(int[] nums) {
        int n =  nums.length;
        int L=0, R=n-1, cur=0;
        while(cur<=R){
            if(nums[cur] == 2){
                swap(nums, cur, R);
                R--;
            }else if(nums[cur] == 1){
                cur++;
            }else{
                swap(nums, cur, L);
                L++;
                cur++;
            }
        }
        System.out.print("nums: ");
        for (int i=0; i<n; i++){
            System.out.print(" " +nums[i]);
        }
      
 
    }
           private static  void swap(int[] nums, int p1, int p2){
            int temp = nums[p1];
            nums[p1] = nums[p2];
            nums[p2] = temp;
        }

    public static void main(String[] args) {
        int[] data = {2,0,2,1,1,0};//[0,0,1,1,2,2]
        sortColors(data);
       
    }

}

