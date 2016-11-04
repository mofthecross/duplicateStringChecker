export const findDuplicates = inputString => {
  let resultSet = new Set();

  let longestRepeated = findDuplicatedSubstring(inputString);
  //check if longestRepeated has more than 1 length and consists of atleast 2 different characters;
  if (longestRepeated.length > 1 && longestRepeated[0] !== longestRepeated[longestRepeated.length - 1] ) {
    let duplicateCount = countDuplicate(inputString, longestRepeated);
    resultSet.add([longestRepeated, duplicateCount]);
  }

  let nonDuplicateSet = new Set(inputString.split('')); //remove duplicate
  for (let item of nonDuplicateSet) {
    let duplicateCount = countDuplicate(inputString, item);
    if (duplicateCount > 1) {
      resultSet.add([item, duplicateCount]);
    }
  }

  return [...resultSet];
}
// TODO: Optimize time complexity by implementing Suffix tree;
const findDuplicatedSubstring = inputString => {
  inputString = inputString.split(" ").join(",");
  let longestSubstringDuplicate = "";

  for (let i = inputString.length; i > 0; i--) {
    for (let j = 0; j < inputString.length - i; j++) {

      //get substring starting from first and last element
      let currentSubString = inputString.substring(j, j + i);

      //if indexof currentSubString exists somewhere else
      if (inputString.indexOf(currentSubString, j + 1) !== -1) {

        //store currentSubString to longestSubstringDuplicate and break;
        longestSubstringDuplicate = currentSubString;
        break;
      }
    }

    //if no duplicate is found after one full interation
    if (longestSubstringDuplicate.length) {
      //break out of the loop and return
      break;
    }
  }
  return longestSubstringDuplicate;
}

const countDuplicate = (inputString, subString) => {
  let found = inputString.match(new RegExp(subString, "g"));
  return found ? found.length : 0;
}

export const alphaNumericCheck = (inputString) => {
  var valid = new RegExp("^[a-zA-Z0-9]");
  return valid.test(inputString);
}
