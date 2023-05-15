// Objects

let employee = {
    name: "Ammar",
    salary: 10,
    university: "Iqra University",
    degree: "BSCS"
}

console.log(employee);

// Arrays

let array = [1, 4, "javascript", null, undefined, 5];
console.log(array);

let array2 = new Array ("hello", 4, 34, 98, undefined, 88);
console.log(array2);
array2 = array2.sort();
// console.log(array2.sort());
console.log(array2);

array2.push('Added to string');
console.log(array2);

console.log(employee.degree);
console.log(employee.name, employee.salary);

let array3 = new Array(34);
console.log(array3);

console.log(employee['university']);