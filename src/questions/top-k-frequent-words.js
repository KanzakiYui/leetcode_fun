const topKFrequent = function(words, k) {
    // https://leetcode.com/problems/top-k-frequent-words/

    words = words.sort();
    const map = new Map();
    for(let i=0; i<words.length; i++){
        const value = words[i]
        if(map.has(value))
            map.set(value, map.get(value)+1)
        else
            map.set(value, 1)
    }
    const values = Array.from(map.values()).sort((a, b) => b - a);
    const result = [];
    for(let i=0; i<k; i++){
        for (let [key, value] of map.entries()) {
            if (value === values[i]){
                result.push(key)
                map.delete(key)
                break
            }
        }
    }
    return result;
};

export default topKFrequent;