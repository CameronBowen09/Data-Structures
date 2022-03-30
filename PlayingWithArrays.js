// Creating Arrays
var numbers = [];

console.log(numbers.length);

var numbers = [1,2,3,4,5];
console.log(numbers.length);

var numbers = new Array();
console.log(numbers.length);

var numbers = new Array(1,2,3,4,5);
console.log(numbers.length);

var numbers = new Array(10);
console.log(numbers.length);

var objects = [1, "Joe", true, null];

var numbers = 3;
var arr = [7,4,1776];
console.log(Array.isArray(number)); 
console.log(Array.isArray(arr)); 

// Accessing and Writing Array Elements
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i+1;
}

var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);

var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log(sum);

// Creating Arrays from Strings
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    console.log("Word" + i + ": "+ words[i])
}

// Aggregate Array Operations
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = i+1;
}
var samenums = nums;

var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
print(samenums[0]);

function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}

var nums = [];
for (var i = 0; i < 100; ++i){
    nums[i] = i + 1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]);

var nums = [1,2,3,4,5];
console.log(nums);

// Searching for a Value
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var searchName = "Raymond"
var position = names.indexOf(searchName);
if (position >= 0) {
    console.log("Found " + searchName + " at position " + position);
}
else {
    console.log(searchName + " not found in array.");
}

var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var name = "Mike";
var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);

// String Representations of Arrays
var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
console.log(namestr);
console.log(names);

// Creating New Arrays from Existing Arrays
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);

var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept); 
console.log(cisDept);

// Adding Elements to an Array
var nums = [1,2,3,4,5];
console.log(nums); 
nums.push(6);
console.log(nums);

var nums = [1,2,3,4,5];
console.log(nums); 
nums[nums.length] = 6;
console.log(nums);

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
    nums[i] = nums[i-1];
}
nums[0] = newnum;
console.log(nums);

var nums = [2,3,4,5];
console.log(nums); 
var newnum = 1;
nums.unshift(newnum);
console.log(nums); 
nums = [3,4,5];
nums.unshift(newnum,1,2);
console.log(nums);

// Removing Elements from an Array
var nums = [1,2,3,4,5,9];
nums.pop();
console.log(nums);

var nums = [9,1,2,3,4,5];
console.log(nums);
for (var i = 0; i < nums.length; ++i) {
    nums[i] = nums[i+1];
}
console.log(nums); 

var nums = [6,1,2,3,4,5];
var first = nums.shift();
nums.push(first);
console.log(nums);

// Adding and Removing Elements from the Middle of an Array
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
console.log(nums);

var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);

var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
console.log(nums);

// Putting Array Elements in Order
var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums);

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names);

var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums);