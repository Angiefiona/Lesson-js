// Write a JavaScript function that accepts a number 
//as a parameter and check the number is prime or not
function primeNumber(num){
    for(let i = 2;i < num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true
}
let num = [3,7,8,5];
console.log(primeNumber(3));
console.log(primeNumber(7));
console.log(primeNumber(5));
console.log(primeNumber(8));

//Write a JavaScript function that reverse a number.let number = 8999654; 
function reverseNumber(value){
    value = value + '';
return value.split('').reverse().join('')

}
console.log(number(reverseNumber(8999654)));
// Write a function that takes an array of numbers as input and returns
// //the index of the first number that is divisible by 3. If no number
// //is divisible by 3, the function should return -1.
let arr=[17,14,9,33,47,23]
function findFirstDivisibleBy3(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            return i;
        }
    }
    return -1;
}
console.log(findFirstDivisibleBy3(arr))
let nums =[23,15,9,45,12,11]
function IndicesDivisibleBy3(nums) {
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0) {
            indices.push(i);
        }
    }
    return -1
}
console.log(IndicesDivisibleBy3(nums))










