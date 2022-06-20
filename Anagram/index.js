// Check if a string is an anagram or not
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let lookup = {}
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[1]

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1

    }
    for (let i = 0; i < str2.length; i++) {
        letter = str2.length
        if (!lookUp[letter]) {
            return false
        } else {
            lookUp[letter] -= 1
        }
    }
    return true
}