//Java Solution

class Solution {
    public int minCost(int[][] costs) {
        if (costs.length == 0) {
            return 0;
        }
        
        int[] prevRow = costs[0];
        
        for (int i = 1; i < costs.length; i++) {
            int[] currRow = costs[i];
            
            currRow[0] += Math.min(prevRow[1], prevRow[2]);
            currRow[1] += Math.min(prevRow[0], prevRow[2]);
            currRow[2] += Math.min(prevRow[0], prevRow[1]);
            
            prevRow = currRow;
        }
        
        return Math.min(Math.min(prevRow[0], prevRow[1]), prevRow[2]);
    }
}