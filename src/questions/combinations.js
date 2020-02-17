const combine = function(n, k) {
    //  https://leetcode.com/problems/combinations/

    const globalPicked = [];

    const pickNext = (startIndex = 0, pickedArray = []) => {
        const len = pickedArray.length
        if( len === k)
            return globalPicked.push(pickedArray)
        if(startIndex + (k - len) > n)
            return
        const index = startIndex + 1
        pickNext(index, pickedArray);
        pickNext(index, pickedArray.concat([index]));
    }
    
    pickNext();

    return globalPicked;
};

export default combine;