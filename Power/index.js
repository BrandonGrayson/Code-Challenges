// create a function that takes a number an exponent and recursively multiplies them together

function power(base, exponent) {
    if (exponent === 0) return 1;

    return base * power(base, exponent - 1)
}