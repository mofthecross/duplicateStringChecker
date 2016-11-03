import React from 'react';

export const findDuplicates = inputString => {
  let resultSet = new Set();
  let nonDuplicateSet = new Set(inputString.split('')); //remove duplicate

  for (let item of nonDuplicateSet) {
    let duplicateCount = countDuplicate(inputString, item);
    if (duplicateCount > 1) {
      resultSet.add([item, duplicateCount]);
    }
  }

  let longestRepeated = findDuplicatedSubstring(inputString); //get longest repeated substring
  if (longestRepeated.length > 1) {
    let duplicateCount = countDuplicate(inputString, longestRepeated);
    resultSet.add([longestRepeated, duplicateCount]);
  }

  return [...resultSet];
}

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
