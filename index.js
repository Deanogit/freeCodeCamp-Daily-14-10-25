// String Count
// Given two strings, determine how many times the second string appears in the first.

// The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.

function count(text, pattern) {
  console.log(text, pattern);
  const regex = /`${pattern}`/;
  const arr = test.matchAll(regex);
  console.log(arr);
  // return text;
}
