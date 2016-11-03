const findDuplicates = string => {
    let map = {};
    let resultSets = new Set();

    for (let i = 0; i < string.length; i++) {
        if (string[i] in map) {
            map[string[i]]++;
        } else {
            map[string[i]] = 1;
        }
    }

    for (let key in map) {
        if (map[key] !== 1) {
            resultSets.add([key, map[key]]);
        }
    }
    return [...resultSets];
}

const findDuplicatedSubstring = inputString => {
    inputString = inputString.split(" ").join(",");
    let longestSubstringDuplicate = "";

    for (let i = inputString.length; i > 0; i--) {
        for (let j = 0; j < inputString.length - i; j++) {
            //get substring starting from first and last element
            var currentSubString = inputString.substring(j, j + i);
            //if indexof currentSubString exists somewhere else
            if (inputString.indexOf(currentSubString, j + 1) !== -1) {
                //store currentSubString to longestSubstringDuplicate
                longestSubstringDuplicate = currentSubString;
                return longestSubstringDuplicate;
            }
        }
        //if no duplicate is found after one full interation
        if (longestSubstringDuplicate.length) {
            //break out of the loop and return;
            return longestSubstringDuplicate;
        }
    }
}


/* TEST 
console.log('should return bbbaaa for bbbaacbbbaa: ', 'bbbaa' === findDuplicatedSubstring('bbbaacbbbaa')) //true
console.log('should return aba for abbab', 'ab' === findDuplicatedSubstring('abbab')) //true
console.log(findDuplicates('bbbaacbbbaa'))
*/
