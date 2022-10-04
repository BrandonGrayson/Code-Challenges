function bubbleSort(arr, ind1, ind2) {
    let noSwaps = true
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
                // [arr[j], arr[j+ 1]] = [arr[j + 1], arr[j]]
            }
        }
        if (noSwaps) break;
    }
    return arr
}