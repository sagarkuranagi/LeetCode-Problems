class Solution:
    def isPalindrome(self, x: int) -> bool:
        
        temp = x
        res = 0
        while (temp > 0) :  
            
            ld = temp % 10
            res = res * 10 + ld
            temp = temp // 10

            
        if x == res:
            return True

        else:
            return False