const rotate = function(matrix){
    // https://leetcode.com/problems/rotate-image/

    const len = matrix.length;
    for(let i=len; i<2*len; i++){
      let temp = [];
      for(let j=0; j<len; j++)
        temp.push(matrix[len - j - 1][i-len]);
      matrix.push(temp);
    }
    for(let i=0; i<len; i++)
      matrix.shift();
    return matrix;
};

export default rotate;