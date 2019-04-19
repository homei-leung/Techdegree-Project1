/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
  A  `quotes` array containing motivational quotes from brainyquote.com.
***/
var quotes = [
  { quote : 'With the new day comes new strength and new thoughs.',
    source : 'Eleanor Roosevelt'
  },
  { quote : 'It does not matter how slowly you go as long as you do not stop.',
   source : 'Confucius',
   citation : 'https://www.brainyquote.com/quotes/confucius_140908'
  },
  { quote : 'Life is 10% what happens to you and 90% how you react to it.',
   source : 'Charles R. Swindoll'
  },
  { quote : 'Only I can change my life. No one can do it for me.',
   source : 'Carol Burnett'
  },
  { quote : 'Make your life a masterpiece; imagine no limitations on what you can be, have or do.',
   source: 'Brian Tracy',
   year : 1944
  }
];

console.log(quotes);

/***
The 'getRandomQuote' function generates a random quote from the quotes array.
***/

function getRandomQuote(){
  var i = Math.floor( Math.random() * quotes.length );
  return quotes[i];
}
console.log(getRandomQuote(quotes));

/***
The `printQuote` function takes a random quote from the quotes array and stores the quote
and additional key/values into a string. The `innerHTML` of the `quote-box` div is set
to the string.
***/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var htmlString = '<p class = "quotes">' + randomQuote.quote + '</p>'
   + '<p class = "source">' + randomQuote.source;
  if (randomQuote.citation){
    htmlString += '<span class = "citation">' + randomQuote.citation + '</span>';
  } else if (randomQuote.year){
    htmlString += '<span class = "year">' + randomQuote.year + '</span>';
  } else {
    htmlString += '</p>';
  }
  return htmlString;
  document.getElementById('quote-box').innerHTML = htmlString;
}
console.log(printQuote());

/***
  Invoke the `printQuote` function when the "Show another quote" button is clicked.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
