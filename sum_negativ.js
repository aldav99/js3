function negative(arr) {
    const result = arr.filter(item => item < 0);

    return {
        count: result.length,
        sum: result.reduce((total, amount) => total + amount)
    }
}

console.log(negative([91, 93, 45, -67, -96, -40, 34, -96, 42, -58]));