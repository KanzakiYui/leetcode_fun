const isIsomorphic = function(s, t) {
    // https://leetcode.com/problems/isomorphic-strings/

    const len = s.length;
    const map = new Map();
    for(let i =0; i<len; i++){
        const e1 = s[i];
        const e2 = t[i];
        if(map.has(e1)){
            if(map.get(e1) !== e2)
                return false;
        }   
        else{
            map.set(e1, e2);
        }
    }
    if(map.size !== new Set(map.values()).size)
        return false;
    return true;
};

export default isIsomorphic