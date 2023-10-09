1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: B: ReferenceError: greetign is not defined

Explanation:
In the code provided, you declared a variable greeting but mistakenly assigned an empty object to a variable named greetign. Since greetign is not defined, attempting to log it will result in a ReferenceError. The correct variable name should be greeting, which would log an empty object {} to the console.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer

The correct answer:   C: "12"

Explanation:
In the sum function, you are performing a simple addition operation on the parameters a and b. When you call sum(1, "2"), JavaScript will try to coerce the string "2" to a number to perform the addition. The result of this operation is the string concatenation of "1" and "2," resulting in "12".


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer

The correct answer is:

A: ['🍕', '🍫', '🥑', '🍔']

Explanation:
In this code, an array food is created with four elements. Then, an object info is created with a property favoriteFood that is initially set to the first element of the food array, which is "🍕".

However, in the next line, info.favoriteFood is reassigned to "🍝". This does not affect the original food array, so when you console.log(food), it will still output the original food array, which is ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer

The correct answer:    B: "Hi there, undefined."

Explanation:
In the provided code, the sayHi function expects a parameter name, which is used to construct the string that is returned. However, when you call sayHi() without providing any argument, the name parameter inside the function is undefined. Therefore, 
the function returns "Hi there, undefined" where undefined represents the value of the name parameter in this context.

5.  Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer

The correct answer:   B: 2.

Explanation:
In this code, the forEach method is used to iterate over the nums array. Inside the callback function, there's a conditional check if (num), which evaluates to true for all elements in the array except the first one (0 is a falsy value in JavaScript). Therefore, the count variable is incremented for each element except the first one. Since there are three non-zero elements in the array (1, 2, and 3), the count variable is incremented three times, resulting in a final value of 2. Hence, when you log the count variable, it will output 2..

