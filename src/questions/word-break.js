const wordBreak = function(s, wordDict){
    // https://leetcode.com/problems/word-break/

    const lookup = [];
    const dict = new Set(wordDict);
    if(dict.has(s))
        return true;
    const wordBreakRecurrence = (s, dict, lookup) => {
        const len = s.length;
        if(!len)
            return true;
        if(!lookup[len]){
            lookup[len] = -1;
            for(let i=0; i<s.length;i++){
                const prefix = s.slice(0, i+1);
                const suffix = s.slice(i+1);
                if(dict.has(prefix) && wordBreakRecurrence(suffix, dict, lookup)){
                    lookup[len] = 1;
                    return true;
                }
            }
        }
        return lookup[len] === 1;
    }
    return wordBreakRecurrence(s, dict, lookup);
};

export default wordBreak;