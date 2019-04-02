document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//quotes from famouse movies
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
    year:1978
  }
];

//A function for generate a random number for quote to access object
function getRandomQuote(arr){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return arr[randomNumber];
}

//A function for generate a random rgb color
function random_Rgb(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
  return rgbColor;
}

/*When click "show another quote" buttom will trigger this function to create a random quote and it's source
  or wait for 5 seconds it will renew itself with random background and buttom color. 
*/

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
