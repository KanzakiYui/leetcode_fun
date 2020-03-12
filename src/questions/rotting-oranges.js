const orangesRotting = function(grid) {
    // https://leetcode.com/problems/rotting-oranges/

    let row = grid.length;
    let col = grid[0].length;
    let count = 0;
    let unchanged = new Set();
    while(true){
        let hasChange = false;
        for(let i = 0; i < row; i++){
            for(let j = 0; j < col; j++){
                const current = grid[i][j];
                if(current === 1){
                    unchanged.add(`${i}-${j}`);
                    const level = 2 + count;
                    const top = grid[i-1]&& grid[i-1][j] === level;
                    const left = grid[i][j-1] === level;
                    const bottom = grid[i+1]&& grid[i+1][j] === level;
                    const right = grid[i][j+1] === level;
                    if(top || left || bottom || right){
                        grid[i][j] = 1+level;
                        hasChange = true;
                        unchanged.delete(`${i}-${j}`);
                    }  
                }
            }
        }
        if(!hasChange)
            break;
        count++;  
    }
    return unchanged.size ? -1 : count;
};

export default orangesRotting;