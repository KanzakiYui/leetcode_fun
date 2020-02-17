const reverseWords = function(s){
    // https://leetcode.com/problems/reverse-words-in-a-string/

    return s.trim().split(' ').filter(val => !!val).reverse().join(' ');
};

export default reverseWords;
