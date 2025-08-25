public class Solution {
    public int BalancedStringSplit(string s) {
        int numOfL=0;
        int numOfR=0;
        int numOfSubStr=0;
        for(int i=0;i<s.Length;i++){
            if(s[i]=='L'){
                numOfL++;
            }
            else if(s[i]=='R'){
                numOfR++;
            }
            if(numOfL == numOfR){
                numOfSubStr++;
            }
        }
        return numOfSubStr;
        
    }
}