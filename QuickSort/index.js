function Pivot(arr, start = 0, end = arr.length - 1) {

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

console.log(Pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]))