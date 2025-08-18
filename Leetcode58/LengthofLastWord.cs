public class Solution {
    public int LengthOfLastWord(string s) {
        string[] splitedStr=s.Trim().Split(" ");
        int length=splitedStr[splitedStr.Length-1].Length;
        return length;
        
    }
}