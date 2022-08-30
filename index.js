const slidingWindow = (arr, num) => {
    // Temp sum and max Sum should start off equal
    const tempSum = 0
    const maxSum = 0
    // base case if num is bigger than the length of the array return false
    if (arr.length < num) return null;
    // add the initial num arr places and save that to the maxSum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    // loop through the array for each index subtract one place from the array total and add the next index place to the array total
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}