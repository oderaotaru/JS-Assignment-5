//Question 1
var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
result = arr[5][0][0]
result1 = arr[3]
result2 = arr[5][0][3][0]
result3 = arr[5][1]
result4 = arr[5][0][3][1]
console.log(result, result1, result2, result3, result4);

//Question 2
var sen = ["javascript", "web", "Capacity Bay"];
output = `I am a ${sen[1]} developer at ${sen[2]}, and I love ${sen[0]}.`
console.log(output);

//Question 3
let text  = "Generalization";
let letter = text.charAt(10);
console.log(letter);

//Question 4
var fruits = ["orange", "apple", "guava", "lemon"]
console.log(fruits.unshift("pea", "banana"))
console.log(fruits.push("avocado", "mango"))


//Section 2

var num = [];
var count = 1;
function writeNum(){
    while(count <= 101){
    if(count % 3 === 0 && count % 5 === 0){
        num.push("FizzBuzz")
    } else if(count % 3 === 0){
        num.push("Fizz")
    } else if(count % 5 === 0){
        num.push("Buzz")
    } else{
        num.push(count)
    }
    
    count++
    }
    console.log(num);
}


writeNum()



