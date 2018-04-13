// Promises 
function displayAtRandomTime(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(Math.random() > .5) {
        resolve("Yes!");
      } else {
        reject("No!");
      }
    }, 1000);
  });
}

displayAtRandomTime().then(function(value){
  console.log(value);
}).catch(function(error){
  console.log(error);
});

// With JQuery
var years = [];
undefined
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')

.then(function(movie){
	years.push(movie.Year);
	return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');
})

.then(function(movie){
	years.push(movie.Year);
	console.log(years);
})

console.log("ALL DONE!");


// Example of Promise.all
function getMovie(title){
  return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var sherkPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise, sherkPromise, braveheartPromise]).then(function(movies){
  return movies.forEach(function(value){
      console.log(value.Year);
  });
});
