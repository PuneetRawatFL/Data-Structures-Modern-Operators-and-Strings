console.log("Assignment - 4");

//2
console.log("Q2");
const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);

//3
console.log("Q3");
const [fruit1, fruit2] = fruits;
console.log(fruit1);
console.log(fruit2);

//4
console.log("Q4");
[fruits[0], fruits[1]] = [fruits[1], fruits[0]];
console.log(fruits);

//5
console.log("Q5");
var person = {
    name: "Puneet",
    age: 23,
    city: "Jaipur",
};
console.log(person);

//6
console.log("Q6");
var { name: obj_name, age, city } = person; //we use same var names, if we want different name, we need to mention it
console.log(obj_name);
console.log(age);
console.log(city);

//7
console.log("Q7");
var { name, age = 20, city, zip = 302020 } = person; //we use same var names, if we want different name, we need to mention it
console.log(name);
console.log(age); //default value is not used
console.log(city);
console.log(zip); //default value since there is no zip property in object

//8
console.log("Q8");
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
console.log(arr1);
console.log(arr2);

//9
console.log("Q9");
var arr3 = [...arr1, ...arr2];
console.log(arr3);

//10
console.log("Q10");
var person1 = {
    ...person,
    country: "India",
};
console.log(person1);

//11
console.log("Q11");
function sum(...num) {
    return num.reduce((total, curr) => total + curr);
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(11, 12, 13, 14, 15));

//12
console.log("Q12");
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);
var [one, two, three, four, ...rest] = num;
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(rest);

//13
var x = 0;
var y = 5;
var z = null;

//14
console.log("Q14");
console.log(x);
x = x || "1"; //assigning default value
console.log(x);

//15
console.log("Q15");
y && console.log("Y is truth"); //logs only when y is truthy

//16
console.log("Q16");
var a = 0;
var b = null;
var c;
var d = "Hello";
var e = "last";
console.log(a || b || c || d || e); // stops at d(first truthy value)
console.log(a && b && c && d && e); // stops at a(first falsy value)
console.log("Hello" && 1 && 1 && d && e); // moves to the last elem as all values are truthy

//17
var userInput = "";

//18
console.log("Q18");
var result = userInput ?? "New user";
console.log(result); // nothing as userInput is defined
userInput = null;
var result = userInput ?? "New user";
console.log(result); //default value as userInput is null
userInput = undefined;
var result = userInput ?? "New user";
console.log(result); //default value as userInput is undefined

//19
console.log("Q19");
var a = null;
var b = "Hello";
console.log(a ?? b); //prints hello(default value) as a is null
console.log(a || b); //prints hello as || at truth value which is b

//20
console.log("Q20");
const settings = {
    volume: 5,
    brightness: null,
};
console.log(settings);

//21
console.log("Q21");
settings.volume &&= 10; //assings value as volume is truthy
console.log(settings);
settings.brightness ||= "dim"; //assings value as brightness is falsy
console.log(settings);

//22
console.log("Q22");
var numbers = [10, 20, 30, 40, 50];
console.log(numbers);

//23
console.log("Q23");
for (var num of numbers) {
    console.log(num);
}

//24
console.log("Q24");
for (var [index, value] of numbers.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}

//25
console.log("Q25");
var make = 2024;
var model = "innova";
var car = {
    make,
    model,
    start() {
        console.log("Car started");
    },
};
console.log(car);

//26
console.log("Q26");
var propName = "color";
car = { [propName]: "White" };
console.log(car);

//27
console.log("Q27");
var user = {
    name: "Puneet",
    address: {
        city: "Jaipur",
        zip: 303030,
    },
};
console.log(user);

//28
console.log("Q28");
console.log(user?.address?.city);
console.log(user?.address?.zip);

//29
console.log("Q29");
//on object
var phone = {
    name: "Samsung",
    operate: {
        start() {
            return "Phone start";
        },
    },
};
console.log(phone?.operate?.start());

//on array
var details = {
    start: [1, 2, 3, 4, 5],
    end: [6, 7, 8, 9, 10],
};
console.log(details?.start?.[2]); //output: 3
console.log(details?.end?.[2]); //output: 8

//30
console.log("Q30");
var person = {
    name: "Puneet",
    age: 23,
    occupation: "Developer",
};
console.log(person);

//31
console.log("Q31");
var arr1 = Object.keys(person);
arr1.forEach((keys) => console.log(keys));

//32
console.log("Q32");
var arr2 = Object.values(person);
arr2.forEach((value) => console.log(value));

//33
console.log("Q33");
var arr3 = Object.entries(person);
arr3.forEach((pair) => console.log(pair));

//34
console.log("Q34");
var mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

//35
console.log("Q35");
mySet.add(6);
mySet.add(5);
mySet.add(7);
mySet.add(7);
console.log(mySet);

//36
console.log("Q36");
console.log(mySet.has(6)); //check value
console.log(mySet.delete(7)); //delete value
// console.log(mySet.clear); //clear

//37
console.log("Q37");
var myMap = new Map([
    ["1", "Puneet"],
    ["2", "bob"],
    ["3", "claire"],
]);
console.log(myMap);

//38
console.log("Q38");
console.log(myMap.has("1")); //check entry
myMap.set("4", "dane"); //add
console.log(myMap.delete("3")); //delete
console.log(myMap); //print map
// myMap.clear(); //clear set

//39
console.log(myMap.size);

//40
console.log("Q40");
var productMap = new Map([
    ["coffee", 50],
    ["tea", 20],
    ["rice", 30],
    ["milk", 26],
    ["bottle", 20],
]);
console.log(productMap);

//41
console.log("Q41");
productMap.forEach((values, key) => {
    console.log(values, key);
});

//42
console.log("Q42");
for (var key of productMap.keys()) {
    console.log(key);
}
for (var value of productMap.values()) {
    console.log(value);
}
for (var entry of productMap.entries()) {
    console.log(entry);
}

//43
// arrays - to store collection of ordered data. used to store lists of data
//objects - to store key value pairs. used to store properties with key
//sets - to store unique records. used to store unique entries and prevent duplication.
//map - to store key value pairs with any data type as keys. used to store data with unique keys

//44
// a "SET" data structure would be appropriate as the data we wish to store contains unique users and set prevents storing of duplicate entries. Also, it stores in key-value pair which makes it easier for us to track record.

//45
console.log("Q45");
var text = "Hello, JavaScript";
console.log(text);

//46
var upper = text.toUpperCase();
var sub = text.slice(7);
var rep = text.replace("JavaScript", "World");
var spl = text.split(",");

//47
console.log("Q47");
console.log(upper);
console.log(sub);
console.log(rep);
console.log(spl);
