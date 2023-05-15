let age = 21;

if (age >= 18) {
    console.log('You are eligible for license');
}
else if (age < 18 && age > 0) {
    console.log('You are not eligible for license');
}
else if (age <= 0) {
    console.log('Invalid age');
}
else {
    console.log('Enter age in numbers');
}

const num = 21;
switch (num) {
    case 54:
        console.log('This number is 54');
        break;
    case 21:
        console.log('This number is 21');
        break;
    case 78:
        console.log('This number is 78');
        break;

    default: console.log('Invalid');
        break;
}