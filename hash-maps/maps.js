// Maps in JavaScript ECMAScript 2015 or ES6
var firstMap = new Map;
 
firstMap.set(1,'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); //true
firstMap.size; // 2

var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

var objectKey = {};
firstMap.set(objectKey, {a:1});

firstMap.size // 4
firstMap.get(1); // "Elie"
firstMap.get(2); // undefined
firstMap.get(false); // "a boolean"
firstMap.get(arrayKey);  // [1, 2, 3, 4, 5]
firstMap.get(objectKey); // {a: 1}
firstMap.forEach( v => console.log(v));
// VM799:1 Elie
// VM799:1 a boolean
// VM799:1 (5) [1, 2, 3, 4, 5]
// VM799:1 {a: 1}
// undefined


// Also we can iterate over a map with a for...of loop!
firstMap.values(); //MapIterator of values
firstMap.keys(); // MapIterator of keys

