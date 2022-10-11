function insertionSort(arr) {

    if (arr.length === 1) {
        return arr
    }

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }

        arr[j + 1] = currentVal
    }

    return arr
}

insertionSort([12, 3, 38, 27, 16, 9, 14, 39])