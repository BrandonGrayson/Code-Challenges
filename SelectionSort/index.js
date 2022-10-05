function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(i, j)
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }


    }
    console.log(arr)
    return arr
}

selectionSort([10, 14, 3, 8, 17, 11])