// alert('This web page doesnot have anything')

// let a = alert("Webpage not available");

// console.log(a);

// let name = prompt('Enter your name', "Your name");
// console.log(name);

// let deletePost = confirm('Are you sure you want to delete the post');
// console.log(deletePost);

let enterAge = prompt("Enter your age", "age");
console.log(enterAge)

if (enterAge >= 18) {
    console.log('Can enter club')
    let sure = confirm('Are you sure you want to enter')
} else {
    console.log('Cannot enter club')
}