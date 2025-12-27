// String Count
// Given two strings, determine how many times the second string appears in the first.

// The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.

// function count(text, pattern) {
//   console.log(text, pattern);
//   const regex = /`${pattern}`/;
//   const arr = test.matchAll(regex);
//   console.log(arr);
//   // return text;
// }

function count(text, pattern) {
  let totalCount = 0;

  for (let i = 0; i <= text.length - pattern.length; i++) {
    // check if substring starting at this index matches the patter
    if (text.slice(i, i + pattern.length) === pattern) {
      totalCount++;
    }
  }

  return totalCount;

  // console.log(text, pattern)
  // const regex = /`${pattern}`/;
  // const arr = test.matchAll(regex)
  // console.log(arr)
  // return text;
}

function count(text, pattern) {
  // We use a lookahead (?=) to find overlapping matches
  // 'g' means global (find all)
  const regex = new RegExp(`(?=${pattern})`, 'g');
  const matches = text.matchAll(regex);

  // Convert the iterator to an array and return the length
  return Array.from(matches).length;
}
