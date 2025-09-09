const views = (count) => {
    if(count === null || count === undefined) return;
    if (count > 1000000) {
        const num = count/ 1000000;
        return Number.parseFloat(num).toFixed(1) + "M";
    } else if (count > 1000) {
        const num = count/ 1000;
        return Number.parseFloat(num).toFixed(0) + "K";
    }
    return count;
};

export default views;