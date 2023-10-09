// Product of Nums
function product(nums) {
  if (nums.length === 0) {
    return 1; 
  } else {
    const [first, ...rest] = nums;
    return first * product(rest); 
  }
}

// Longest Word
function longest(words) {
  if (words.length === 0) {
    return 0; 
  } else {
    const [first, ...rest] = words;
    const lengthOfFirst = first.length;
    const lengthOfRest = longest(rest);
    return lengthOfFirst > lengthOfRest ? lengthOfFirst : lengthOfRest; 
  }
}

// Every Other Character
function everyOther(str) {
  if (str.length <= 1) {
    return str; 
  } else {
    const [first, second, ...rest] = str;
    return first + everyOther(rest); 
  }
}

// Is Palindrome
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, ''); 
  if (str.length <= 1) {
    return true; 
  } else {
    const first = str[0];
    const last = str[str.length - 1];
    if (first === last) {
      return isPalindrome(str.slice(1, -1)); 
    } else {
      return false;
    }
  }
}

// Find Index
function findIndex(arr, val, index = 0) {
  if (index === arr.length) {
    return -1; 
  } else if (arr[index] === val) {
    return index; 
  } else {
    return findIndex(arr, val, index + 1); 
  }
}

// Reverse String
function revString(str) {
  if (str === "") {
    return ""; 
  } else {
    const [last, ...rest] = str;
    return revString(rest) + last; 
  }
}

// Gather Strings
function gatherStrings(obj) {
  let strings = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]); 
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key])); 
    }
  }
  return strings;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};
