function BinarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== value && start <= end) {
        console.log(start, middle, end)
        if (arr[middle] < value) {
            start = middle + 1
        } else {
            end = middle - 1
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === value ? middle : -1
}

console.log(BinarySearch([10, 24, 33, 48, 56, 64, 78, 83, 99, 105], 86))