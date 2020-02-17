const subarraysWithKDistinct = function(A, K) {
    // https://leetcode.com/problems/subarrays-with-k-different-integers/

    let totalSubArray = 0
    let markedPoint = 0
    let arrayInt = {}
    let counter = K
    for(let i = 0; i < A.length - K + 1; i++){
        let endPoint = markedPoint
        if(i > 0){
            arrayInt[A[i - 1]] = arrayInt[A[i - 1]] - 1
            if(arrayInt[A[i - 1]] <= 0){
                counter++
                arrayInt[A[i - 1]] = 0
                endPoint++
            }
        }
        for(endPoint; endPoint < A.length; endPoint++){
            if(counter > 0){
                markedPoint = endPoint
            }
            if(!arrayInt[A[endPoint]]){
                if(counter > 0){
                    counter--
                    arrayInt[A[endPoint]] = 1
                } else {
                    break
                }
            } else {
                if(counter > 0){
                    arrayInt[A[endPoint]] = arrayInt[A[endPoint]] + 1
                }
            }
            if(counter <= 0){
                totalSubArray++
            }
        }
    }
    return totalSubArray
};

export default subarraysWithKDistinct;