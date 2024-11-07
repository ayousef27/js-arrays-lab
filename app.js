/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

//const foods = ["pizza", "cheeseburger"]

//console.log('Exercise 1 result:', foods)

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

//const foods = ['pizza', 'cheeseburger']

//console.log('Exercise 2 result:', foods)

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')

//console.log('Exercise 3 result:', foods)

//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//const favFood = foods[1]
//console.log('Exercise 4 result:', favFood)
//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//foods.splice(2, 0, 'tofu')
//console.log('Exercise 5 result:', foods)

//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//foods.splice(2, 0, 'tofu')
//foods.splice(1, 1, 'sushi', 'cupcake')
//console.log('Exercise 6 result:', foods)

//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//foods.splice(2, 0, 'tofu')
//foods.splice(1, 1, 'sushi', 'cupcake')
//const yummy = foods.slice(1, 3)
//console.log('Exercise 7 result:', yummy)
//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//foods.splice(2, 0, 'tofu')
//foods.splice(1, 1, 'sushi', 'cupcake')
//const yummy = foods.slice(1, 3)
//const soyIdx = foods.indexOf('tofu')
//console.log('Exercise 8 result:', soyIdx)

//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//foods.splice(2, 0, 'tofu')
//foods.splice(1, 1, 'sushi', 'cupcake')
//const yummy = foods.slice(1, 3)
//const soyIdx = foods.indexOf('tofu')
//const allFoods = foods.join(' -> ')
//console.log('Exercise 9 result:', allFoods)

//const foods = ['pizza', 'cheeseburger']
//foods.unshift('taco')
//foods.splice(2, 0, 'tofu')
//foods.splice(1, 1, 'sushi', 'cupcake')
//const yummy = foods.slice(1, 3)
//const soyIdx = foods.indexOf('tofu')
//const allFoods = foods.join(' -> ')
//const hasSoup = foods.includes('soup')
//console.log('Exercise 10 result:', hasSoup)

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
//const odds = []

//for (let i = 0; i < nums.length; i++) {
//if (nums[i] % 2 !== 0) {
//odds.push(nums[i])
//}
//}

//console.log('Exercise 11 result:', odds)

//const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]

//const fizz = []
//const buzz = []
//const fizzbuzz = []

//for (let i = 0; i < nums.length; i++) {
//if (nums[i] % 3 === 0) {
//fizz.push(nums[i])
//}
//if (nums[i] % 5 === 0) {
//buzz.push(nums[i])
//}
//if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
//fizzbuzz.push(nums[i])
//}
//}

//console.log('Exercise 12 Results:')
//console.log('  fizz:', fizz)
//console.log('  buzz:', buzz)
//console.log('  fizzbuzz:', fizzbuzz)

//const numArrays = [
//[100, 5, 23],
//[15, 21, 72, 9],
//[45, 66],
//[7, 81, 90]
//]
//const numList = numArrays[numArrays.length - 1]

//console.log('Exercise 13 result:', numList)

//const numArrays = [
//[100, 5, 23],
//[15, 21, 72, 9],
//[45, 66],
//[7, 81, 90]
//]
//const num = numArrays[2][1]

//console.log('Exercise 14 result:', num)

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
]
let total = 0

for (let i = 0; i < numArrays.length; i++) {
  for (let j = 0; j < numArrays[i].length; j++) {
    total = numArrays[i][j] + total
  }
}

console.log('Exercise 15 result:\n', total)
