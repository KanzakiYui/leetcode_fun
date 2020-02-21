const maxSubArray = function(array) {
    // https://leetcode.com/problems/maximum-subarray/

    const findMaxCrossingSubarray = (
        array,
        startIndex,
        middleIndex,
        endIndex
    ) => {   
        let leftMaxSum = array[middleIndex];
        let accumulatedLeftSum = leftMaxSum;
  
        for(let i = middleIndex-1; i >= startIndex; i--){
            accumulatedLeftSum += array[i];
            if(accumulatedLeftSum > leftMaxSum){
                leftMaxSum = accumulatedLeftSum;
            }
        }
    
        let rightMaxSum = array[middleIndex + 1];
        let accumulatedRightSum = rightMaxSum;
    
        for(let i = middleIndex + 2; i <= endIndex; i++){
            accumulatedRightSum += array[i];
            if(accumulatedRightSum > rightMaxSum){
                rightMaxSum = accumulatedRightSum;
            }
        }
    
        return leftMaxSum + rightMaxSum
    };
    
    const getMaximumSubarray = (
        array,
        startIndex,
        endIndex
    ) => {
        if(startIndex === endIndex)
            return array[startIndex]
        
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const sumOnLeft =
            getMaximumSubarray(array, startIndex, middleIndex);
        const sumOnRight =
            getMaximumSubarray(array, middleIndex+1, endIndex);
        const sumOnCross =
            findMaxCrossingSubarray(array, startIndex, middleIndex, endIndex);
        
        return Math.max(sumOnLeft, sumOnRight, sumOnCross); 
    };

    return getMaximumSubarray(array, 0, array.length - 1);
};

export default maxSubArray;