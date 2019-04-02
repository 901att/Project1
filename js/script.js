/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
var quotes = [
  {
    quote:"I'm the king of the world!" ,
    name:'Titanic',
    citation:'',
    year:1997
  },
  {
    quote:'Carpe diem. Seize the day, boys. Make your lives extraordinary.',
    name:'Dead Poets Society',
    citation:'',
    year:1989
  },
  {
    quote:'My precious.',
    name:'The Lord of the Rings: The Two Towers',
    citation:'wikipedia',
    year:1988
  },
  {
    quote:"Here's Johnny!",
    name:'The Shining',
    citation:'Stanley Kubrick',
    year:1980
  },
  {
    quote:"Keep your friends close, but your enemies closer.",
    name:'The Godfather: Part Ⅱ',
    citation:'Stanley Kubrick',
    year:''
  },
  {
    quote:"I love the smell of napalm in the morning.",
    name:'Apocalypse Now',
    citation:'',
    year:''
  },
  {
    quote:"May the Force be with you.",
    name:'Star Wars',
    citation:'',
    year:1977
  }
];

function getRandomQuote(arr){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return arr[randomNumber];
}

function random_Rgb(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
  return rgbColor;
}

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var message = '<p class="quote">' + randomQuote.quote + '</p>'+'<p class="source">' + randomQuote.name
  if(randomQuote.citation !== ''){
      message += '<span class="citation">'+ randomQuote.citation + '</span>'
  }
  if(randomQuote.year !== ''){
      message += '<span class="year">' + randomQuote.year + '</span>'
  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
  document.body.style.backgroundColor = random_Rgb();
  document.getElementById('loadQuote').style.backgroundColor = random_Rgb();
}

setInterval(printQuote,5000);
