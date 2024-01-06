import java.util.LinkedList;
import java.util.List;

public class partitionlabels763 {
        public static List<Integer> partitionLabels(String s) {
        char[] arr = s.toCharArray();
        int[] cache = new int[128];

        for(int i=0; i<arr.length; i++){
            //ababcbacadefegdehijhklij
            char cur = arr[i];
            cache[cur] = i;
            System.out.println("cur: " + cur);
             System.out.println("cache[cur]: " + cache[cur]);
        }
        int L=0, R=0, index=0;
        List<Integer> res = new LinkedList<>();

        while(index < arr.length){
            char cur = arr[index];
            System.out.println("Starting 2nd loop: ");
            System.out.println("brefore cur: " + cur);
            System.out.println("brefore R: " + R);
            System.out.println("brefore cache[cur]: " + cache[cur]);
            R = Math.max(R, cache[cur]);
            System.out.println("R: " + R);
            if(R == index){
                int size = R-L+1;
                res.add(size);
                R++;
                L=R;
            }
            index++;
        }
        return res;
    }
    
    public static void main(String[] args) {
		List<Integer> res1 = partitionLabels("ababcbacadefegdehijhklij");
        System.out.println(res1);
	}
}
