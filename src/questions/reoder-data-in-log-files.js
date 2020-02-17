const reorderLogFiles = function(logs) {
    // https://leetcode.com/problems/reorder-data-in-log-files/

    const letterArr = [];
    const digitArr = [];
    logs.forEach(log => {
        if(log.split(' ')[1][0] < 'A')
            digitArr.push(log)
        else
            letterArr.push(log)
    });
    letterArr.sort((logA, logB) => {
        const indexA = logA.indexOf(' ');
        const firstA = logA.slice(0, indexA);
        const laterA = logA.slice(indexA);
        const indexB = logB.indexOf(' ');
        const firstB = logB.slice(0, indexB);
        const laterB = logB.slice(indexB);
        if(laterA === laterB)
            return firstA.localeCompare(firstB);
        return laterA.localeCompare(laterB);
    });
    return [...letterArr, ...digitArr];
};

export default reorderLogFiles;