// Question-1

var names = ["Ali", "Ahmad", "Basit"];
var score = [400, 385, 455];
var totalMark = 500;

for (let i = 0; i < names.length; i++) {
    console.log(`*Score of ${names[i]} is ${score[i]}. Percentage is ${(score[i] * 100) / 500}%`);
}

// // Question-2
//Write a program to sum the first 100 numbers. Expected Output: 5050

var Sum = 0;
for (let j = 1; j <= 100; j++) {
    Sum += j;
}
console.log(Sum)

// Write a program that takes a number from user and display the multiplication table vertically from 1 to n.
// Input: 5 (For e.g)

var userInput = prompt("Please Enter a Number");

for (let a = 1; a <= userInput; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(`${a} X ${b} = ${a * b}`);
    }
    console.log("<-- -->")
}

// Questin - 4
// Generate the following series using for loops.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (let i = 1; i <= 15; i++) {
    console.log(i);
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (let i = 15; i >= 1; i--) {
    console.log(i);
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (let i = 2; i <= 20; i += 2) {
    console.log(i + "K");
}

//5. Write a program to identify the largest & the smallest number in the given array. A = [24, 53, 78, 91, 12];
// Finding Larger Number;
var A = [24, 53, 78, 91, 12];
var max = A[0];
for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
}
console.log("The Maximaum number is " + max);

//Finding Smaller Number;
var A = [24, 53, 78, 91, 12];
var min = A[0];
for (let i = 0; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
    }
}
console.log("The Minimum number is " + min);


// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward,
// e.g., madam. (Don’t use Array.Reverse())


function isPalindrone(str) {
    var len = str.length;
    var mid = Math.floor(len / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] != str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


// Write a Javascript function which accepts an random alphabet array and check if the
// pattern ‘p’ ‘a’ ‘k’ is found serially in that array.
// E.g. Array [‘a’, ‘b’, ‘q’, ‘p’, ‘a’, ‘l’, ‘p’, ‘a’, ‘k’, ‘w’, ‘x’, ‘z’]

var randomArr = ['a', 'b', 'q', 'p', 'a', 'l', 'p', 'a', 'k', 'w', 'x', 'z'];
chekingPatternFromArr(randomArr);

function chekingPatternFromArr(randomArr) {
    for (let i = 0; i < randomArr.length; i++) {
        if (randomArr[i] == 'p' && randomArr[i + 1] == 'a' && randomArr[i + 2] == 'k') {
            console.log(`Sequence Found! From Index ${i} till ${i + 2}`);
            break;
        }
        else if (i == arr.length - 1) {
            console.log("Sequence not Found");
        }
    }
}


//      Write a JavaScript function that generates a string id (of whatever length is provided) of random characters
//      Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// 	    Output can be: B4332kasdih832hrf3nikja (Incase of length=23)

function GenerateId() {
    var text = "";
    var lengthFromUser = prompt("Please Provide Length");
    var givenChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < lengthFromUser; i++) {
        text += givenChar.charAt(Math.floor(Math.random() * lengthFromUser));
    }
    return text;
}


// Write a JavaScript program to filter out the non-unique values in an array.
var arr = [1, 5, 2, 2, 2, 3, 4, 3, 2, 1, 5];

arr.filter((item, index) => {
    return arr.indexOf(item) == index
})



// Write a JavaScript function that will return the number of minutes in hours and minutes.
// Test Data :
// console.log(timeConvert(200));
// Output : "200 minutes = 3 hour(s) and 20 minute(s)."

function TimeConvert(time) {
    var hour = Math.floor(time / 60);
    var minutes = time % 60;
    console.log(`${time} minutes = ${hour} hour(s) and ${minutes} minutes(s)`);
}


function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$ %^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
        return pass;
    }
}