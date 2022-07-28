function countUniqueValues(arr) {
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(i + 1)
}

countUniqueValues([1, 1, 2])

// start 1 index at 0

// loop over the arr

// start another index at 1

// if the values are not equal

// add 1 to i

// set the value at arr[i] to be equal to arr[j]