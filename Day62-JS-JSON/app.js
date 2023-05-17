let obj = {
    name: "ammar",
    subject: "Javascript",
    grade: "B",
}

console.log(obj);

let StringifyObj = JSON.stringify(obj);
console.log(StringifyObj);

let updateObj = StringifyObj.replace("B", "A+");
console.log(updateObj);

let ParseObj = JSON.parse(updateObj);
console.log(ParseObj);