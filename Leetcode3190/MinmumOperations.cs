using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        int [] nums={1,2,3,4};
        Console.WriteLine (MinimumOperations(nums));
    }
    static int MinimumOperations(int[] nums) {
        int value=0;
        for(int i=0;i<nums.Length;i++){
            if(nums[i]%3!=0){
                value++;
            }
        }
        return value;
    }
}