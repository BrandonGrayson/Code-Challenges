function pivot(arr, start = 0, end = arr.length - 1) {

    function swap(array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    let pivot = arr[start]
    let swapIndex = 0;

    for (let i = start + 1; i < end; i++) {
        if (pivot > arr[i]) {
            swapIndex += 1;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)

    return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotIdx = pivot(arr, left, right)

        quickSort(arr, left, pivotIdx - 1)

        quickSort(arr, pivotIdx + 1, right)
    }

    return arr

}