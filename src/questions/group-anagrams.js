const groupAnagrams = function(strs){
    // https://leetcode.com/problems/group-anagrams/

    const map = new Map();
    for(let i =0; i<strs.length; i++){
        const s = strs[i];
        const orderedS = strs[i].split('').sort().join('');
        if(map.has(orderedS)){
            const current = map.get(orderedS);
            current.push(s);
            map.set(orderedS, current);
        }
        else{
            map.set(orderedS, [s])
        }
    }
    return Array.from(map.values());
};

export default groupAnagrams;