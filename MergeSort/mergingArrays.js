function mergeArrays(arr1, arr2) {
    let results = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        results.push(arr2[j])
        j++
    }

    return results
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    mid = Math.floor(arr.length / 2)
    left = mergeSort(arr.slice(0, mid))
    right = mergeSort(arr.slide(mid))

    return mergeArrays(left, right)
}

mergeArrays([2, 4, 5, 8, 9, 10], [1, 3, 7, 11, 12, 14])

