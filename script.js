console.log("Assignment - 4");

//2 - Create an array `fruits` with the elements `["apple", "banana", "mango", "orange"]`.
console.log("Q2");
const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits); //logging array

//3 - Use array destructuring to extract the first two fruits into separate variables and log them.
console.log("Q3");
const [fruit1, fruit2] = fruits; //extracting first two elements
//logging elements
console.log(fruit1);
console.log(fruit2);

//4 - Swap the values of two variables using array destructuring.
console.log("Q4");
[fruits[0], fruits[1]] = [fruits[1], fruits[0]];
console.log(fruits);

//5 - Create an object `person` with properties `name`, `age`, and `city`.
console.log("Q5");
var person = {
    name: "Puneet",
    age: 23,
    city: "Jaipur",
};
console.log(person); //logging object

//6 - Use object destructuring to extract these properties into variables and log them.
console.log("Q6");
//extracting values
var { name: obj_name, age, city } = person; //we use same var names, if we want different name, we need to mention it
//logging extracted values
console.log(obj_name);
console.log(age);
console.log(city);

//7 - Provide default values for the properties during destructuring.
console.log("Q7");
//providing default values for age and zip
var { name, age = 20, city, zip = 302020 } = person;
//logging properties
console.log(name);
console.log(age); //default value is not used
console.log(city);
console.log(zip); //default value since there is no zip property in object

//8 - Create two arrays `arr1 = [1, 2, 3]` and `arr2 = [4, 5, 6]`.
console.log("Q8");
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1);
console.log(arr2);

//9 - Use the spread operator to merge these arrays into a new array and log the result.
console.log("Q9");
//using spread operator on arr1 and arr2
var arr3 = [...arr1, ...arr2];
console.log(arr3);

//10 - Create a new object by spreading an existing object `person` and adding a new property `country`.
console.log("Q10");
//creating new object person1
var person1 = {
    ...person,
    country: "India",
};
console.log(person1);

//11 - Write a function `sum` that takes any number of arguments and returns their sum using the rest parameter.
console.log("Q11");
//creating function with rest argument
function sum(...num) {
    return num.reduce((total, curr) => total + curr);
}
//calling function and logging result
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(11, 12, 13, 14, 15));

//12 - Use the rest pattern to extract remaining elements in an array after destructuring the first few elements.
console.log("Q12");
//creating array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);
//extracting few elements
var [one, two, three, four, ...rest] = num;
//logging extracted values
console.log(one);
console.log(two);
console.log(three);
console.log(four);
//logging remaining values
console.log(rest);

//13 - Create variables `x = 0`, `y = 5`, and `z = null`.
var x = 0;
var y = 5;
var z = null;

//14 - Use `||` to assign a default value to `x` if it's falsy.
console.log("Q14");
//logging before assigning default value
console.log(x); //output: 0
x = x || "1"; //assigning default value

//logging after assigning default value
console.log(x); //output: 1 as x is falsy

//15 - Use `&&` to log a message only if `y` is truthy.
console.log("Q15");
y && console.log("Y is truthy"); //logs only when y is truthy

//16 - Experiment with short-circuiting behavior in more complex expressions.

console.log("Q16");
//creating variables with different values
var a = 0;
var b = null;
var c;
var d = "Hello";
var e = "last";
//trying different expressions and logging values
console.log(a || b || c || d || e); // stops at d(first truthy value)
console.log(a && b && c && d && e); // stops at a(first falsy value)
console.log("Hello" && 1 && 1 && d && e); // moves to the last elem as all values are truthy

//17 - Create a variable `userInput` with a value of `""`.
var userInput = "";

//18 - Use the nullish coalescing operator to provide a default value if `userInput` is `null` or `undefined`, and log the result.

console.log("Q18");
//scenario - 1
var result = userInput ?? "New user";
console.log(result); // nothing as userInput is defined
//scenario - 2
userInput = null;
var result = userInput ?? "New user";
console.log(result); //default value as userInput is null
//scenario - 3
userInput = undefined;
var result = userInput ?? "New user";
console.log(result); //default value as userInput is undefined

//19 - Compare the behavior of `??` with `||` in handling falsy values.

console.log("Q19");
var a = null;
var b = "Hello";
//logging values using expressions
console.log(a ?? b); //prints hello(default value) as a is null
console.log(a || b); //prints hello as || at truth value which is b

//20 - Create an object `settings` with properties `volume` and `brightness`.
console.log("Q20");
//creating object
const settings = {
    volume: 5,
    brightness: null,
};
console.log(settings);

//21 - Use logical assignment operators (`||=`, `&&=`, `??=`) to modify these properties based on certain conditions and log the updated object.
console.log("Q21");
//using && expression
settings.volume &&= 10; //assings value as volume is truthy
console.log(settings);

//using || expression
settings.brightness ||= "dim"; //assings value as brightness is falsy
console.log(settings);

//22 - Create an array `numbers = [10, 20, 30, 40, 50]`.
console.log("Q22");
var numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//23 - Use a `for-of` loop to iterate through the array and log each number.
console.log("Q23");
for (var num of numbers) {
    console.log(num);
}

//24 - Use destructuring within the loop to work with the index and value.
console.log("Q24");
for (var [index, value] of numbers.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}

//25 - Create an object `car` using enhanced object literals with properties `make`, `model`, and a method `start` that logs a message.
console.log("Q25");
//creating variables
var make = 2024;
var model = "innova";
var car = {
    //defining properties using enhanced literals
    make,
    model,
    start() {
        console.log("Car started");
    },
};
console.log(car);

//26 - Use shorthand property names, computed property names, and method definitions.
console.log("Q26");
//creating variable
var propName = "color";
//using shorthand property name
car = { [propName]: "White" };
console.log(car);

//27 - Create a nested object `user` with properties like `name`, `address`, and `address.city`.
console.log("Q27");
var user = {
    name: "Puneet",
    address: {
        city: "Jaipur",
        zip: 303030,
    },
};
console.log(user);

//28 - Use optional chaining to safely access deeply nested properties and log them.
console.log("Q28");
console.log(user?.address?.city); //output: jaipur
console.log(user?.address?.zip); //output: 303030
console.log(user?.address?.street); //output: undefined, prevents giving error if property does not exist

//29 - Experiment with optional chaining on methods and arrays within the object.
console.log("Q29");
//creating object
var phone = {
    name: "Samsung",
    operate: {
        start() {
            return "Phone start";
        },
    },
};
//chaining on object
console.log(phone?.operate?.start()); //output: "phone start"

//creating array
var details = {
    start: [1, 2, 3, 4, 5],
    end: [6, 7, 8, 9, 10],
};
//chaining on array
console.log(details?.start?.[2]); //output: 3
console.log(details?.end?.[2]); //output: 8

//30 - Create an object `person` with properties like `name`, `age`, and `occupation`.
console.log("Q30");
var person = {
    name: "Puneet",
    age: 23,
    occupation: "Developer",
};
console.log(person);

//31 - Use `Object.keys()` to loop through the keys of the object and log them.
console.log("Q31");
var arr1 = Object.keys(person); //creating array with keys
arr1.forEach((keys) => console.log(keys));

//32 - Use `Object.values()` to log the values.
console.log("Q32");
var arr2 = Object.values(person); //creating array with values
arr2.forEach((value) => console.log(value));

//33 - Use `Object.entries()` to loop through both keys and values, logging them as key-value pairs.
console.log("Q33");
var arr3 = Object.entries(person); //creating array with entries
arr3.forEach((pair) => console.log(pair));

//34 - Create a set `numbersSet` containing the numbers `[1, 2, 3, 4, 5]`.
console.log("Q34");
var mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

//35 - Add a few numbers to the set, including duplicates, and log the resulting set.
console.log("Q35");
mySet.add(6);
mySet.add(5);
mySet.add(7);
mySet.add(7);
console.log(mySet);

//36 - Use set methods to check if a value exists, delete a value, and clear the set.
console.log("Q36");
//check value
console.log(mySet.has(6)); //output: true
//delete value
console.log(mySet.delete(7)); //output: true - value deleted successfully
// console.log(mySet.clear); //clear

//37 - Create a map `userMap` to store user information where the key is the user ID and the value is the user name.
console.log("Q37");
var myMap = new Map([
    ["1", "Puneet"],
    ["2", "bob"],
    ["3", "claire"],
]);
console.log(myMap);

//38 - Add, retrieve, and delete entries in the map, and log the results.
console.log("Q38");
//check entry
console.log(myMap.has("1"));
//add entry
myMap.set("4", "dane");
//delete entry
console.log(myMap.delete("3"));
//print map
console.log(myMap);
// myMap.clear(); //clear set

//39 - Use the `size` property to check the number of entries in the map.
console.log(myMap.size); //output - 3

//40 - Create a map `productMap` containing product names as keys and their prices as values.
console.log("Q40");
var productMap = new Map([
    ["coffee", 50],
    ["tea", 20],
    ["rice", 30],
    ["milk", 26],
    ["bottle", 20],
]);
console.log(productMap);

//41 - Use `forEach()` to loop through the map and log each key-value pair.
console.log("Q41");
productMap.forEach((values, key) => {
    console.log(values, key);
});

//42 - Use `for-of` to iterate over the map’s keys, values, and entries.
console.log("Q42");
//iterate over the map’s keys
for (var key of productMap.keys()) {
    console.log(key);
}
//iterate over the map’s values
for (var value of productMap.values()) {
    console.log(value);
}
//iterate over the map’s entries
for (var entry of productMap.entries()) {
    console.log(entry);
}

//43 - Write a summary comparing arrays, objects, sets, and maps, focusing on their use cases.

// arrays - to store collection of ordered data. used to store lists of data
//objects - to store key value pairs. used to store properties with key
//sets - to store unique records. used to store unique entries and prevent duplication.
//map - to store key value pairs with any data type as keys. used to store data with unique keys

//44 - Given a scenario (e.g., storing a list of unique users, tracking product prices), determine which data structure would be most appropriate and explain why.

// a "SET" data structure would be appropriate as the data we wish to store contains unique users and set prevents storing of duplicate entries. Also, it stores in key-value pair which makes it easier for us to track record.

//45 - Create a string `text = "Hello, JavaScript!"`.
console.log("Q45");
var text = "Hello, JavaScript";
console.log(text);

//46Use string methods to:
// Convert the string to uppercase.
// Extract the substring `"JavaScript"`.
// Replace `"JavaScript"` with `"World"`.
// Split the string into an array of words.

// Convert the string to uppercase.
var upper = text.toUpperCase();
// Extract the substring `"JavaScript"`.
var sub = text.slice(7);
// Replace `"JavaScript"` with `"World"`.
var rep = text.replace("JavaScript", "World");
// Split the string into an array of words.
var spl = text.split(",");

//47 - Log the results of each operation.
console.log("Q47");
//uppercase string
console.log(upper);
//substring
console.log(sub);
//replace string
console.log(rep);
//split string in array
console.log(spl);
