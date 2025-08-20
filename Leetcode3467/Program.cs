

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        int[] nums = { 4, 3, 2, 1 };

        Console.WriteLine(string.Join(", ", TransformArray(nums)));
    }
    static int[] TransformArray(int[] nums)
    {
        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] % 2 == 0)
            {
                nums[i] = 0;
            }
            else
            {
                nums[i] = 1;
            }
        }
        int temp;
        for (int j = 0; j < nums.Length; j++)
        {
            for (int k = j + 1; k < nums.Length; k++)
            {
                if (nums[j] > nums[k])
                {
                    temp = nums[j];
                    nums[j] = nums[k];
                    nums[k] = temp;
                }
            }
        }
        return nums;
    }
}






