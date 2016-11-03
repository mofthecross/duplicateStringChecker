
export const findDuplicates=string=>{
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
			resultSets.add([key, map[key]])
		}
	}

	return [...resultSets];
}
