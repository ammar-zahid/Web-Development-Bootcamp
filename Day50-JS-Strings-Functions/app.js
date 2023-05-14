var str = 'This is a string';
console.log(str);

var index = str.indexOf('is');
console.log(index);

index = str.lastIndexOf('is');
console.log(index);

// slice method can also count negative numbers
var substr = str.slice(5, 11);
console.log(substr);

// substring method cannot count negative numbers
substr = str.substring(5, 11);
console.log(substr);

// starting point to how many letters in a string 
substr = str.substr(5, 4);
console.log(substr);

var replaced = str.replace('string', 'harry');
console.log(replaced);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

var newString = str.concat(' This is a new String');
console.log(newString);

var trimmer = "            content after             white spaces               "
console.log(trimmer);
console.log(trimmer.trim());

var char2 = str.charAt(2);
console.log(char2);

char2 = str.charCodeAt(2);
console.log(char2);

console.log(str[3]);